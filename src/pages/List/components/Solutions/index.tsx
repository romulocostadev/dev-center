import React from 'react';
import {
  Content011 as SolutionWrapper,
  LessonsCard1 as LessonsCard,
  Lessons2 as LessonsWrapper,
  Lessons1 as Lessons,
  Bar,
  Logo3 as Logo,
  Frame9 as BarContainer,
  ButtonsButton5 as ButtonStartLesson,
  Stage,
  Creatingdata,
  Howtocreateadataworkflow as HowtoCreateaDataWorkFlow,
  ButtonsButton6 as ButtonViewAllLessons,
  Solutions1 as SolutionsList,
  Title4 as TitleContainer,
  Solutions,
  NewSolutionButton,
  Sorter,
  Sortby,
  Name,
  Lastmodified,
  MySolutions,
  Solution02 as SolutionCard,
  Logo4 as ProjectLogo,
  Logo5 as CardTextContainer,
  Veiling as CardTitle,
  Apr1820221356 as CardData,
  BreadcrumbLink,
} from './styles';

import ModalNewSolution from '../../../../components/ModalNewSolution';
import { useAppDispatch } from '../../../../store/reduxHooks';
import { setModalData } from '../../../../store/modal/modalSlice';

const Page = () => {
  const dispatch = useAppDispatch();

  const showModalNewSolution = () => {
    dispatch(
      setModalData({
        visible: true,
        title: 'New Solution',
        content: <ModalNewSolution />,
      }),
    );
  };

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
      <SolutionsList>
        <TitleContainer>
          <Solutions>Solutions</Solutions>
          <NewSolutionButton type="primary" onClick={showModalNewSolution}>
            New solution
          </NewSolutionButton>
        </TitleContainer>
        <Sorter>
          <Sortby>Sort by</Sortby>
          <Name>name</Name>
          <Lastmodified>last modified</Lastmodified>
        </Sorter>
        <MySolutions>
          <SolutionCard>
            <ProjectLogo />
            <CardTextContainer>
              <CardTitle>Veiling</CardTitle>
              <CardData>Apr 18, 2022, 13:56</CardData>
            </CardTextContainer>
          </SolutionCard>
          <SolutionCard>
            <ProjectLogo />
            <CardTextContainer>
              <CardTitle>Iris</CardTitle>
              <CardData>Apr 17, 2022, 13:56</CardData>
            </CardTextContainer>
          </SolutionCard>
        </MySolutions>
      </SolutionsList>
      <BreadcrumbLink />
    </SolutionWrapper>
  );
};

export default Page;
