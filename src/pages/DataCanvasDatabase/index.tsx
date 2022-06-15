import React from 'react';

import {
  DataCanvasDatabase,
  MenuGroup3,
  CollapseProperties1,
  CollapseItem1,
  CollapseHead1,
  DownOutlinedIcon,
  Properties1,
  IconOutlinedMenu1,
  Vector8,
  Divider4,
  CollapseBody1,
  Input4,
  InputBasic4,
  Prefix1,
  Input1,
  Dropdown1,
  Prefix2,
  Input2,
  InstanceComponenticonoutlineddir,
  Vector9,
  Divider5,
  AInstanceNeedsADatabase,
  VectorFrame1,
  DataVector,
  AInstanceNeedsaDatabase,
  TextComponentdont,
  HandleNewDatabase,
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
                <Vector8 />
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
                <InstanceComponenticonoutlineddir>
                  <Vector9 />
                </InstanceComponenticonoutlineddir>
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
        <HandleNewDatabase type="primary">New Database</HandleNewDatabase>
      </AInstanceNeedsADatabase>
    </DataCanvasDatabase>
  );
};

export default DataCanvasDatabasePage;
