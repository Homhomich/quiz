import React from 'react';
import {
  Box,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from '@mui/material';
import { Question } from '@/types/Question';

interface Props {
  question: Question;
  chosenAnswerId?: number;
  onAnswerChose: (questionId: number, answerId: number) => void;
}

export const QuizQuestion: React.FC<Props> = ({
  question,
  chosenAnswerId,
  onAnswerChose,
}) => {
  return (
    <Box data-testid="quiz-question-container">
      <Typography data-testid="quiz-question-text" variant="body1" gutterBottom>
        {question.questionText}
      </Typography>
      <FormControl component="fieldset">
        <RadioGroup
          value={chosenAnswerId || ''}
          onChange={(event) =>
            onAnswerChose(question.id, Number(event.target.value))
          }
        >
          {question.answerOptions.map((option) => (
            <FormControlLabel
              data-testid={'quiz-question-option-' + option.id}
              key={option.id}
              value={option.id}
              control={<Radio />}
              label={option.text}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </Box>
  );
};