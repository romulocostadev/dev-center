import { t } from 'i18next';
import React, { useState, useEffect } from 'react';

import GenericCodeButton from '../../components/Button';
import ModalNewDatabase from '../../components/ModalNewDatabase';
import ModalNewEntity from '../../components/ModalNewEntity';
import { setModalData } from '../../store/modal/modalSlice';
import { useAppDispatch, useAppSelector } from '../../store/reduxHooks';

import {
  DataCanvasDatabase,
  MenuGroup3,
  CollapseProperties1,
  CollapseItem1,
  CollapseHead1,
  DownOutlinedIcon,
  Properties1,
  IconOutlinedMenu1,
  Vector13,
  Divider4,
  CollapseBody1,
  Input4,
  InputBasic4,
  Prefix1,
  Input1,
  Dropdown1,
  Prefix2,
  Input2,
  InstanceComponenticonoutlineddir1,
  Vector14,
  Divider5,
  AInstanceNeedsADatabase,
  VectorFrame1,
  DataVector,
  AInstanceNeedsaDatabase,
  TextComponentdont,
} from './styles';

const getDataScreen = (elementType: string, activeWorkSpaceObj: any) => {
  switch (elementType) {
    case 'entity':
      return {
        title: 'A Database Needs a Instance',
        buttonTitle: 'Create instance',
      };
    case 'database':
      return {
        title: 'A Database Needs a Entity',
        buttonTitle: 'Create entity',
      };
    case 'dbInstance':
      return {
        title: 'A DbInstance Needs a Database',
        buttonTitle: 'Create database',
      };
    default:
      return {
        title: 'Nothing here',
        buttonTitle: 'Nothing here',
      };
  }
};

const DataCanvasDatabasePage = () => {
  const dispatch = useAppDispatch();

  const properties = useAppSelector(
    state => state.solutions.activeWorkSpace.properties,
  );

  const activeWorkSpaceObj = useAppSelector(
    state => state.solutions.activeWorkSpace,
  );
  const [data, setData] = useState({});
  useEffect(() => {
    setData(getDataScreen(properties?.elementType, activeWorkSpaceObj));
  }, [properties]);
  const handleClickButtonCreate = () => {
    switch (properties?.elementType) {
      case 'database':
        dispatch(
          setModalData({
            visible: true,
            title: t('modal-new-entity'),
            content: <ModalNewEntity />,
          }),
        );
        break;
      case 'dbInstance':
        dispatch(
          setModalData({
            visible: true,
            title: t('modal-new-database'),
            content: <ModalNewDatabase />,
          }),
        );
        break;
      default:
        break;
    }
  };

  return (
    <DataCanvasDatabase>
      <AInstanceNeedsADatabase>
        <VectorFrame1>
          <DataVector />
        </VectorFrame1>
        <AInstanceNeedsaDatabase>{data.title}</AInstanceNeedsaDatabase>
        <TextComponentdont>Don't worry, we're almost there.</TextComponentdont>
        <GenericCodeButton type="primary" onClick={handleClickButtonCreate}>
          {data.buttonTitle}
        </GenericCodeButton>
      </AInstanceNeedsADatabase>
    </DataCanvasDatabase>
  );
};

export default DataCanvasDatabasePage;
