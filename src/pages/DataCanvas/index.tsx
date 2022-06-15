import React from 'react';

import GenericCodeButton from '../../components/Button';

import {
  DataCanvas,
  CardCreatingAStructure,
  VectorFrame,
  CreatingAStructureVector,
  CreatingaStructure,
  Asolutionneedsainstance,
  MenuGroup2,
  CollapseProperties,
  CollapseItem,
  CollapseHead,
  IconOutlinedDown,
  Properties,
  IconOutlinedMenu,
  Divider2,
  CollapseBody,
  Input3,
  InputBasic3,
  Prefix,
  Input,
  Divider3,
} from './styles';

const DataCanvasPage = () => {
  return (
    <DataCanvas>
      <CardCreatingAStructure>
        <VectorFrame>
          <CreatingAStructureVector />
        </VectorFrame>
        <CreatingaStructure>Creating a Structure</CreatingaStructure>
        <Asolutionneedsainstance>
          A solution needs a instance.
        </Asolutionneedsainstance>
        <GenericCodeButton type="primary">Start learning</GenericCodeButton>
      </CardCreatingAStructure>
      <MenuGroup2>
        <CollapseProperties>
          <CollapseItem>
            <CollapseHead>
              <IconOutlinedDown />
              <Properties>Properties</Properties>
              <IconOutlinedMenu />
            </CollapseHead>
            <Divider2 />
            <CollapseBody>
              <Input3>
                <InputBasic3>
                  <Prefix>Name:</Prefix>
                  <Input>SunChemical</Input>
                </InputBasic3>
              </Input3>
            </CollapseBody>
            <Divider3 />
          </CollapseItem>
        </CollapseProperties>
      </MenuGroup2>
    </DataCanvas>
  );
};

export default DataCanvasPage;
