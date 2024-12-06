import { Question } from '@/types/Question';

export const calculateScore = (
  questions: Question[],
  userAnswers: { [key: number]: number },
): number => {
  const correctAnswers = questions.filter(
    (q) => q.correctAnswerId === userAnswers[q.id],
  ).length;

  return (correctAnswers / questions.length) * 100;
};
