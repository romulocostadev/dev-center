import React from 'react';

import {useNavigate} from 'react-router-dom';
import GenericFormItem from '../../components/FormItem' 
import { Typography } from 'antd';
import GenericInput from '../../components/Input' 


import {
CreateAccount,
Login2,
Content4,
Title1,
TextComponentcreating,
ViceriForm1,
Actions2,
ButtonsButton1,
CreateaAccount1,
Content5,
Logo1,
Vector14840549090881,
Text2,
Alreadyhaveanaccount,
Wearewaitingforyou,
Actions3,
ButtonsButton13,
Content6,
Button2,
} from './styles';

const CreateAccountPage = () => {




let navigate = useNavigate()

const navigateToLogin = () => {navigate('/login')};




return (
        <CreateAccount    >
  <Login2    >
    <Content4    >
      <Title1    >
        <TextComponentcreating >
          Creating an account to the future!
        </TextComponentcreating>
      </Title1>
      <ViceriForm1   onClick = {navigateToLogin} >
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
        <GenericFormItem
        label={<Typography.Text ellipsis>E-mail</Typography.Text>}
        name='email'
        >
          <GenericInput
        placeholder='E-mail'
          />
        </GenericFormItem>
      </ViceriForm1>
      <Actions2    >
        <ButtonsButton1  
          type='primary'
          >
            Create
        </ButtonsButton1>
      </Actions2>
    </Content4>
  </Login2>
  <CreateaAccount1    >
    <Content5    >
      <Logo1    >
        <Vector14840549090881    >
        </Vector14840549090881>
      </Logo1>
      <Text2    >
        <Alreadyhaveanaccount >
          Already have an account?
        </Alreadyhaveanaccount>
        <Wearewaitingforyou >
          We are waiting for you.
        </Wearewaitingforyou>
      </Text2>
      <Actions3    >
        <ButtonsButton13    >
          <Content6    >
            <Button2 >
              Login
            </Button2>
          </Content6>
        </ButtonsButton13>
      </Actions3>
    </Content5>
  </CreateaAccount1>
</CreateAccount>

    )

}

export default CreateAccountPage
