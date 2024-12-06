import { calculateScore } from '@/utils/calculateScore';
import {
  quizTestMockQuestions,
  userAllRightAnswers,
  userAllWrongAnswers,
  userOneRightAnswer,
} from '@/mocks/quiz-test-data-mock';

describe('calculateScore', () => {
  it('returns the correct score for all correct answers', () => {
    expect(calculateScore(quizTestMockQuestions, userAllRightAnswers)).toBe(
      100,
    );
  });

  it(' returns 0 for all incorrect answers', () => {
    expect(calculateScore(quizTestMockQuestions, userAllWrongAnswers)).toBe(0);
  });

  it('returns the correct score for some correct answers ', () => {
    expect(calculateScore(quizTestMockQuestions, userOneRightAnswer)).toBe(50);
  });
});
