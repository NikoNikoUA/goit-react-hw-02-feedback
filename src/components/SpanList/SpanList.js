import { ListOfSpans, ListOfSpansItem, Span } from './SpanList.styled';

export const SpanList = ({ good, neutral, bad }) => {
  return (
    <ListOfSpans>
      {Object.entries({ good, neutral, bad }).map(([key, value]) => {
        return (
          <ListOfSpansItem>
            <Span>
              {key}:{value}
            </Span>
          </ListOfSpansItem>
        );
      })}
    </ListOfSpans>
  );
};
