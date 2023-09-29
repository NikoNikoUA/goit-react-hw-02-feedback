import { BtnItemsList, BtnItem, Btn } from './BtnList.styled';

export const BtnList = ({ good, bad, neutral, onAddingFeedback }) => {
  const buttons = Object.entries({ good, neutral, bad });
  return (
    <BtnItemsList>
      {buttons.map(([key]) => {
        return (
          <BtnItem key={key}>
            <Btn type="button" onClick={onAddingFeedback} name={key}>
              {key}
            </Btn>
          </BtnItem>
        );
      })}
    </BtnItemsList>
  );
};
