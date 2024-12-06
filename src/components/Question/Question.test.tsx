import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { quizTestMockQuestions } from '@/mocks/quiz-test-data-mock';
import { QuizQuestion } from '@/components/Question/Question';

describe('QuizQuestion', () => {
  const question = quizTestMockQuestions[0];

  it('renders the question text', () => {
    render(
      <QuizQuestion
        question={question}
        chosenAnswerId={undefined}
        onAnswerChose={() => {}}
      />,
    );
    expect(screen.getByTestId('quiz-question-text')).toHaveTextContent(
      question.questionText,
    );
  });

  it('renders all answer options', () => {
    render(
      <QuizQuestion
        question={question}
        chosenAnswerId={undefined}
        onAnswerChose={() => {}}
      />,
    );

    question.answerOptions.forEach((option) => {
      expect(
        screen.getByTestId(`quiz-question-option-${option.id}`),
      ).toHaveTextContent(option.text);
    });
  });

  it('calls onAnswerChose with correct parameters when an option is selected', () => {
    const mockOnAnswerChose = vi.fn();

    render(
      <QuizQuestion
        question={question}
        chosenAnswerId={undefined}
        onAnswerChose={mockOnAnswerChose}
      />,
    );

    const option = question.answerOptions[0];
    fireEvent.click(screen.getByTestId(`quiz-question-option-${option.id}`));

    expect(mockOnAnswerChose).toHaveBeenCalledWith(question.id, option.id);
  });
});
