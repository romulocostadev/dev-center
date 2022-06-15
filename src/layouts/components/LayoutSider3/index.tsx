import React from 'react';

import {PlusOutlined} from '@ant-design/icons' 


import {
LayoutSider1,
MenuGroup1,
Layers,
TreeItem,
Frame1,
IconOutlinedCaretDown,
Icon2,
IconOutlinedFolderOpen,
ItemWrapper,
Database,
ButtonsButton3,
TreeItem1,
Frame11,
IconOutlinedCaretDown1,
Icon3,
IconOutlinedFolderOpen1,
ItemWrapper1,
Database1,
ButtonsButton15,
Content10,
IconOutlinedPlus,
Button,
TreeItem2,
Frame12,
IconOutlinedCaretDown2,
Icon4,
IconOutlinedFolderOpen2,
ItemWrapper2,
Database2,
ButtonsButton16,
Content11,
IconOutlinedPlus1,
Button,
} from './styles';

const LayoutSiderPage = () => {









return (
        <LayoutSider1    >
  <MenuGroup1    >
    <Layers    >
      <TreeItem    >
        <Frame1    >
          <IconOutlinedCaretDown    >
          </IconOutlinedCaretDown>
        </Frame1>
        <Icon2    >
          <IconOutlinedFolderOpen    >
          </IconOutlinedFolderOpen>
        </Icon2>
        <ItemWrapper    >
          <Database >
            SunChemical
          </Database>
        </ItemWrapper>
        <ButtonsButton3  
          type='text'
          icon={<PlusOutlined/>}
          >
        </ButtonsButton3>
      </TreeItem>
      <TreeItem1    >
        <Frame11    >
          <IconOutlinedCaretDown1    >
          </IconOutlinedCaretDown1>
        </Frame11>
        <Icon3    >
          <IconOutlinedFolderOpen1    >
          </IconOutlinedFolderOpen1>
        </Icon3>
        <ItemWrapper1    >
          <Database1 >
            Database
          </Database1>
        </ItemWrapper1>
        <ButtonsButton15    >
          <Content10    >
            <IconOutlinedPlus    >
            </IconOutlinedPlus>
          </Content10>
        </ButtonsButton15>
      </TreeItem1>
      <TreeItem2    >
        <Frame12    >
          <IconOutlinedCaretDown2    >
          </IconOutlinedCaretDown2>
        </Frame12>
        <Icon4    >
          <IconOutlinedFolderOpen2    >
          </IconOutlinedFolderOpen2>
        </Icon4>
        <ItemWrapper2    >
          <Database2 >
            Services
          </Database2>
        </ItemWrapper2>
        <ButtonsButton16    >
          <Content11    >
            <IconOutlinedPlus1    >
            </IconOutlinedPlus1>
          </Content11>
        </ButtonsButton16>
      </TreeItem2>
    </Layers>
  </MenuGroup1>
</LayoutSider1>

    )

}

export default LayoutSiderPage
