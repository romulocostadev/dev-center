import React from 'react';

import {
  LayoutSider,
  MenuGroup,
  FirstSection,
  MenuItem,
  IconOutlinedProject,
  Label,
  MenuItem1,
  IconOutlinedPartition,
  Label1,
  MenuItem2,
  IconOutlinedDatabase,
  Label2,
  MenuItem3,
  IconOutlinedApi,
  Label3,
  SecondSection,
  MenuItem4,
  Icon,
  Label4,
  MenuItem5,
  Icon1,
  Label5,
  Divider,
} from './styles';

const LayoutSiderPage = () => {
  return (
    <LayoutSider>
      <MenuGroup>
        <FirstSection>
          <MenuItem>
            <IconOutlinedProject />
            <Label>Design</Label>
          </MenuItem>
          <MenuItem1>
            <IconOutlinedPartition />
            <Label1>Workflow</Label1>
          </MenuItem1>
          <MenuItem2>
            <IconOutlinedDatabase />
            <Label2>Data</Label2>
          </MenuItem2>
          <MenuItem3>
            <IconOutlinedApi />
            <Label3>Plugins</Label3>
          </MenuItem3>
        </FirstSection>
        <SecondSection>
          <MenuItem4>
            <Icon />
            <Label4>Settings</Label4>
          </MenuItem4>
          <MenuItem5>
            <Icon1 />
            <Label5>Help</Label5>
          </MenuItem5>
        </SecondSection>
      </MenuGroup>
      <Divider />
    </LayoutSider>
  );
};

export default LayoutSiderPage;
