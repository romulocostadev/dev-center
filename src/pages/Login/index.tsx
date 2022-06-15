import React from 'react';

import {useNavigate} from 'react-router-dom';
import GenericFormItem from '../../components/FormItem' 
import { Typography } from 'antd';
import GenericInput from '../../components/Input' 


import {
Login,
Login1,
Content,
Title,
Welcomeback,
ViceriForm,
Actions,
ButtonsButton11,
Content1,
Button,
ButtonsButton,
CreateaAccount,
Content2,
Logo,
Vector1484054909088,
Text1,
Comecreatethefuture,
TextComponentjoin,
Actions1,
ButtonsButton12,
Content3,
Button1,
} from './styles';

const LoginPage = () => {




let navigate = useNavigate()

const navigateToLogin = () => {navigate('/login')};




return (
        <Login    >
  <Login1    >
    <Content    >
      <Title    >
        <Welcomeback >
          Welcome back!
        </Welcomeback>
      </Title>
      <ViceriForm  layout='vertical' onClick = {navigateToLogin} >
        <GenericFormItem
        label={<Typography.Text ellipsis>E-mail</Typography.Text>}
        name='email'
        >
          <GenericInput
        placeholder='E-mail'
          />
        </GenericFormItem>
        <GenericFormItem
        label={<Typography.Text ellipsis>E-mail</Typography.Text>}
        name='email'
        >
          <GenericInput
        placeholder='E-mail'
          />
        </GenericFormItem>
      </ViceriForm>
      <Actions    >
        <ButtonsButton11    >
          <Content1    >
            <Button >
              Recovery Password
            </Button>
          </Content1>
        </ButtonsButton11>
        <ButtonsButton  
          type='primary'
          >
            Login
        </ButtonsButton>
      </Actions>
    </Content>
  </Login1>
  <CreateaAccount    >
    <Content2    >
      <Logo    >
        <Vector1484054909088    >
        </Vector1484054909088>
      </Logo>
      <Text1    >
        <Comecreatethefuture >
          Come create the future!
        </Comecreatethefuture>
        <TextComponentjoin >
          Join us creating your account.
        </TextComponentjoin>
      </Text1>
      <Actions1    >
        <ButtonsButton12    >
          <Content3    >
            <Button1 >
              Create
            </Button1>
          </Content3>
        </ButtonsButton12>
      </Actions1>
    </Content2>
  </CreateaAccount>
</Login>

    )

}

export default LoginPage
