import { Answer } from '@/types/Answer';

export interface Question {
  id: number;
  questionText: string;
  answerOptions: Answer[];
  correctAnswerId: number;
}
