import React from 'react';

import { PlusOutlined } from '@ant-design/icons';

import {
  LayoutSider1,
  MenuGroup1,
  Layers,
  TreeItem,
  Frame1,
  CaretDownOutlinedIcon,
  Icon2,
  FolderOpenOutlinedIcon,
  ItemWrapper,
  Database,
  ButtonsButton3,
  TreeItem1,
  Frame11,
  IconOutlinedCaretDown1,
  Vector4,
  Icon3,
  IconOutlinedFolderOpen1,
  Vector5,
  ItemWrapper1,
  Database1,
  ButtonsButton15,
  Content10,
  IconOutlinedPlus,
  TreeItem2,
  Frame12,
  IconOutlinedCaretDown2,
  Vector6,
  Icon4,
  IconOutlinedFolderOpen2,
  Vector7,
  ItemWrapper2,
  Database2,
  ButtonsButton16,
  Content11,
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
            <Icon2>
              <FolderOpenOutlinedIcon />
            </Icon2>
            <ItemWrapper>
              <Database>SunChemical</Database>
            </ItemWrapper>
            <ButtonsButton3 type="text" icon={<PlusOutlined />} />
          </TreeItem>
          <TreeItem1>
            <Frame11>
              <IconOutlinedCaretDown1>
                <Vector4 />
              </IconOutlinedCaretDown1>
            </Frame11>
            <Icon3>
              <IconOutlinedFolderOpen1>
                <Vector5 />
              </IconOutlinedFolderOpen1>
            </Icon3>
            <ItemWrapper1>
              <Database1>Database</Database1>
            </ItemWrapper1>
            <ButtonsButton15>
              <Content10>
                <IconOutlinedPlus />
              </Content10>
            </ButtonsButton15>
          </TreeItem1>
          <TreeItem2>
            <Frame12>
              <IconOutlinedCaretDown2>
                <Vector6 />
              </IconOutlinedCaretDown2>
            </Frame12>
            <Icon4>
              <IconOutlinedFolderOpen2>
                <Vector7 />
              </IconOutlinedFolderOpen2>
            </Icon4>
            <ItemWrapper2>
              <Database2>Services</Database2>
            </ItemWrapper2>
            <ButtonsButton16>
              <Content11>
                <IconOutlinedPlus1 />
              </Content11>
            </ButtonsButton16>
          </TreeItem2>
        </Layers>
      </MenuGroup1>
    </LayoutSider1>
  );
};

export default LayoutSiderPage;
