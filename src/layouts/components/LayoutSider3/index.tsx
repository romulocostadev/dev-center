import React from 'react';

import { PlusOutlined } from '@ant-design/icons';

import {
  LayoutSider1,
  MenuGroup1,
  Layers,
  TreeItem,
  Frame1,
  CaretDownOutlinedIcon,
  Icon3,
  FolderOpenOutlinedIcon,
  ItemWrapper,
  Database,
  ButtonsButton1,
  TreeItem1,
  Frame11,
  IconOutlinedCaretDown1,
  Vector9,
  Icon4,
  IconOutlinedFolderOpen1,
  Vector10,
  ItemWrapper1,
  Database1,
  ButtonsButton8,
  Content6,
  IconOutlinedPlus,
  TreeItem2,
  Frame12,
  IconOutlinedCaretDown2,
  Vector11,
  Icon5,
  IconOutlinedFolderOpen2,
  Vector12,
  ItemWrapper2,
  Database2,
  ButtonsButton9,
  Content7,
  IconOutlinedPlus1,
} from './styles';

const LayoutSiderPage = () => {
  return (
    <LayoutSider1>
      <MenuGroup1>
        <Layers>
          <TreeItem>
            <Frame1>
              <CaretDownOutlinedIcon />
            </Frame1>
            <Icon3>
              <FolderOpenOutlinedIcon />
            </Icon3>
            <ItemWrapper>
              <Database>SunChemical</Database>
            </ItemWrapper>
            <ButtonsButton1 type="text" icon={<PlusOutlined />} />
          </TreeItem>
          <TreeItem1>
            <Frame11>
              <IconOutlinedCaretDown1>
                <Vector9 />
              </IconOutlinedCaretDown1>
            </Frame11>
            <Icon4>
              <IconOutlinedFolderOpen1>
                <Vector10 />
              </IconOutlinedFolderOpen1>
            </Icon4>
            <ItemWrapper1>
              <Database1>Database</Database1>
            </ItemWrapper1>
            <ButtonsButton8>
              <Content6>
                <IconOutlinedPlus />
              </Content6>
            </ButtonsButton8>
          </TreeItem1>
          <TreeItem2>
            <Frame12>
              <IconOutlinedCaretDown2>
                <Vector11 />
              </IconOutlinedCaretDown2>
            </Frame12>
            <Icon5>
              <IconOutlinedFolderOpen2>
                <Vector12 />
              </IconOutlinedFolderOpen2>
            </Icon5>
            <ItemWrapper2>
              <Database2>Services</Database2>
            </ItemWrapper2>
            <ButtonsButton9>
              <Content7>
                <IconOutlinedPlus1 />
              </Content7>
            </ButtonsButton9>
          </TreeItem2>
        </Layers>
      </MenuGroup1>
    </LayoutSider1>
  );
};

export default LayoutSiderPage;
