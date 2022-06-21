import React from 'react';

import {
  MenuGroup,
  Divider,
  Collapse,
  CollapseItem,
  CollapseHead,
  IconOutlinedDown,
  Vector,
  Properties55,
  IconOutlinedMenu,
  Vector1,
  Divider1,
  ViceriForm,
  Input207,
  InputBasic6,
  Prefix198,
  Input198,
  Dropdown5,
  Prefix199,
  Input199,
  InstanceComponenticonoutlineddir,
  Vector2,
  Input208,
  InputBasic7,
  Prefix200,
  Input200,
  Input209,
  InputBasic8,
  Prefix201,
  Input201,
  Actions,
  ButtonsButton22,
  ButtonsButton23,
  Divider2,
} from './styles';

const MenuGroupPage = () => {
  return (
    <MenuGroup className="box-magic-shadow">
      <Divider />
      <Collapse>
        <CollapseItem>
          <CollapseHead>
            <IconOutlinedDown>
              <Vector />
            </IconOutlinedDown>
            <Properties55>Properties</Properties55>
            <IconOutlinedMenu>
              <Vector1 />
            </IconOutlinedMenu>
          </CollapseHead>
          <Divider1 />
          <ViceriForm layout="vertical">
            <Input207>
              <InputBasic6>
                <Prefix198>Name:</Prefix198>
                <Input198>CustomerController</Input198>
              </InputBasic6>
            </Input207>
            <Dropdown5>
              <Prefix199>Type:</Prefix199>
              <Input199>CRUD</Input199>
              <InstanceComponenticonoutlineddir>
                <Vector2 />
              </InstanceComponenticonoutlineddir>
            </Dropdown5>
            <Input208>
              <InputBasic7>
                <Prefix200>EntityName:</Prefix200>
                <Input200>Customer</Input200>
              </InputBasic7>
            </Input208>
            <Input209>
              <InputBasic8>
                <Prefix201>RepositoryName:</Prefix201>
                <Input201>Null</Input201>
              </InputBasic8>
            </Input209>
            <Actions>
              <ButtonsButton22 type="primary">Save</ButtonsButton22>
              <ButtonsButton23>Cancel</ButtonsButton23>
            </Actions>
          </ViceriForm>
          <Divider2 />
        </CollapseItem>
      </Collapse>
    </MenuGroup>
  );
};

export default MenuGroupPage;
