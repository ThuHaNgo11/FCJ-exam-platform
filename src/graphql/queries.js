/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getResponse = /* GraphQL */ `
  query GetResponse($id: ID!) {
    getResponse(id: $id) {
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
export const listResponses = /* GraphQL */ `
  query ListResponses(
    $filter: ModelResponseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listResponses(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
            items {
              id
              testId
              questionId
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
      nextToken
    }
  }
`;
export const responsesBySessionIDAndData = /* GraphQL */ `
  query ResponsesBySessionIDAndData(
    $sessionID: ID!
    $data: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelResponseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    responsesBySessionIDAndData(
      sessionID: $sessionID
      data: $data
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
            items {
              id
              testId
              questionId
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
      nextToken
    }
  }
`;
export const getSession = /* GraphQL */ `
  query GetSession($id: ID!) {
    getSession(id: $id) {
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
              question {
                id
                prompt
                data
                choices {
                  key
                  value
                }
                key
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
export const listSessions = /* GraphQL */ `
  query ListSessions(
    $filter: ModelSessionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSessions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
              key
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
      nextToken
    }
  }
`;
export const getExam = /* GraphQL */ `
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
export const listExams = /* GraphQL */ `
  query ListExams(
    $filter: ModelExamFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listExams(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getTest = /* GraphQL */ `
  query GetTest($id: ID!) {
    getTest(id: $id) {
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
export const listTests = /* GraphQL */ `
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
      nextToken
    }
  }
`;
export const searchTests = /* GraphQL */ `
  query SearchTests(
    $filter: SearchableTestFilterInput
    $sort: [SearchableTestSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableTestAggregationInput]
  ) {
    searchTests(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
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
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
            }
          }
        }
      }
    }
  }
`;
export const getQuestionCategory = /* GraphQL */ `
  query GetQuestionCategory($id: ID!) {
    getQuestionCategory(id: $id) {
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
export const listQuestionCategories = /* GraphQL */ `
  query ListQuestionCategories(
    $filter: ModelQuestionCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQuestionCategories(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getQuestion = /* GraphQL */ `
  query GetQuestion($id: ID!) {
    getQuestion(id: $id) {
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
export const listQuestions = /* GraphQL */ `
  query ListQuestions(
    $filter: ModelQuestionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQuestions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const searchQuestions = /* GraphQL */ `
  query SearchQuestions(
    $filter: SearchableQuestionFilterInput
    $sort: [SearchableQuestionSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableQuestionAggregationInput]
  ) {
    searchQuestions(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
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
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
            }
          }
        }
      }
    }
  }
`;
export const getExamEmail = /* GraphQL */ `
  query GetExamEmail($id: ID!) {
    getExamEmail(id: $id) {
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
export const listExamEmails = /* GraphQL */ `
  query ListExamEmails(
    $filter: ModelExamEmailFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listExamEmails(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        examLink
        toAddress
        fromAddress
        subject
        body
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTestQuestion = /* GraphQL */ `
  query GetTestQuestion($id: ID!) {
    getTestQuestion(id: $id) {
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
export const listTestQuestions = /* GraphQL */ `
  query ListTestQuestions(
    $filter: ModelTestQuestionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTestQuestions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const testQuestionsByTestId = /* GraphQL */ `
  query TestQuestionsByTestId(
    $testId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelTestQuestionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    testQuestionsByTestId(
      testId: $testId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const testQuestionsByQuestionId = /* GraphQL */ `
  query TestQuestionsByQuestionId(
    $questionId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelTestQuestionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    testQuestionsByQuestionId(
      questionId: $questionId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getQuestionsCategories = /* GraphQL */ `
  query GetQuestionsCategories($id: ID!) {
    getQuestionsCategories(id: $id) {
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
export const listQuestionsCategories = /* GraphQL */ `
  query ListQuestionsCategories(
    $filter: ModelQuestionsCategoriesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQuestionsCategories(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const questionsCategoriesByQuestionCategoryId = /* GraphQL */ `
  query QuestionsCategoriesByQuestionCategoryId(
    $questionCategoryId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelQuestionsCategoriesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    questionsCategoriesByQuestionCategoryId(
      questionCategoryId: $questionCategoryId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const questionsCategoriesByQuestionId = /* GraphQL */ `
  query QuestionsCategoriesByQuestionId(
    $questionId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelQuestionsCategoriesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    questionsCategoriesByQuestionId(
      questionId: $questionId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
