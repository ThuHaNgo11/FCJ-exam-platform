import {API, graphqlOperation} from "@aws-amplify/api";
import {listTests} from "../graphql/queries";
import {createTest, createTestQuestion, deleteTest, deleteTestQuestion, updateTest} from "../graphql/mutations";

const getListTestsQuery = `
    query ListTests(
        $filter: ModelTestFilterInput
        $limit: Int
        $nextToken: String
    ) {
        listTests(filter: $filter, limit: $limit, nextToken: $nextToken) {
        items {
            id
            data
            Questions {
                items {
                    id
                    testId
                    questionId
                    question {
                      prompt
                    }
                    createdAt
                    updatedAt
                  }
                nextToken
            }
            createdAt
            updatedAt
        }
        nextToken
        }
    }
`


export const listTest = async(filter) => {
    let tests = await API.graphql(graphqlOperation(getListTestsQuery, {filter}))
    tests.data.listTests.items.map((item) => {
        item.data = JSON.parse(item.data)
        item.Questions = item.Questions.items.map(
            it => {
                const {id, questionId, question} = it
                const {prompt} = question
                return {id, questionId, prompt}
            }
        )
        console.log("Questions", item.Questions)
    })
    console.log(tests)
    return tests
}

export const saveTest = async(test) => {
    console.log("Saving test", test)
    if (!!test.id) {
        let {createdAt, updatedAt, Questions, ...input} = test
        try {
            input.data = JSON.stringify(input.data)
            let result = await API.graphql(graphqlOperation(updateTest, {input}))
            // Link test.id with test.Questions[]
            await Promise.all(
                Questions.map(
                    async (question) => {
                        if (question.new) {
                            await linkQuestionToTest(result.data.updateTest.id, question.questionId)
                        } else if (question.deleted) {
                            await unlinkQuestionToTest(question.id)
                        }
                    }
                )
            )
            return result
        } catch (e) {
            console.log(e)
        }
    } else {
        let {id, Questions, ...input} = test
        input.data = JSON.stringify(input.data)
        try {
            let result = await API.graphql(graphqlOperation(createTest, {input}))
            // Link result.createTest.id with test.Questions[]
            await Promise.all(
                Questions.map(
                    async (question) => {
                        await linkQuestionToTest(result.data.createTest.id, question.questionId)
                    }
                )
            )
            return result
        } catch (e) {
            console.log(e)
        }
    }
}

export const deleteTestById = async(id, questions) => {
    try {
        await Promise.all (
            questions.map(
                async (question) => {
                    if (!!question.id) {
                        await unlinkQuestionToTest(question.id)
                    }
                }
            )
        )

        let result = await API.graphql({
            query: deleteTest,
            variables: {input: {id}}
        })
        return result
    } catch (e) {
        console.log(e)
    }
}

export const linkQuestionToTest = async(testId, questionId) => {
    try {
        let result = await API.graphql(graphqlOperation(createTestQuestion, {input: {testId, questionId}}))
        return result
    } catch (e) {
        console.log(e)
    }
}

export const unlinkQuestionToTest = async(id) => {
    try {
        let result = await API.graphql({
            query: deleteTestQuestion,
            variables: {input: {id}}
        })
        return result
    } catch (e) {
        console.log(e)
    }
}