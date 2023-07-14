import {API, graphqlOperation} from "@aws-amplify/api";
import {listExams} from "../graphql/queries";
import {createExam, updateExam, deleteExam, createExamEmail} from "../graphql/mutations";
import { Storage } from "aws-amplify";


export const listExam = async(filter) => {
    // process data before displaying
    let processExamData = (exams) => {
        console.log(exams)
        exams.data.listExams.items.map((item) => {
            item.data = JSON.parse(item.data)
            if (item.Test && item.Test.data) {
                item.Test.data = JSON.parse(item.Test.data)
            }
            item.date = new Date(item.date)
            return item
        })
        return exams
    }

    // get data from API
    let exams = await API.graphql(graphqlOperation(listExams, {
        filter
    }))
    exams = processExamData(exams)

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

export const deleteExamById = async (examId) => {
    try {
        let result = await API.graphql({
                query: deleteExam,
                variables: {input: {id: examId}}
            }
        )
        return result
    } catch (ex) {
        console.log(ex)
    }
}

const getExamForSessionQuery = 
`
  query GetExam($id: ID!) {
    getExam(id: $id) {
      id
      date
      org
      data
      Test {
        id
        data
        Questions {
            items {
                id
                testId
                questionId
                question {
                  id,
                  prompt,
                  data,
                  choices {
                    key
                    value
                  }
                }
              }
            nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      examTestId
    }
  }
`

export const getExamForSession = async (examId) => {
    try {
        let result = await API.graphql({
                query: getExamForSessionQuery,
                variables: {id: examId}
            }
        )
        result.data.getExam.data = JSON.parse(result.data.getExam.data)
        result.data.getExam.Test.data = JSON.parse(result.data.getExam.Test.data)

        result.data.getExam.Test.Questions.items.map(async (item) => {
            item.question.data = JSON.parse(item.question.data)
            if (!!item.question.data && !!item.question.data.image) {
                item.question.data.imageUrl = await Storage.get(item.question.data.image)
            }
        })


        return result
    } catch (ex) {
        console.log(ex)
        let { data } = ex
        let result = { data }
        result.data.getExam.data = JSON.parse(result.data.getExam.data)
        result.data.getExam.Test.data = JSON.parse(result.data.getExam.Test.data)
        result.data.getExam.Test.Questions.items = result.data.getExam.Test.Questions.items.filter(x => x)
        return result
    }
}

const getEmailBody = (link) => (
    `
    <div>
        <div>Hi,<div>
        <div>You are invited to take an exam via FCJ Exam Platform.</div>
        <div>Please use the following URL to start your exam: <a href='${link}'>Exam URL</a></div>
    </div>
    `
)

export const sendExamEmail = async({emails, link}) => {
    try {
        let input = {
            examLink: link,
            toAddress: emails,
            fromAddress: "ngothuha+ses@amazon.com",
            subject: "Exam notification",
            body: getEmailBody(link)
        }
        let result = await API.graphql(graphqlOperation(createExamEmail, {input}))
        // Link result.createExam.id with exam.Test
        console.log(result)
        return result
    } catch (e) {
        console.log(e)
    }
}