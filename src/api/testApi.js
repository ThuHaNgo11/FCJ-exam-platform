import {API, graphqlOperation} from "@aws-amplify/api";
import {listTests} from "../graphql/queries";
import {createTest, deleteTest, updateTest} from "../graphql/mutations";

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

export const deleteTestById = async(testId) => {
    try {
        let result = await API.graphql({
            query: deleteTest,
            variables: {input: {id: testId}}
        })
        return result
    } catch (e) {
        console.log(e)
    }
}