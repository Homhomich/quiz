import React, { useState } from 'react';
import { Box, Stack, Button, Typography } from '@mui/material';
import { QuizQuestion } from '@/components/Question';
import { quizQuestions } from '@/api/quiz-data';
import { ScorePage } from '@/components/Scores';
import { Question } from '@/types/Question';

interface Props {
  questions?: Question[];
}

/**
 * This is the main component of app, it handles all the state operations,
 * we can improve it by adding Welcome page. Also we can add "Try again" button for the Score page
 * to make it more user friendly.
 * */
export const QuizPage: React.FC<Props> = ({ questions = quizQuestions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  /**
   * submittedAnswers - is a map, where key is a questionId and the value is
   * an answerId of the answer that user have chosen. I chose a map, because it's much easier to
   * search for user answers by question keys.
   * */
  const [submittedAnswers, setSubmittedAnswers] = useState<{
    [key: number]: number;
  }>({});

  const handleAnswerChoose = (questionId: number, answerId: number) => {
    setSubmittedAnswers((prev) => ({ ...prev, [questionId]: answerId }));
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  const handleNext = () => {
    setCurrentQuestion((prevState) => prevState + 1);
  };

  const handlePrevious = () => {
    setCurrentQuestion((prevState) => prevState - 1);
  };

  let isLastQuestion = currentQuestion === questions.length - 1;
  let userAnswer = submittedAnswers[questions[currentQuestion].id];

  if (isSubmitted) {
    return (
      <ScorePage submittedAnswers={submittedAnswers} questions={questions} />
    );
  }

  return (
    <Box
      data-testid="quiz-page-container"
      sx={{
        maxWidth: 600,
        margin: '0 auto',
        padding: 4,
        border: '1px solid gray',
      }}
    >
      <Typography
        data-testid="quiz-page-question-number"
        variant="h5"
        gutterBottom
      >
        Question {currentQuestion + 1} / {questions.length}
      </Typography>

      <QuizQuestion
        question={questions[currentQuestion]}
        chosenAnswerId={userAnswer}
        onAnswerChose={handleAnswerChoose}
      />

      <Stack spacing={2} direction="row" justifyContent="flex-end">
        <Button
          data-testid="quiz-page-previous-button"
          variant="outlined"
          color="secondary"
          disabled={currentQuestion === 0}
          onClick={handlePrevious}
        >
          Previous
        </Button>

        {isLastQuestion ? (
          <Button
            data-testid="quiz-page-submit-button"
            variant="outlined"
            color="primary"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        ) : (
          <Button
            data-testid="quiz-page-next-button"
            variant="contained"
            color="primary"
            onClick={handleNext}
            disabled={!userAnswer}
          >
            Next
          </Button>
        )}
      </Stack>
    </Box>
  );
};
