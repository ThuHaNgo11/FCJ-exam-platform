/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createResponse = /* GraphQL */ `
  mutation CreateResponse(
    $input: CreateResponseInput!
    $condition: ModelResponseConditionInput
  ) {
    createResponse(input: $input, condition: $condition) {
      id
      data
      Question {
        id
        prompt
        data
        choices {
          key
          value
        }
        key
        tests {
          items {
            id
            testId
            questionId
            test {
              id
              data
              createdAt
              updatedAt
            }
            question {
              id
              prompt
              data
              key
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        categories {
          items {
            id
            questionCategoryId
            questionId
            questionCategory {
              id
              name
              createdAt
              updatedAt
            }
            question {
              id
              prompt
              data
              key
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      sessionID
      createdAt
      updatedAt
      responseQuestionId
    }
  }
`;
export const updateResponse = /* GraphQL */ `
  mutation UpdateResponse(
    $input: UpdateResponseInput!
    $condition: ModelResponseConditionInput
  ) {
    updateResponse(input: $input, condition: $condition) {
      id
      data
      Question {
        id
        prompt
        data
        choices {
          key
          value
        }
        key
        tests {
          items {
            id
            testId
            questionId
            test {
              id
              data
              createdAt
              updatedAt
            }
            question {
              id
              prompt
              data
              key
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        categories {
          items {
            id
            questionCategoryId
            questionId
            questionCategory {
              id
              name
              createdAt
              updatedAt
            }
            question {
              id
              prompt
              data
              key
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      sessionID
      createdAt
      updatedAt
      responseQuestionId
    }
  }
`;
export const deleteResponse = /* GraphQL */ `
  mutation DeleteResponse(
    $input: DeleteResponseInput!
    $condition: ModelResponseConditionInput
  ) {
    deleteResponse(input: $input, condition: $condition) {
      id
      data
      Question {
        id
        prompt
        data
        choices {
          key
          value
        }
        key
        tests {
          items {
            id
            testId
            questionId
            test {
              id
              data
              createdAt
              updatedAt
            }
            question {
              id
              prompt
              data
              key
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        categories {
          items {
            id
            questionCategoryId
            questionId
            questionCategory {
              id
              name
              createdAt
              updatedAt
            }
            question {
              id
              prompt
              data
              key
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      sessionID
      createdAt
      updatedAt
      responseQuestionId
    }
  }
`;
export const createSession = /* GraphQL */ `
  mutation CreateSession(
    $input: CreateSessionInput!
    $condition: ModelSessionConditionInput
  ) {
    createSession(input: $input, condition: $condition) {
      id
      data
      Exam {
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
              createdAt
              updatedAt
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
      Responses {
        items {
          id
          data
          Question {
            id
            prompt
            data
            choices {
              key
              value
            }
            key
            tests {
              nextToken
            }
            categories {
              nextToken
            }
            createdAt
            updatedAt
          }
          sessionID
          createdAt
          updatedAt
          responseQuestionId
        }
        nextToken
      }
      createdAt
      updatedAt
      sessionExamId
    }
  }
`;
export const updateSession = /* GraphQL */ `
  mutation UpdateSession(
    $input: UpdateSessionInput!
    $condition: ModelSessionConditionInput
  ) {
    updateSession(input: $input, condition: $condition) {
      id
      data
      Exam {
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
              createdAt
              updatedAt
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
      Responses {
        items {
          id
          data
          Question {
            id
            prompt
            data
            choices {
              key
              value
            }
            key
            tests {
              nextToken
            }
            categories {
              nextToken
            }
            createdAt
            updatedAt
          }
          sessionID
          createdAt
          updatedAt
          responseQuestionId
        }
        nextToken
      }
      createdAt
      updatedAt
      sessionExamId
    }
  }
`;
export const deleteSession = /* GraphQL */ `
  mutation DeleteSession(
    $input: DeleteSessionInput!
    $condition: ModelSessionConditionInput
  ) {
    deleteSession(input: $input, condition: $condition) {
      id
      data
      Exam {
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
              createdAt
              updatedAt
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
      Responses {
        items {
          id
          data
          Question {
            id
            prompt
            data
            choices {
              key
              value
            }
            key
            tests {
              nextToken
            }
            categories {
              nextToken
            }
            createdAt
            updatedAt
          }
          sessionID
          createdAt
          updatedAt
          responseQuestionId
        }
        nextToken
      }
      createdAt
      updatedAt
      sessionExamId
    }
  }
`;
export const createExam = /* GraphQL */ `
  mutation CreateExam(
    $input: CreateExamInput!
    $condition: ModelExamConditionInput
  ) {
    createExam(input: $input, condition: $condition) {
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
            test {
              id
              data
              createdAt
              updatedAt
            }
            question {
              id
              prompt
              data
              key
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
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
`;
export const updateExam = /* GraphQL */ `
  mutation UpdateExam(
    $input: UpdateExamInput!
    $condition: ModelExamConditionInput
  ) {
    updateExam(input: $input, condition: $condition) {
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
            test {
              id
              data
              createdAt
              updatedAt
            }
            question {
              id
              prompt
              data
              key
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
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
`;
export const deleteExam = /* GraphQL */ `
  mutation DeleteExam(
    $input: DeleteExamInput!
    $condition: ModelExamConditionInput
  ) {
    deleteExam(input: $input, condition: $condition) {
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
            test {
              id
              data
              createdAt
              updatedAt
            }
            question {
              id
              prompt
              data
              key
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
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
`;
export const createTest = /* GraphQL */ `
  mutation CreateTest(
    $input: CreateTestInput!
    $condition: ModelTestConditionInput
  ) {
    createTest(input: $input, condition: $condition) {
      id
      data
      Questions {
        items {
          id
          testId
          questionId
          test {
            id
            data
            Questions {
              nextToken
            }
            createdAt
            updatedAt
          }
          question {
            id
            prompt
            data
            choices {
              key
              value
            }
            key
            tests {
              nextToken
            }
            categories {
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateTest = /* GraphQL */ `
  mutation UpdateTest(
    $input: UpdateTestInput!
    $condition: ModelTestConditionInput
  ) {
    updateTest(input: $input, condition: $condition) {
      id
      data
      Questions {
        items {
          id
          testId
          questionId
          test {
            id
            data
            Questions {
              nextToken
            }
            createdAt
            updatedAt
          }
          question {
            id
            prompt
            data
            choices {
              key
              value
            }
            key
            tests {
              nextToken
            }
            categories {
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteTest = /* GraphQL */ `
  mutation DeleteTest(
    $input: DeleteTestInput!
    $condition: ModelTestConditionInput
  ) {
    deleteTest(input: $input, condition: $condition) {
      id
      data
      Questions {
        items {
          id
          testId
          questionId
          test {
            id
            data
            Questions {
              nextToken
            }
            createdAt
            updatedAt
          }
          question {
            id
            prompt
            data
            choices {
              key
              value
            }
            key
            tests {
              nextToken
            }
            categories {
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createQuestionCategory = /* GraphQL */ `
  mutation CreateQuestionCategory(
    $input: CreateQuestionCategoryInput!
    $condition: ModelQuestionCategoryConditionInput
  ) {
    createQuestionCategory(input: $input, condition: $condition) {
      id
      name
      Questions {
        items {
          id
          questionCategoryId
          questionId
          questionCategory {
            id
            name
            Questions {
              nextToken
            }
            createdAt
            updatedAt
          }
          question {
            id
            prompt
            data
            choices {
              key
              value
            }
            key
            tests {
              nextToken
            }
            categories {
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateQuestionCategory = /* GraphQL */ `
  mutation UpdateQuestionCategory(
    $input: UpdateQuestionCategoryInput!
    $condition: ModelQuestionCategoryConditionInput
  ) {
    updateQuestionCategory(input: $input, condition: $condition) {
      id
      name
      Questions {
        items {
          id
          questionCategoryId
          questionId
          questionCategory {
            id
            name
            Questions {
              nextToken
            }
            createdAt
            updatedAt
          }
          question {
            id
            prompt
            data
            choices {
              key
              value
            }
            key
            tests {
              nextToken
            }
            categories {
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteQuestionCategory = /* GraphQL */ `
  mutation DeleteQuestionCategory(
    $input: DeleteQuestionCategoryInput!
    $condition: ModelQuestionCategoryConditionInput
  ) {
    deleteQuestionCategory(input: $input, condition: $condition) {
      id
      name
      Questions {
        items {
          id
          questionCategoryId
          questionId
          questionCategory {
            id
            name
            Questions {
              nextToken
            }
            createdAt
            updatedAt
          }
          question {
            id
            prompt
            data
            choices {
              key
              value
            }
            key
            tests {
              nextToken
            }
            categories {
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createQuestion = /* GraphQL */ `
  mutation CreateQuestion(
    $input: CreateQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    createQuestion(input: $input, condition: $condition) {
      id
      prompt
      data
      choices {
        key
        value
      }
      key
      tests {
        items {
          id
          testId
          questionId
          test {
            id
            data
            Questions {
              nextToken
            }
            createdAt
            updatedAt
          }
          question {
            id
            prompt
            data
            choices {
              key
              value
            }
            key
            tests {
              nextToken
            }
            categories {
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      categories {
        items {
          id
          questionCategoryId
          questionId
          questionCategory {
            id
            name
            Questions {
              nextToken
            }
            createdAt
            updatedAt
          }
          question {
            id
            prompt
            data
            choices {
              key
              value
            }
            key
            tests {
              nextToken
            }
            categories {
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateQuestion = /* GraphQL */ `
  mutation UpdateQuestion(
    $input: UpdateQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    updateQuestion(input: $input, condition: $condition) {
      id
      prompt
      data
      choices {
        key
        value
      }
      key
      tests {
        items {
          id
          testId
          questionId
          test {
            id
            data
            Questions {
              nextToken
            }
            createdAt
            updatedAt
          }
          question {
            id
            prompt
            data
            choices {
              key
              value
            }
            key
            tests {
              nextToken
            }
            categories {
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      categories {
        items {
          id
          questionCategoryId
          questionId
          questionCategory {
            id
            name
            Questions {
              nextToken
            }
            createdAt
            updatedAt
          }
          question {
            id
            prompt
            data
            choices {
              key
              value
            }
            key
            tests {
              nextToken
            }
            categories {
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteQuestion = /* GraphQL */ `
  mutation DeleteQuestion(
    $input: DeleteQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    deleteQuestion(input: $input, condition: $condition) {
      id
      prompt
      data
      choices {
        key
        value
      }
      key
      tests {
        items {
          id
          testId
          questionId
          test {
            id
            data
            Questions {
              nextToken
            }
            createdAt
            updatedAt
          }
          question {
            id
            prompt
            data
            choices {
              key
              value
            }
            key
            tests {
              nextToken
            }
            categories {
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      categories {
        items {
          id
          questionCategoryId
          questionId
          questionCategory {
            id
            name
            Questions {
              nextToken
            }
            createdAt
            updatedAt
          }
          question {
            id
            prompt
            data
            choices {
              key
              value
            }
            key
            tests {
              nextToken
            }
            categories {
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createExamEmail = /* GraphQL */ `
  mutation CreateExamEmail(
    $input: CreateExamEmailInput!
    $condition: ModelExamEmailConditionInput
  ) {
    createExamEmail(input: $input, condition: $condition) {
      id
      examLink
      toAddress
      fromAddress
      subject
      body
      createdAt
      updatedAt
    }
  }
`;
export const updateExamEmail = /* GraphQL */ `
  mutation UpdateExamEmail(
    $input: UpdateExamEmailInput!
    $condition: ModelExamEmailConditionInput
  ) {
    updateExamEmail(input: $input, condition: $condition) {
      id
      examLink
      toAddress
      fromAddress
      subject
      body
      createdAt
      updatedAt
    }
  }
`;
export const deleteExamEmail = /* GraphQL */ `
  mutation DeleteExamEmail(
    $input: DeleteExamEmailInput!
    $condition: ModelExamEmailConditionInput
  ) {
    deleteExamEmail(input: $input, condition: $condition) {
      id
      examLink
      toAddress
      fromAddress
      subject
      body
      createdAt
      updatedAt
    }
  }
`;
export const createTestQuestion = /* GraphQL */ `
  mutation CreateTestQuestion(
    $input: CreateTestQuestionInput!
    $condition: ModelTestQuestionConditionInput
  ) {
    createTestQuestion(input: $input, condition: $condition) {
      id
      testId
      questionId
      test {
        id
        data
        Questions {
          items {
            id
            testId
            questionId
            test {
              id
              data
              createdAt
              updatedAt
            }
            question {
              id
              prompt
              data
              key
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      question {
        id
        prompt
        data
        choices {
          key
          value
        }
        key
        tests {
          items {
            id
            testId
            questionId
            test {
              id
              data
              createdAt
              updatedAt
            }
            question {
              id
              prompt
              data
              key
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        categories {
          items {
            id
            questionCategoryId
            questionId
            questionCategory {
              id
              name
              createdAt
              updatedAt
            }
            question {
              id
              prompt
              data
              key
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateTestQuestion = /* GraphQL */ `
  mutation UpdateTestQuestion(
    $input: UpdateTestQuestionInput!
    $condition: ModelTestQuestionConditionInput
  ) {
    updateTestQuestion(input: $input, condition: $condition) {
      id
      testId
      questionId
      test {
        id
        data
        Questions {
          items {
            id
            testId
            questionId
            test {
              id
              data
              createdAt
              updatedAt
            }
            question {
              id
              prompt
              data
              key
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      question {
        id
        prompt
        data
        choices {
          key
          value
        }
        key
        tests {
          items {
            id
            testId
            questionId
            test {
              id
              data
              createdAt
              updatedAt
            }
            question {
              id
              prompt
              data
              key
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        categories {
          items {
            id
            questionCategoryId
            questionId
            questionCategory {
              id
              name
              createdAt
              updatedAt
            }
            question {
              id
              prompt
              data
              key
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteTestQuestion = /* GraphQL */ `
  mutation DeleteTestQuestion(
    $input: DeleteTestQuestionInput!
    $condition: ModelTestQuestionConditionInput
  ) {
    deleteTestQuestion(input: $input, condition: $condition) {
      id
      testId
      questionId
      test {
        id
        data
        Questions {
          items {
            id
            testId
            questionId
            test {
              id
              data
              createdAt
              updatedAt
            }
            question {
              id
              prompt
              data
              key
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      question {
        id
        prompt
        data
        choices {
          key
          value
        }
        key
        tests {
          items {
            id
            testId
            questionId
            test {
              id
              data
              createdAt
              updatedAt
            }
            question {
              id
              prompt
              data
              key
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        categories {
          items {
            id
            questionCategoryId
            questionId
            questionCategory {
              id
              name
              createdAt
              updatedAt
            }
            question {
              id
              prompt
              data
              key
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createQuestionsCategories = /* GraphQL */ `
  mutation CreateQuestionsCategories(
    $input: CreateQuestionsCategoriesInput!
    $condition: ModelQuestionsCategoriesConditionInput
  ) {
    createQuestionsCategories(input: $input, condition: $condition) {
      id
      questionCategoryId
      questionId
      questionCategory {
        id
        name
        Questions {
          items {
            id
            questionCategoryId
            questionId
            questionCategory {
              id
              name
              createdAt
              updatedAt
            }
            question {
              id
              prompt
              data
              key
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      question {
        id
        prompt
        data
        choices {
          key
          value
        }
        key
        tests {
          items {
            id
            testId
            questionId
            test {
              id
              data
              createdAt
              updatedAt
            }
            question {
              id
              prompt
              data
              key
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        categories {
          items {
            id
            questionCategoryId
            questionId
            questionCategory {
              id
              name
              createdAt
              updatedAt
            }
            question {
              id
              prompt
              data
              key
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateQuestionsCategories = /* GraphQL */ `
  mutation UpdateQuestionsCategories(
    $input: UpdateQuestionsCategoriesInput!
    $condition: ModelQuestionsCategoriesConditionInput
  ) {
    updateQuestionsCategories(input: $input, condition: $condition) {
      id
      questionCategoryId
      questionId
      questionCategory {
        id
        name
        Questions {
          items {
            id
            questionCategoryId
            questionId
            questionCategory {
              id
              name
              createdAt
              updatedAt
            }
            question {
              id
              prompt
              data
              key
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      question {
        id
        prompt
        data
        choices {
          key
          value
        }
        key
        tests {
          items {
            id
            testId
            questionId
            test {
              id
              data
              createdAt
              updatedAt
            }
            question {
              id
              prompt
              data
              key
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        categories {
          items {
            id
            questionCategoryId
            questionId
            questionCategory {
              id
              name
              createdAt
              updatedAt
            }
            question {
              id
              prompt
              data
              key
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteQuestionsCategories = /* GraphQL */ `
  mutation DeleteQuestionsCategories(
    $input: DeleteQuestionsCategoriesInput!
    $condition: ModelQuestionsCategoriesConditionInput
  ) {
    deleteQuestionsCategories(input: $input, condition: $condition) {
      id
      questionCategoryId
      questionId
      questionCategory {
        id
        name
        Questions {
          items {
            id
            questionCategoryId
            questionId
            questionCategory {
              id
              name
              createdAt
              updatedAt
            }
            question {
              id
              prompt
              data
              key
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      question {
        id
        prompt
        data
        choices {
          key
          value
        }
        key
        tests {
          items {
            id
            testId
            questionId
            test {
              id
              data
              createdAt
              updatedAt
            }
            question {
              id
              prompt
              data
              key
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        categories {
          items {
            id
            questionCategoryId
            questionId
            questionCategory {
              id
              name
              createdAt
              updatedAt
            }
            question {
              id
              prompt
              data
              key
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
