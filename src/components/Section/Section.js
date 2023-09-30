import { FirstHeading, Wrapper } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <Wrapper>
      <FirstHeading>{title}</FirstHeading>
      {children}
    </Wrapper>
  );
};
