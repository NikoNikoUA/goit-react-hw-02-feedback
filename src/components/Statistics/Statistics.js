import { ListOfSpans, ListOfSpansItem, Span } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <ListOfSpans>
      {Object.entries({ good, neutral, bad, total, positivePercentage }).map(
        ([key, value]) => {
          if (key === 'positivePercentage') {
            return (
              <ListOfSpansItem key={key}>
                Positive feedback: {value}%
              </ListOfSpansItem>
            );
          }
          return (
            <ListOfSpansItem key={key}>
              <Span>
                {key}: {value}
              </Span>
            </ListOfSpansItem>
          );
        }
      )}
    </ListOfSpans>
  );
};
