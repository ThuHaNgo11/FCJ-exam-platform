// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Response, Session, Exam, Test, Question, TestQuestion, Choice } = initSchema(schema);

export {
  Response,
  Session,
  Exam,
  Test,
  Question,
  TestQuestion,
  Choice
};