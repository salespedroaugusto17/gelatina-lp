export interface QuizAnswers {
  age?: string;
  body?: string;
  areas: string[];
  name?: string;
  emotional?: string;
  blocker?: string;
  goal?: string;
  weight?: number;
  height?: number;
  targetWeight?: number;
  routine?: string;
  sleep?: string;
  water?: string;
}

export const initialAnswers: QuizAnswers = { areas: [] };
