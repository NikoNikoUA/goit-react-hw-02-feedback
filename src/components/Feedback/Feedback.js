import { MainHeader } from '../../components/MainHeader/MainHeader';
import { BtnList } from '../../components/BtnList/BtnList';
import { LevelTwoHeading } from '../../components/LevelTwoHeading/LevelTwoHeading';
import { SpanList } from '../../components/SpanList/SpanList';

export const Feedback = ({ good, neutral, bad }) => {
  return (
    <>
      <MainHeader mainTitle={'Please leave feedback'} />
      <BtnList />
      <LevelTwoHeading title={'Statistics'} />
      <SpanList good={good} neutral={neutral} bad={bad} />
    </>
  );
};
