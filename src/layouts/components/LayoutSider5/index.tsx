import React from 'react';

import {
  LayoutSider2,
  MenuGroup4,
  FirstSection1,
  MenuItem6,
  ProjectOutlinedIcon,
  Label6,
  MenuItem7,
  IconOutlinedPartition1,
  Vector15,
  Label7,
  MenuItem8,
  IconOutlinedDatabase1,
  Vector16,
  Label8,
  MenuItem9,
  IconOutlinedApi1,
  Vector17,
  Label9,
  SecondSection1,
  MenuItem10,
  Icon6,
  Vector18,
  Label10,
  MenuItem11,
  Icon7,
  Label11,
  Divider6,
} from './styles';

const LayoutSiderPage = () => {
  return (
    <LayoutSider2>
      <MenuGroup4>
        <FirstSection1>
          <MenuItem6>
            <ProjectOutlinedIcon />
            <Label6>Design</Label6>
          </MenuItem6>
          <MenuItem7>
            <IconOutlinedPartition1>
              <Vector15 />
            </IconOutlinedPartition1>
            <Label7>Workflow</Label7>
          </MenuItem7>
          <MenuItem8>
            <IconOutlinedDatabase1>
              <Vector16 />
            </IconOutlinedDatabase1>
            <Label8>Data</Label8>
          </MenuItem8>
          <MenuItem9>
            <IconOutlinedApi1>
              <Vector17 />
            </IconOutlinedApi1>
            <Label9>Plugins</Label9>
          </MenuItem9>
        </FirstSection1>
        <SecondSection1>
          <MenuItem10>
            <Icon6>
              <Vector18 />
            </Icon6>
            <Label10>Settings</Label10>
          </MenuItem10>
          <MenuItem11>
            <Icon7 />
            <Label11>Help</Label11>
          </MenuItem11>
        </SecondSection1>
      </MenuGroup4>
      <Divider6 />
    </LayoutSider2>
  );
};

export default LayoutSiderPage;
