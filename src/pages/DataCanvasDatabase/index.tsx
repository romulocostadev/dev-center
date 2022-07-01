import { t } from 'i18next';
import React, { useState, useEffect } from 'react';

import GenericCodeButton from '../../components/Button';
import ModalNewDatabase from '../../components/ModalNewDatabase';
import ModalNewDbInstance from '../../components/ModalNewDbInstance';
import ModalNewEntity from '../../components/ModalNewEntity';
import { PathType } from '../../services/factories/common';
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

const getDataScreen = (elementType: string) => {
  switch (elementType) {
    case PathType.Database:
      return {
        title: 'A Database Needs a Entity',
        buttonTitle: 'Create entity',
      };
    case PathType.DatabaseInstance:
      return {
        title: 'A Database Instance Needs a Database',
        buttonTitle: 'Create Database',
      };
    default:
      return {
        title: 'A Solution Needs a Database Instance',
        buttonTitle: 'Create DbInstance',
      };
  }
};

const DataCanvasDatabasePage = () => {
  const dispatch = useAppDispatch();

  const activeWorkSpace = useAppSelector(
    state => state.solutions.activeWorkSpace,
  );

  const [data, setData] = useState({});
  useEffect(() => {
    setData(getDataScreen(activeWorkSpace?.current?.pathType));
  }, [activeWorkSpace?.current?.pathType]);
  const handleClickButtonCreate = () => {
    switch (activeWorkSpace?.current?.pathType) {
      case 'database':
        dispatch(
          setModalData({
            visible: true,
            title: t('modal-new-entity'),
            content: <ModalNewEntity />,
          }),
        );
        break;
      case 'database-instance':
        dispatch(
          setModalData({
            visible: true,
            title: t('modal-new-database'),
            content: <ModalNewDatabase />,
          }),
        );
        break;
      default:
        dispatch(
          setModalData({
            visible: true,
            title: t('modal-new-dbinstance'),
            content: <ModalNewDbInstance />,
          }),
        );
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
