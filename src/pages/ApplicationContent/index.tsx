import React from 'react';

import GenericCodeButton from '../../components/Button';

import {
  ApplicationContent,
  Title3,
  WelcometoBeatrix,
  Seehowtogetstarted,
  Cards,
  LessonsCard,
  CardVector,
  VectorComponentundrawyoutube,
  Lessons,
  LearntousetheBeatrix,
  FigmaCard,
  CardVector1,
  VectorComponentundrawprototyp,
  ConnectFigma,
  TextComponentconnect,
  ButtonsButton6,
  InputCard,
  CardVector2,
  Undrawdatainputfxv21,
  Datainput,
  TextComponentstart,
  ButtonsButton7,
} from './styles';

const ApplicationContentPage = () => {
  return (
    <ApplicationContent>
      <Title3>
        <WelcometoBeatrix>Welcome to Beatrix!</WelcometoBeatrix>
        <Seehowtogetstarted>See how to get started...</Seehowtogetstarted>
      </Title3>
      <Cards>
        <LessonsCard>
          <CardVector>
            <VectorComponentundrawyoutube />
          </CardVector>
          <Lessons>Lessons</Lessons>
          <LearntousetheBeatrix>Learn to use the Beatrix.</LearntousetheBeatrix>
          <GenericCodeButton type="primary">Start learning</GenericCodeButton>
        </LessonsCard>
        <FigmaCard>
          <CardVector1>
            <VectorComponentundrawprototyp />
          </CardVector1>
          <ConnectFigma>Connect Figma</ConnectFigma>
          <TextComponentconnect>
            Connect to your Figma account.
          </TextComponentconnect>
          <ButtonsButton6 type="primary">Connect to Figma</ButtonsButton6>
        </FigmaCard>
        <InputCard>
          <CardVector2>
            <Undrawdatainputfxv21 />
          </CardVector2>
          <Datainput>Data input</Datainput>
          <TextComponentstart>
            Start a solution by entering data.
          </TextComponentstart>
          <ButtonsButton7 type="primary">Get started</ButtonsButton7>
        </InputCard>
      </Cards>
    </ApplicationContent>
  );
};

export default ApplicationContentPage;
