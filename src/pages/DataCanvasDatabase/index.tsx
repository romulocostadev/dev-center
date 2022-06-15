import React from 'react';



import {
DataCanvasDatabase,
MenuGroup1,
CollapseProperties1,
CollapseItem1,
CollapseHead1,
DownOutlinedIcon,
Properties1,
IconOutlinedMenu1,
Vector,
Divider2,
CollapseBody1,
Input4,
InputBasic1,
Prefix1,
Input1,
Dropdown1,
Prefix2,
Input2,
InstanceComponenticonoutlineddir,
Vector1,
Divider3,
AInstanceNeedsADatabase,
VectorFrame1,
DataVector,
AInstanceNeedsaDatabase,
TextComponentdont,
HandleNewDatabase,
} from './styles';

const DataCanvasDatabasePage = () => {









return (
        <DataCanvasDatabase    >
  <MenuGroup1    >
    <CollapseProperties1    >
      <CollapseItem1    >
        <CollapseHead1    >
          <DownOutlinedIcon />
          <Properties1 >
            Properties
          </Properties1>
          <IconOutlinedMenu1    >
            <Vector    >
            </Vector>
          </IconOutlinedMenu1>
        </CollapseHead1>
        <Divider2    >
        </Divider2>
        <CollapseBody1    >
          <Input4    >
            <InputBasic1    >
              <Prefix1 >
                Name:
              </Prefix1>
              <Input1 >
                PostgreSQL
              </Input1>
            </InputBasic1>
          </Input4>
          <Dropdown1    >
            <Prefix2 >
              Type:
            </Prefix2>
            <Input2 >
              PostgreSQL
            </Input2>
            <InstanceComponenticonoutlineddir    >
              <Vector1    >
              </Vector1>
            </InstanceComponenticonoutlineddir>
          </Dropdown1>
        </CollapseBody1>
        <Divider3    >
        </Divider3>
      </CollapseItem1>
    </CollapseProperties1>
  </MenuGroup1>
  <AInstanceNeedsADatabase    >
    <VectorFrame1    >
      <DataVector    >
      </DataVector>
    </VectorFrame1>
    <AInstanceNeedsaDatabase >
      A Instance Needs a Database
    </AInstanceNeedsaDatabase>
    <TextComponentdont >
      Don't worry, we're almost there.
    </TextComponentdont>
    <HandleNewDatabase  
      type='primary'
      >
        New Database
    </HandleNewDatabase>
  </AInstanceNeedsADatabase>
</DataCanvasDatabase>

    )

}

export default DataCanvasDatabasePage
