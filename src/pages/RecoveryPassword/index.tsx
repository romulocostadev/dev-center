import React from 'react';

import { Typography } from 'antd';
import GenericFormItem from '../../components/FormItem';
import GenericInput from '../../components/Input';

import {
  RecoveryPassword,
  Login6,
  Content4,
  Title2,
  Recoveringyourpassword,
  ViceriForm2,
  Actions4,
  Recovery,
  CreateaAccount2,
  Content5,
  Logo2,
  Vector14840549090882,
  Text3,
  TextComponentdid,
  Wererelievedtohearthat,
  Actions5,
  Login2,
} from './styles';

const RecoveryPasswordPage = () => {
  return (
    <RecoveryPassword>
      <Login6>
        <Content4>
          <Title2>
            <Recoveringyourpassword>
              Recovering your password
            </Recoveringyourpassword>
          </Title2>
          <ViceriForm2>
            <GenericFormItem
              label={<Typography.Text ellipsis>E-mail</Typography.Text>}
              name="email"
            >
              <GenericInput placeholder="E-mail" />
            </GenericFormItem>
          </ViceriForm2>
          <Actions4>
            <Recovery type="primary">Recovery</Recovery>
          </Actions4>
        </Content4>
      </Login6>
      <CreateaAccount2>
        <Content5>
          <Logo2>
            <Vector14840549090882 />
          </Logo2>
          <Text3>
            <TextComponentdid>Did you remember your password?</TextComponentdid>
            <Wererelievedtohearthat>
              We're relieved to hear that.
            </Wererelievedtohearthat>
          </Text3>
          <Actions5>
            <Login2 type="primary">Login</Login2>
          </Actions5>
        </Content5>
      </CreateaAccount2>
    </RecoveryPassword>
  );
};

export default RecoveryPasswordPage;
