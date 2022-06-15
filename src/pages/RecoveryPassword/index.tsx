import React from 'react';

import { useNavigate } from 'react-router-dom';
import { Typography } from 'antd';
import GenericFormItem from '../../components/FormItem';
import GenericInput from '../../components/Input';

import {
  RecoveryPassword,
  Login3,
  Content7,
  Title2,
  Recoveringyourpassword,
  ViceriForm2,
  Actions4,
  ButtonsButton2,
  CreateaAccount2,
  Content8,
  Logo2,
  Vector14840549090882,
  Text3,
  TextComponentdid,
  Wererelievedtohearthat,
  Actions5,
  ButtonsButton14,
  Content9,
  Button3,
} from './styles';

const RecoveryPasswordPage = () => {
  let navigate = useNavigate();

  const navigateToLogin = () => {
    navigate('/login');
  };

  return (
    <RecoveryPassword>
      <Login3>
        <Content7>
          <Title2>
            <Recoveringyourpassword>
              Recovering your password
            </Recoveringyourpassword>
          </Title2>
          <ViceriForm2 onClick={navigateToLogin}>
            <GenericFormItem
              label={<Typography.Text ellipsis>E-mail</Typography.Text>}
              name="email"
            >
              <GenericInput placeholder="E-mail" />
            </GenericFormItem>
          </ViceriForm2>
          <Actions4>
            <ButtonsButton2 type="primary">Recovery</ButtonsButton2>
          </Actions4>
        </Content7>
      </Login3>
      <CreateaAccount2>
        <Content8>
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
            <ButtonsButton14>
              <Content9>
                <Button3>Login</Button3>
              </Content9>
            </ButtonsButton14>
          </Actions5>
        </Content8>
      </CreateaAccount2>
    </RecoveryPassword>
  );
};

export default RecoveryPasswordPage;
