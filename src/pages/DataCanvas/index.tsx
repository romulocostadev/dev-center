import React from 'react';



import {
DataCanvas,
CardCreatingAStructure,
VectorFrame,
CreatingAStructureVector,
CreatingaStructure,
Asolutionneedsainstance,
HandleNewInstance,
MenuGroup,
CollapseProperties,
CollapseItem,
CollapseHead,
DownOutlinedIcon,
Properties,
MenuOutlinedIcon,
Divider,
CollapseBody,
Input3,
InputBasic,
Prefix,
Input,
Divider1,
} from './styles';

const DataCanvasPage = () => {









return (
        <DataCanvas    >
  <CardCreatingAStructure    >
    <VectorFrame    >
      <CreatingAStructureVector    >
      </CreatingAStructureVector>
    </VectorFrame>
    <CreatingaStructure >
      Creating a Structure
    </CreatingaStructure>
    <Asolutionneedsainstance >
      A solution needs a instance.
    </Asolutionneedsainstance>
    <HandleNewInstance  
      type='primary'
      >
        New instance
    </HandleNewInstance>
  </CardCreatingAStructure>
  <MenuGroup    >
    <CollapseProperties    >
      <CollapseItem    >
        <CollapseHead    >
          <DownOutlinedIcon />
          <Properties >
            Properties
          </Properties>
          <MenuOutlinedIcon />
        </CollapseHead>
        <Divider    >
        </Divider>
        <CollapseBody    >
          <Input3    >
            <InputBasic    >
              <Prefix >
                Name:
              </Prefix>
              <Input >
                SunChemical
              </Input>
            </InputBasic>
          </Input3>
        </CollapseBody>
        <Divider1    >
        </Divider1>
      </CollapseItem>
    </CollapseProperties>
  </MenuGroup>
</DataCanvas>

    )

}

export default DataCanvasPage
