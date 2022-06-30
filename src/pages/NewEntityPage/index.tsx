import React from 'react';

import GenericCodeButton from '../../components/Button';

import {
  DataCanvasDatabase,
  AInstanceNeedsADatabase,
  VectorFrame1,
  DataVector,
  AInstanceNeedsaDatabase,
  TextComponentdont,
  DataWrapper,
} from './styles';

const NewEntityPage = () => {
  return (
    <DataCanvasDatabase>
      <AInstanceNeedsADatabase>
        <VectorFrame1>
          <DataVector />
        </VectorFrame1>
        <DataWrapper>
          <AInstanceNeedsaDatabase>
            A Database Needs a Entity
          </AInstanceNeedsaDatabase>
          <TextComponentdont>Don't worry we're almost there.</TextComponentdont>
          <GenericCodeButton type="primary">New Entity</GenericCodeButton>
        </DataWrapper>
      </AInstanceNeedsADatabase>
    </DataCanvasDatabase>
  );
};

export default NewEntityPage;
