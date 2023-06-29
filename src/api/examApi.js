import {API, graphqlOperation} from "@aws-amplify/api";
import {listExams} from "../graphql/queries";
import {createExam, updateExam, deleteExam} from "../graphql/mutations";


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


        return result
    } catch (ex) {
        console.log(ex)
    }
}