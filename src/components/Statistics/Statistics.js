import { ListOfSpans, ListOfSpansItem, Span } from './Statistics.styled';

export const Statistics = ({ good, neutral, bad }) => {
  return (
    <ListOfSpans>
      {Object.entries({ good, neutral, bad }).map(([key, value]) => {
        return (
          <ListOfSpansItem key={[key]}>
            <Span>
              {key}:{value}
            </Span>
          </ListOfSpansItem>
        );
      })}
    </ListOfSpans>
  );
};
