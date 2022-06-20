import React from 'react';

import GenericCodeButton from '../../components/Button';

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

const DataCanvasDatabasePage = () => {
  return (
    <DataCanvasDatabase>
      <MenuGroup3>
        <CollapseProperties1>
          <CollapseItem1>
            <CollapseHead1>
              <DownOutlinedIcon />
              <Properties1>Properties</Properties1>
              <IconOutlinedMenu1>
                <Vector13 />
              </IconOutlinedMenu1>
            </CollapseHead1>
            <Divider4 />
            <CollapseBody1>
              <Input4>
                <InputBasic4>
                  <Prefix1>Name:</Prefix1>
                  <Input1>PostgreSQL</Input1>
                </InputBasic4>
              </Input4>
              <Dropdown1>
                <Prefix2>Type:</Prefix2>
                <Input2>PostgreSQL</Input2>
                <InstanceComponenticonoutlineddir1>
                  <Vector14 />
                </InstanceComponenticonoutlineddir1>
              </Dropdown1>
            </CollapseBody1>
            <Divider5 />
          </CollapseItem1>
        </CollapseProperties1>
      </MenuGroup3>
      <AInstanceNeedsADatabase>
        <VectorFrame1>
          <DataVector />
        </VectorFrame1>
        <AInstanceNeedsaDatabase>
          A Instance Needs a Database
        </AInstanceNeedsaDatabase>
        <TextComponentdont>Don't worry, we're almost there.</TextComponentdont>
        <GenericCodeButton type="primary">New Database</GenericCodeButton>
      </AInstanceNeedsADatabase>
    </DataCanvasDatabase>
  );
};

export default DataCanvasDatabasePage;
