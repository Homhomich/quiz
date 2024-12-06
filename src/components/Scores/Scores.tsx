import React from 'react';
import { Box, Typography } from '@mui/material';
import { calculateScore } from '@/utils/calculateScore';
import { Question } from '@/types/Question';
import { MAX_SCORE } from '@/components/Scores/constants';

/**
 * submittedAnswers - is a map, where key is a questionId and the value is
 * an answerId of the answer that user have chosen. I chose a map, because it's much easier to
 * search for user answers by question keys.
 * */
interface ScorePageProps {
  questions: Question[];
  submittedAnswers: { [key: number]: number };
}

/**
 * This component takes array of questions and user answers, and by using calculateScore
 * compare submitted answers to a correct answers
 * */
export const ScorePage: React.FC<ScorePageProps> = ({
  questions,
  submittedAnswers,
}) => {
  const scoreResult = calculateScore(questions, submittedAnswers);

  return (
    <Box
      data-testid="quiz-score-container"
      sx={{
        maxWidth: 600,
        margin: '0 auto',
        padding: 4,
        border: '3px solid green',
      }}
    >
      <Typography variant="h4" gutterBottom>
        Your Score:
      </Typography>
      <Typography data-testid="quiz-score-amount" variant="h5" gutterBottom>
        {scoreResult} / {MAX_SCORE}.
      </Typography>
      <Typography variant="h5">Congratulations!</Typography>
    </Box>
  );
};
