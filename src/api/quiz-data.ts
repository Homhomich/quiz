import { Question } from '@/types/Question';

export const quizQuestions: Question[] = [
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
  {
    id: 3,
    questionText: 'What is 5 + 3?',
    answerOptions: [
      { id: 1, text: '5' },
      { id: 2, text: '8' },
      { id: 3, text: '10' },
      { id: 4, text: '15' },
    ],
    correctAnswerId: 2,
  },
  {
    id: 4,
    questionText: 'Which ocean is the largest?',
    answerOptions: [
      { id: 1, text: 'Atlantic Ocean' },
      { id: 2, text: 'Indian Ocean' },
      { id: 3, text: 'Arctic Ocean' },
      { id: 4, text: 'Pacific Ocean' },
    ],
    correctAnswerId: 4,
  },
  {
    id: 5,
    questionText: 'What is the primary ingredient in guacamole?',
    answerOptions: [
      { id: 1, text: 'Tomato' },
      { id: 2, text: 'Avocado' },
      { id: 3, text: 'Lettuce' },
      { id: 4, text: 'Cucumber' },
    ],
    correctAnswerId: 2,
  },
];
