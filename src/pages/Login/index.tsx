import React from 'react';

import GenericFormItem from '../../components/FormItem' 
import { Typography } from 'antd';
import GenericInput from '../../components/Input' 
import GenericInputPassword from '../../components/InputPassword' 
import GenericCodeButton from '../../components/Button' 


import {
Login3,
Login4,
Content,
Title,
Welcomeback,
ViceriForm,
Actions,
Login,
CreateaAccount,
Content1,
Logo,
Vector1484054909088,
Text1,
Comecreatethefuture,
TextComponentjoin,
Actions1,
Create,
} from './styles';

const LoginPage = () => {









return (
        <Login3    >
  <Login4    >
    <Content    >
      <Title    >
        <Welcomeback >
          Welcome back!
        </Welcomeback>
      </Title>
      <ViceriForm  layout='vertical'  >
        <GenericFormItem
        label={<Typography.Text ellipsis>E-mail</Typography.Text>}
        name='email'
        >
          <GenericInput
        placeholder='E-mail'
          />
        </GenericFormItem>
        <GenericFormItem
        label={<Typography.Text ellipsis>Password</Typography.Text>}
        name='password'
        >
          <GenericInputPassword
        placeholder='Password'
          />
        </GenericFormItem>
      </ViceriForm>
      <Actions    >
        <GenericCodeButton  
          type='link'
          >
            Recovery Password
        </GenericCodeButton>
        <Login  
          type='primary'
          >
            Login
        </Login>
      </Actions>
    </Content>
  </Login4>
  <CreateaAccount    >
    <Content1    >
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
        <Create  
          type='primary'
          >
            Create
        </Create>
      </Actions1>
    </Content1>
  </CreateaAccount>
</Login3>

    )

}

export default LoginPage
