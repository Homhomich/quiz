import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { QuizPage } from './QuizPage';
import { quizTestMockQuestions } from '@/mocks/quiz-test-data-mock';

const FIRST_QUESTION_TITLE = 'Question 1 / 2';
const SECOND_QUESTION_TITLE = 'Question 2 / 2';

describe('QuizPage', () => {
  it('renders the first question by default', () => {
    render(<QuizPage questions={quizTestMockQuestions} />);
    expect(screen.getByTestId('quiz-page-container')).toBeInTheDocument();
    expect(screen.getByTestId('quiz-page-question-number')).toHaveTextContent(
      FIRST_QUESTION_TITLE,
    );
  });

  it('disables the "Previous" button on the first question', () => {
    render(<QuizPage questions={quizTestMockQuestions} />);
    expect(screen.getByTestId('quiz-page-previous-button')).toBeDisabled();
  });

  it('disables the "Next" button until an answer is selected', () => {
    render(<QuizPage questions={quizTestMockQuestions} />);
    expect(screen.getByTestId('quiz-page-next-button')).toBeDisabled();
  });

  it('activate the "Next" button when an answer is selected', () => {
    render(<QuizPage questions={quizTestMockQuestions} />);
    const answerOption = screen.getByTestId('quiz-question-option-1');
    fireEvent.click(answerOption);

    expect(screen.getByTestId('quiz-page-next-button')).not.toBeDisabled();
  });

  it('navigates to the next question when "Next" is clicked', () => {
    render(<QuizPage questions={quizTestMockQuestions} />);
    const answerOption = screen.getByTestId('quiz-question-option-1');
    fireEvent.click(answerOption);
    fireEvent.click(screen.getByTestId('quiz-page-next-button'));

    expect(screen.getByTestId('quiz-page-question-number')).toHaveTextContent(
      SECOND_QUESTION_TITLE,
    );
  });

  it('navigates back to the previous question when "Previous" is clicked', () => {
    render(<QuizPage questions={quizTestMockQuestions} />);
    const answerOption = screen.getByTestId('quiz-question-option-1');
    fireEvent.click(answerOption);
    fireEvent.click(screen.getByTestId('quiz-page-next-button'));
    fireEvent.click(screen.getByTestId('quiz-page-previous-button'));

    expect(screen.getByTestId('quiz-page-question-number')).toHaveTextContent(
      FIRST_QUESTION_TITLE,
    );
  });

  it('shows "Submit" button on the last question', () => {
    render(<QuizPage questions={quizTestMockQuestions} />);

    // answer all questions to get to the end of the quiz
    for (let i = 0; i < quizTestMockQuestions.length - 1; i++) {
      const answerOption = screen.getByTestId('quiz-question-option-1');
      fireEvent.click(answerOption);
      fireEvent.click(screen.getByTestId('quiz-page-next-button'));
    }

    expect(screen.getByTestId('quiz-page-submit-button')).toBeInTheDocument();
  });
});
