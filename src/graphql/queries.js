/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getResponse = /* GraphQL */ `
  query GetResponse($id: ID!) {
    getResponse(id: $id) {
      id
      data
      Session {
        id
        data
        Exam {
          id
          date
          org
          data
          createdAt
          updatedAt
          examTestId
        }
        createdAt
        updatedAt
        sessionExamId
      }
      Question {
        id
        prompt
        choices {
          key
          value
        }
        key
        tests {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      responseSessionId
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
        Session {
          id
          data
          createdAt
          updatedAt
          sessionExamId
        }
        Question {
          id
          prompt
          key
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        responseSessionId
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
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        examTestId
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
          createdAt
          updatedAt
          examTestId
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
        choices {
          key
          value
        }
        key
        tests {
          nextToken
        }
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
          nextToken
        }
        createdAt
        updatedAt
      }
      question {
        id
        prompt
        choices {
          key
          value
        }
        key
        tests {
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
          createdAt
          updatedAt
        }
        question {
          id
          prompt
          key
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
          createdAt
          updatedAt
        }
        question {
          id
          prompt
          key
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
          createdAt
          updatedAt
        }
        question {
          id
          prompt
          key
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
