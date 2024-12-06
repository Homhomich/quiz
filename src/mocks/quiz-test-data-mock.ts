import { Question } from '@/types/Question';

export const quizTestMockQuestions: Question[] = [
  {
    id: 1,
    questionText: 'What is the capital of France?',
    answerOptions: [
      { id: 1, text: 'Paris' },
      { id: 2, text: 'Rome' },
      { id: 3, text: 'Berlin' },
      { id: 4, text: 'Madrid' },
    ],
    correctAnswerId: 1,
  },
  {
    id: 2,
    questionText: 'Which planet is known as the Red Planet?',
    answerOptions: [
      { id: 1, text: 'Earth' },
      { id: 2, text: 'Mars' },
      { id: 3, text: 'Jupiter' },
      { id: 4, text: 'Venus' },
    ],
    correctAnswerId: 2,
  },
];

export const userAllRightAnswers = { 1: 1, 2: 2 };

export const userAllWrongAnswers = { 1: 4, 2: 4 };

export const userOneRightAnswer = { 1: 1, 2: 4 };
