import {API, graphqlOperation} from "@aws-amplify/api";
import {listExams} from "../graphql/queries";
import {createExam, createTest, createTestQuestion, updateExam, updateTest} from "../graphql/mutations";


export const listExam = async(filter) => {
    let exams = await API.graphql(graphqlOperation(listExams, {
        filter
    }))
    return exams
}


export const saveExam = async(exam) => {
    console.log("Saving exam", exam)
    if (!!exam.id) {
        let {createdAt, updatedAt, Test, ...input} = exam
        try {
            input.data = JSON.stringify(input.data)
            let result = await API.graphql(graphqlOperation(updateExam, {input}))
            // Link exam.id with exam.Test

            return result
        } catch (e) {
            console.log(e)
        }
    } else {
        let {id, Test, ...input} = test
        input.data = JSON.stringify(input.data)
        try {
            let result = await API.graphql(graphqlOperation(createExam, {input}))
            // Link result.createExam.id with exam.Test
            return result
        } catch (e) {
            console.log(e)
        }
    }
}