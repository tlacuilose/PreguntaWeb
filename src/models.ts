export interface QuestionType {
  date: string;
  question: string;
  description: string;
  answers?: AnswerType[];
}

export interface AnswerType {
  date: string;
  answer: string;
}
