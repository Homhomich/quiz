import React from 'react';
import { render, screen } from '@testing-library/react';

import {
  quizTestMockQuestions,
  userAllRightAnswers,
} from '@/mocks/quiz-test-data-mock';
import { ScorePage } from '@/components/Scores/Scores';

const GOOD_RESULT_TEXT = '100 / 100';

describe('ScorePage', () => {
  it('renders the correct score', () => {
    render(
      <ScorePage
        questions={quizTestMockQuestions}
        submittedAnswers={userAllRightAnswers}
      />,
    );
    expect(screen.getByTestId('quiz-score-amount')).toHaveTextContent(
      GOOD_RESULT_TEXT,
    );
  });
});
