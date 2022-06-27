import React from 'react';

import {
  SolutionWrapper,
  LessonsCard,
  LessonsWrapper,
  Lessons,
  Bar,
  Logo,
  BarContainer,
  ButtonStartLesson,
  Stage,
  Creatingdata,
  HowtoCreateaDataWorkFlow,
  ButtonViewAllLessons,
  SolutionsListWrapper,
  BreadcrumbLink,
} from './styles';

import SolutionList from '../../../../components/SolutionList';

const Page = () => {
  return (
    <SolutionWrapper>
      <LessonsCard>
        <LessonsWrapper>
          <Lessons>Lessons</Lessons>
          <Bar>
            <Logo>
              <BarContainer />
            </Logo>
          </Bar>
          <ButtonStartLesson type="link">Start lesson</ButtonStartLesson>
        </LessonsWrapper>
        <Stage>
          <Creatingdata>Creating data</Creatingdata>
          <HowtoCreateaDataWorkFlow>
            How to create a data workflow.
          </HowtoCreateaDataWorkFlow>
        </Stage>
        <ButtonViewAllLessons type="link">
          View all lessons
        </ButtonViewAllLessons>
      </LessonsCard>
      <SolutionsListWrapper>
        <SolutionList />
      </SolutionsListWrapper>
      <BreadcrumbLink />
    </SolutionWrapper>
  );
};

export default Page;
