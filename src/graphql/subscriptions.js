/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateResponse = /* GraphQL */ `
  subscription OnCreateResponse($filter: ModelSubscriptionResponseFilterInput) {
    onCreateResponse(filter: $filter) {
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
export const onUpdateResponse = /* GraphQL */ `
  subscription OnUpdateResponse($filter: ModelSubscriptionResponseFilterInput) {
    onUpdateResponse(filter: $filter) {
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
export const onDeleteResponse = /* GraphQL */ `
  subscription OnDeleteResponse($filter: ModelSubscriptionResponseFilterInput) {
    onDeleteResponse(filter: $filter) {
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
export const onCreateSession = /* GraphQL */ `
  subscription OnCreateSession($filter: ModelSubscriptionSessionFilterInput) {
    onCreateSession(filter: $filter) {
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
export const onUpdateSession = /* GraphQL */ `
  subscription OnUpdateSession($filter: ModelSubscriptionSessionFilterInput) {
    onUpdateSession(filter: $filter) {
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
export const onDeleteSession = /* GraphQL */ `
  subscription OnDeleteSession($filter: ModelSubscriptionSessionFilterInput) {
    onDeleteSession(filter: $filter) {
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
export const onCreateExam = /* GraphQL */ `
  subscription OnCreateExam($filter: ModelSubscriptionExamFilterInput) {
    onCreateExam(filter: $filter) {
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
export const onUpdateExam = /* GraphQL */ `
  subscription OnUpdateExam($filter: ModelSubscriptionExamFilterInput) {
    onUpdateExam(filter: $filter) {
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
export const onDeleteExam = /* GraphQL */ `
  subscription OnDeleteExam($filter: ModelSubscriptionExamFilterInput) {
    onDeleteExam(filter: $filter) {
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
export const onCreateTest = /* GraphQL */ `
  subscription OnCreateTest($filter: ModelSubscriptionTestFilterInput) {
    onCreateTest(filter: $filter) {
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
export const onUpdateTest = /* GraphQL */ `
  subscription OnUpdateTest($filter: ModelSubscriptionTestFilterInput) {
    onUpdateTest(filter: $filter) {
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
export const onDeleteTest = /* GraphQL */ `
  subscription OnDeleteTest($filter: ModelSubscriptionTestFilterInput) {
    onDeleteTest(filter: $filter) {
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
export const onCreateQuestion = /* GraphQL */ `
  subscription OnCreateQuestion($filter: ModelSubscriptionQuestionFilterInput) {
    onCreateQuestion(filter: $filter) {
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
export const onUpdateQuestion = /* GraphQL */ `
  subscription OnUpdateQuestion($filter: ModelSubscriptionQuestionFilterInput) {
    onUpdateQuestion(filter: $filter) {
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
export const onDeleteQuestion = /* GraphQL */ `
  subscription OnDeleteQuestion($filter: ModelSubscriptionQuestionFilterInput) {
    onDeleteQuestion(filter: $filter) {
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
export const onCreateTestQuestion = /* GraphQL */ `
  subscription OnCreateTestQuestion(
    $filter: ModelSubscriptionTestQuestionFilterInput
  ) {
    onCreateTestQuestion(filter: $filter) {
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
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTestQuestion = /* GraphQL */ `
  subscription OnUpdateTestQuestion(
    $filter: ModelSubscriptionTestQuestionFilterInput
  ) {
    onUpdateTestQuestion(filter: $filter) {
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
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTestQuestion = /* GraphQL */ `
  subscription OnDeleteTestQuestion(
    $filter: ModelSubscriptionTestQuestionFilterInput
  ) {
    onDeleteTestQuestion(filter: $filter) {
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
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
