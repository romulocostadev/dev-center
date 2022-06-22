import React from 'react';

import { useTranslation } from 'react-i18next';
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
  TitleContainer,
  Solutions,
  NewSolutionButton,
  Sorter,
  Sortby,
  Name,
  Lastmodified,
  BreadcrumbLink,
} from './styles';

import ModalNewSolution from '../../../../components/ModalNewSolution';
import SolutionList from '../../../../components/SolutionList';
import { useAppDispatch } from '../../../../store/reduxHooks';
import { setModalData } from '../../../../store/modal/modalSlice';
import { useGetSolutionQuery } from '../../../../services/solution';

const Page = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const { data: solutions } = useGetSolutionQuery();

  const showModalNewSolution = () => {
    dispatch(
      setModalData({
        visible: true,
        title: t('modal-new-entity-title'),
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
      <SolutionsListWrapper>
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
        <SolutionList />
      </SolutionsListWrapper>
      <BreadcrumbLink />
    </SolutionWrapper>
  );
};

export default Page;
