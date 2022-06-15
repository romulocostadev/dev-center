import React from 'react';



import {
LayoutSider,
MenuGroup,
FirstSection,
MenuItem,
ProjectOutlinedIcon,
Label,
MenuItem1,
IconOutlinedPartition,
Vector,
Label1,
MenuItem2,
IconOutlinedDatabase,
Vector1,
Label2,
MenuItem3,
IconOutlinedApi,
Vector2,
Label3,
SecondSection,
MenuItem4,
Icon,
Vector3,
Label4,
MenuItem5,
Icon1,
Label5,
Divider,
} from './styles';

const LayoutSiderPage = () => {









return (
        <LayoutSider    >
  <MenuGroup    >
    <FirstSection    >
      <MenuItem    >
        <ProjectOutlinedIcon />
        <Label >
          Design
        </Label>
      </MenuItem>
      <MenuItem1    >
        <IconOutlinedPartition    >
          <Vector    >
          </Vector>
        </IconOutlinedPartition>
        <Label1 >
          Workflow
        </Label1>
      </MenuItem1>
      <MenuItem2    >
        <IconOutlinedDatabase    >
          <Vector1    >
          </Vector1>
        </IconOutlinedDatabase>
        <Label2 >
          Data
        </Label2>
      </MenuItem2>
      <MenuItem3    >
        <IconOutlinedApi    >
          <Vector2    >
          </Vector2>
        </IconOutlinedApi>
        <Label3 >
          Plugins
        </Label3>
      </MenuItem3>
    </FirstSection>
    <SecondSection    >
      <MenuItem4    >
        <Icon    >
          <Vector3    >
          </Vector3>
        </Icon>
        <Label4 >
          Settings
        </Label4>
      </MenuItem4>
      <MenuItem5    >
        <Icon1    >
        </Icon1>
        <Label5 >
          Help
        </Label5>
      </MenuItem5>
    </SecondSection>
  </MenuGroup>
  <Divider    >
  </Divider>
</LayoutSider>

    )

}

export default LayoutSiderPage
