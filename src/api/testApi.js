import {API, graphqlOperation} from "@aws-amplify/api";
import {listTests} from "../graphql/queries";
import {createTest, createTestQuestion, deleteTest, deleteTestQuestion, updateTest} from "../graphql/mutations";

export const listTest = async(filter) => {
    let tests = await API.graphql(graphqlOperation(listTests, {filter}))
    console.log(tests)
    return tests
}

export const saveTest = async(test) => {
    if (!!test.id) {
        let {createdAt, updatedAt, questions, ...input} = test
        try {
            let result = await API.graphql(graphqlOperation(updateTest, {input}))
            return result
        } catch (e) {
            console.log(e)
        }
    } else {
        let {id, ...input} = test
        try {
            let result = await API.graphql(graphqlOperation(createTest, {input}))
            return result
        } catch (e) {
            console.log(e)
        }
    }
}

export const deleteTestById = async(id) => {
    try {
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