import { BtnItemsList, BtnItem, Btn } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeavingFeedback }) => {
  return (
    <BtnItemsList>
      {options.map(option => {
        return (
          <BtnItem key={option}>
            <Btn
              type="button"
              onClick={() => onLeavingFeedback(option)}
              name={option}
            >
              {option}
            </Btn>
          </BtnItem>
        );
      })}
    </BtnItemsList>
  );
};
