import React from 'react';
import { Form, Modal } from 'antd';
import { useTranslation } from 'react-i18next';
import getModalConfig from '../../../../utils/modalConfig';
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
          {solutions?.map(solution => {
            return (
              <SolutionCard>
                <ProjectLogo />
                <CardTextContainer>
                  <CardTitle>{solution.Name}</CardTitle>
                  <CardData>{solution.CreatedUtc}</CardData>
                </CardTextContainer>
              </SolutionCard>
            );
          })}
        </MySolutions>
      </SolutionsList>
      <BreadcrumbLink />
    </SolutionWrapper>
  );
};

export default Page;
