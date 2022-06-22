import React from 'react';
import { Form, Modal } from 'antd';
import getModalConfig from '../../../../utils/modalConfig';
import {
  Content011,
  LessonsCard1,
  Lessons2,
  Lessons1,
  Bar,
  Logo3,
  Frame9,
  ButtonsButton5,
  Stage,
  Creatingdata,
  Howtocreateadataworkflow,
  ButtonsButton6,
  Solutions1,
  Title4,
  Solutions,
  NewSolutionButton,
  Sorter,
  Sortby,
  Name,
  Lastmodified,
  MySolutions,
  Solution02,
  Logo4,
  Logo5,
  Veiling,
  Apr1820221356,
  Solution03,
  Logo6,
  Logo7,
  Iris,
  Apr1720221356,
  BreadcrumbLink,
  ButtonsButton7,
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
    <>
      <Content011>
        <LessonsCard1>
          <Lessons2>
            <Lessons1>Lessons</Lessons1>
            <Bar>
              <Logo3>
                <Frame9 />
              </Logo3>
            </Bar>
            <ButtonsButton5 type="link">Start lesson</ButtonsButton5>
          </Lessons2>
          <Stage>
            <Creatingdata>Creating data</Creatingdata>
            <Howtocreateadataworkflow>
              How to create a data workflow.
            </Howtocreateadataworkflow>
          </Stage>
          <ButtonsButton6 type="link">View all lessons</ButtonsButton6>
        </LessonsCard1>
        <Solutions1>
          <Title4>
            <Solutions>Solutions</Solutions>
            <NewSolutionButton type="primary" onClick={showModalNewSolution}>
              New solution
            </NewSolutionButton>
          </Title4>
          <Sorter>
            <Sortby>Sort by</Sortby>
            <Name>name</Name>
            <Lastmodified>last modified</Lastmodified>
          </Sorter>
          <MySolutions>
            <Solution02>
              <Logo4 />
              <Logo5>
                <Veiling>Veiling</Veiling>
                <Apr1820221356>Apr 18, 2022, 13:56</Apr1820221356>
              </Logo5>
            </Solution02>
            <Solution03>
              <Logo6 />
              <Logo7>
                <Iris>Iris</Iris>
                <Apr1720221356>Apr 17, 2022, 13:56</Apr1720221356>
              </Logo7>
            </Solution03>
          </MySolutions>
        </Solutions1>
        <BreadcrumbLink />
        <ButtonsButton7 type="link" size="large" />
      </Content011>
    </>
  );
};

export default Page;
