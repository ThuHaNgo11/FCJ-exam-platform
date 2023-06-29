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
            input.date = input.date.toISOString()
            input.data = JSON.stringify(input.data)
            input.examTestId = Test.id
            let result = await API.graphql(graphqlOperation(updateExam, {input}))
            // Link exam.id with exam.Test

            return result
        } catch (e) {
            console.log(e)
        }
    } else {
        let {id, Test, ...input} = exam
        input.date = input.date.toISOString()
        input.data = JSON.stringify(input.data)
        input.examTestId = Test.id
        console.log("Saving", input)
        try {
            let result = await API.graphql(graphqlOperation(createExam, {input}))
            // Link result.createExam.id with exam.Test
            return result
        } catch (e) {
            console.log(e)
        }
    }
}