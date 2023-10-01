import { BtnItemsList, BtnItem, Btn } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <BtnItemsList>
      {options.map(option => {
        return (
          <BtnItem key={option}>
            <Btn
              type="button"
              onClick={() => onLeaveFeedback(option)}
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
