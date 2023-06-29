import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem, AsyncCollection } from "@aws-amplify/datastore";



type EagerChoice = {
  readonly key?: number | null;
  readonly value?: string | null;
}

type LazyChoice = {
  readonly key?: number | null;
  readonly value?: string | null;
}

export declare type Choice = LazyLoading extends LazyLoadingDisabled ? EagerChoice : LazyChoice

export declare const Choice: (new (init: ModelInit<Choice>) => Choice)

type EagerResponse = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Response, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly data?: string | null;
  readonly Session?: Session | null;
  readonly Question?: Question | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly responseSessionId?: string | null;
  readonly responseQuestionId?: string | null;
}

type LazyResponse = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Response, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly data?: string | null;
  readonly Session: AsyncItem<Session | undefined>;
  readonly Question: AsyncItem<Question | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly responseSessionId?: string | null;
  readonly responseQuestionId?: string | null;
}

export declare type Response = LazyLoading extends LazyLoadingDisabled ? EagerResponse : LazyResponse

export declare const Response: (new (init: ModelInit<Response>) => Response) & {
  copyOf(source: Response, mutator: (draft: MutableModel<Response>) => MutableModel<Response> | void): Response;
}

type EagerSession = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Session, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly data?: string | null;
  readonly Exam?: Exam | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly sessionExamId?: string | null;
}

type LazySession = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Session, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly data?: string | null;
  readonly Exam: AsyncItem<Exam | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly sessionExamId?: string | null;
}

export declare type Session = LazyLoading extends LazyLoadingDisabled ? EagerSession : LazySession

export declare const Session: (new (init: ModelInit<Session>) => Session) & {
  copyOf(source: Session, mutator: (draft: MutableModel<Session>) => MutableModel<Session> | void): Session;
}

type EagerExam = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Exam, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly date?: string | null;
  readonly org?: string | null;
  readonly data?: string | null;
  readonly Test?: Test | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly examTestId?: string | null;
}

type LazyExam = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Exam, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly date?: string | null;
  readonly org?: string | null;
  readonly data?: string | null;
  readonly Test: AsyncItem<Test | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly examTestId?: string | null;
}

export declare type Exam = LazyLoading extends LazyLoadingDisabled ? EagerExam : LazyExam

export declare const Exam: (new (init: ModelInit<Exam>) => Exam) & {
  copyOf(source: Exam, mutator: (draft: MutableModel<Exam>) => MutableModel<Exam> | void): Exam;
}

type EagerTest = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Test, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly data?: string | null;
  readonly Questions?: (TestQuestion | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTest = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Test, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly data?: string | null;
  readonly Questions: AsyncCollection<TestQuestion>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Test = LazyLoading extends LazyLoadingDisabled ? EagerTest : LazyTest

export declare const Test: (new (init: ModelInit<Test>) => Test) & {
  copyOf(source: Test, mutator: (draft: MutableModel<Test>) => MutableModel<Test> | void): Test;
}

type EagerQuestion = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Question, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly prompt: string;
  readonly choices?: (Choice | null)[] | null;
  readonly key?: number | null;
  readonly tests?: (TestQuestion | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyQuestion = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Question, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly prompt: string;
  readonly choices?: (Choice | null)[] | null;
  readonly key?: number | null;
  readonly tests: AsyncCollection<TestQuestion>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Question = LazyLoading extends LazyLoadingDisabled ? EagerQuestion : LazyQuestion

export declare const Question: (new (init: ModelInit<Question>) => Question) & {
  copyOf(source: Question, mutator: (draft: MutableModel<Question>) => MutableModel<Question> | void): Question;
}

type EagerTestQuestion = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TestQuestion, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly testId?: string | null;
  readonly questionId?: string | null;
  readonly test: Test;
  readonly question: Question;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTestQuestion = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TestQuestion, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly testId?: string | null;
  readonly questionId?: string | null;
  readonly test: AsyncItem<Test>;
  readonly question: AsyncItem<Question>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type TestQuestion = LazyLoading extends LazyLoadingDisabled ? EagerTestQuestion : LazyTestQuestion

export declare const TestQuestion: (new (init: ModelInit<TestQuestion>) => TestQuestion) & {
  copyOf(source: TestQuestion, mutator: (draft: MutableModel<TestQuestion>) => MutableModel<TestQuestion> | void): TestQuestion;
}