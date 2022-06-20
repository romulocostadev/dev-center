import React from 'react';

import {
  MenuGroup1,
  Divider3,
  Collapse1,
  CollapseItem1,
  CollapseHead1,
  IconOutlinedDown1,
  Vector3,
  Properties56,
  IconOutlinedMenu1,
  Vector4,
  Divider4,
  ViceriForm1,
  Input210,
  InputBasic9,
  Prefix202,
  Input202,
  Dropdown6,
  Prefix203,
  Input203,
  InstanceComponenticonoutlineddir1,
  Vector5,
  Input211,
  InputBasic10,
  Prefix204,
  Input204,
  Dropdown7,
  Prefix205,
  Input205,
  InstanceComponenticonoutlineddir2,
  Vector6,
  Input212,
  InputBasic11,
  Prefix206,
  Input206,
  Actions1,
  Save,
  Cancel,
  Divider5,
} from './styles';

const MenuGroupPage2 = () => {
  return (
    <MenuGroup1 className="box-magic-shadow">
      <Divider3 />
      <Collapse1>
        <CollapseItem1>
          <CollapseHead1>
            <IconOutlinedDown1>
              <Vector3 />
            </IconOutlinedDown1>
            <Properties56>Properties</Properties56>
            <IconOutlinedMenu1>
              <Vector4 />
            </IconOutlinedMenu1>
          </CollapseHead1>
          <Divider4 />
          <ViceriForm1>
            <Input210>
              <InputBasic9>
                <Prefix202>Name:</Prefix202>
                <Input202>RequiredFields</Input202>
              </InputBasic9>
            </Input210>
            <Dropdown6>
              <Prefix203>Type:</Prefix203>
              <Input203>PropertyValidation</Input203>
              <InstanceComponenticonoutlineddir1>
                <Vector5 />
              </InstanceComponenticonoutlineddir1>
            </Dropdown6>
            <Input211>
              <InputBasic10>
                <Prefix204>Order:</Prefix204>
                <Input204>01</Input204>
              </InputBasic10>
            </Input211>
            <Dropdown7>
              <Prefix205>ExecValidationName:</Prefix205>
              <Input205>Null</Input205>
              <InstanceComponenticonoutlineddir2>
                <Vector6 />
              </InstanceComponenticonoutlineddir2>
            </Dropdown7>
            <Input212>
              <InputBasic11>
                <Prefix206>ConditionalValidationName:</Prefix206>
                <Input206>Null</Input206>
              </InputBasic11>
            </Input212>
          </ViceriForm1>
          <Actions1>
            <Save type="primary">Save</Save>
            <Cancel type="default">Cancel</Cancel>
          </Actions1>
          <Divider5 />
        </CollapseItem1>
      </Collapse1>
    </MenuGroup1>
  );
};

export default MenuGroupPage2;
