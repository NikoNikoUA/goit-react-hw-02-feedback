import { FirstHeading, Wrapper } from './Section.styled';

import { FaCoffee } from 'react-icons/fa';

export const Section = ({ title, children }) => {
  return (
    <Wrapper>
      <FirstHeading>
        {title}
        <FaCoffee />
      </FirstHeading>
      {children}
    </Wrapper>
  );
};
