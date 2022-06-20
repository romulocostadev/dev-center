import React from 'react';

import { Typography } from 'antd';
import GenericFormItem from '../../components/FormItem';
import GenericInput from '../../components/Input';
import GenericInputPassword from '../../components/InputPassword';

import {
  CreateAccount,
  Login5,
  Content2,
  Title1,
  TextComponentcreating,
  ViceriForm1,
  Actions2,
  Create1,
  CreateaAccount1,
  Content3,
  Logo1,
  Vector14840549090881,
  Text2,
  Alreadyhaveanaccount,
  Wearewaitingforyou,
  Actions3,
  Login1,
} from './styles';

const CreateAccountPage = () => {
  return (
    <CreateAccount>
      <Login5>
        <Content2>
          <Title1>
            <TextComponentcreating>
              Creating an account to the future!
            </TextComponentcreating>
          </Title1>
          <ViceriForm1>
            <GenericFormItem
              label={<Typography.Text ellipsis>E-mail</Typography.Text>}
              name="email"
            >
              <GenericInput placeholder="E-mail" />
            </GenericFormItem>
            <GenericFormItem
              label={<Typography.Text ellipsis>Password</Typography.Text>}
              name="password"
            >
              <GenericInputPassword placeholder="Password" />
            </GenericFormItem>
            <GenericFormItem
              label={
                <Typography.Text ellipsis>Confirm password</Typography.Text>
              }
              name="confirmPassword"
            >
              <GenericInputPassword placeholder="Confirm password" />
            </GenericFormItem>
          </ViceriForm1>
          <Actions2>
            <Create1 type="primary">Create</Create1>
          </Actions2>
        </Content2>
      </Login5>
      <CreateaAccount1>
        <Content3>
          <Logo1>
            <Vector14840549090881 />
          </Logo1>
          <Text2>
            <Alreadyhaveanaccount>
              Already have an account?
            </Alreadyhaveanaccount>
            <Wearewaitingforyou>We are waiting for you.</Wearewaitingforyou>
          </Text2>
          <Actions3>
            <Login1 type="primary">Login</Login1>
          </Actions3>
        </Content3>
      </CreateaAccount1>
    </CreateAccount>
  );
};

export default CreateAccountPage;
