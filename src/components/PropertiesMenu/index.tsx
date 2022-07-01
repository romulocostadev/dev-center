import { render } from '@testing-library/react';
import { Checkbox, Form, FormListFieldData } from 'antd';
import { Footer } from 'antd/lib/layout/layout';
import React, { useCallback, useEffect, useState } from 'react';
import { useAppSelector } from '../../store/reduxHooks';

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
  FormItem,
  Input,
  Select,
} from './styles';

const PropertiesMenu = () => {
  const activeWorkSpace = useAppSelector(
    state => state.solutions.activeWorkSpace,
  );

  const [formInitial, setFormInitial] = useState({});

  const [form] = Form.useForm();

  useEffect(() => {
    if (activeWorkSpace.properties) {
      activeWorkSpace.properties.forEach((data2): any => {
        form.setFieldsValue({
          [data2.propertyName as string]: data2.propertyValue,
        });
      });
    }
  }, [activeWorkSpace.properties, form]);

  const renderFormItem = (data: any) => {
    if (data?.visible) {
      switch (data.formType) {
        case 'input':
          return (
            <Input211>
              <InputBasic10>
                <FormItem
                  label={data.displayPropertyName}
                  name={data.propertyName}
                >
                  <Input bordered={false} readOnly={data.readonly} />
                </FormItem>
              </InputBasic10>
            </Input211>
          );
          break;
        case 'checkbox':
          return (
            <Input211>
              <InputBasic10>
                <FormItem
                  label={data.displayPropertyName}
                  name={data.propertyName}
                  valuePropName="checked"
                >
                  <Checkbox />
                </FormItem>
              </InputBasic10>
            </Input211>
          );
          break;
        case 'select':
          return (
            <Input211>
              <InputBasic10>
                <FormItem
                  label={data.displayPropertyName}
                  name={data.propertyName}
                >
                  <Select>
                    {/* <Select.Option value={prop}>{prop}</Select.Option>; */}
                  </Select>
                </FormItem>
              </InputBasic10>
            </Input211>
          );
          break;

        default:
          break;
      }
    }
  };

  const renderColumns = () => {
    const datakairo = [];

    const foo2 = activeWorkSpace?.properties?.find(
      a => a.propertyName === 'properties',
    );

    activeWorkSpace?.properties
      ?.find((a: any) => a.propertyName === 'properties')
      ?.propertyValue.map(property => {
        return datakairo.push(property);
      });

    // ?.propertyValue.map(foo => {
    //   return renderFormItem(foo.propertyValue);
    // })
  };

  return (
    <MenuGroup1 className="box-magic-shadow">
      <Collapse1>
        <CollapseItem1>
          <CollapseHead1>
            <Properties56>Properties</Properties56>
            <IconOutlinedMenu1>
              <Vector4 />
            </IconOutlinedMenu1>
          </CollapseHead1>
          {activeWorkSpace?.properties && (
            <ViceriForm1 form={form} initialValues={formInitial}>
              {/* {activeWorkSpace.properties &&
              Object.entries(activeWorkSpace.properties).map((key): any => {
                return (
                  <Input210>
                    <InputBasic9>
                      <Prefix202>{key[0]}</Prefix202>
                      <Input202>{key[1]}</Input202>
                    </InputBasic9>
                  </Input210>
                );
              })} */}
              {activeWorkSpace?.properties?.map(foo => {
                return renderFormItem(foo);
              })}
              {renderColumns()}
              <Actions1>
                <Cancel type="default">Cancel</Cancel>
                <Save htmlType="submit" type="primary">
                  Save
                </Save>
              </Actions1>
            </ViceriForm1>
          )}
        </CollapseItem1>
      </Collapse1>
    </MenuGroup1>
  );
};

export default PropertiesMenu;
