import React from 'react';

import {
  ModalNewEntity,
  Frame25,
  Newentity4,
  ButtonsButton25,
  Content,
  IconOutlinedClose,
  Vector,
  Divider,
  Frame26,
  Frame32,
  InputBasic5,
  SelectInput,
  SelectInputOption,
  Frame31,
  IconFilledInfoCircle,
  Vector1,
  TextComponentadditional18,
  Divider1,
  Frame30,
  ButtonsButton21,
} from './styles';

const data = [
  { id: '0', descricao: 'teste' },
  { id: '1', descricao: 'teste2' },
];
const ModalNewEntityPage = () => {
  return (
    <ModalNewEntity className="box-magic-shadow">
      <Frame25>
        <Newentity4>New entity</Newentity4>
        <ButtonsButton25>
          <Content>
            <IconOutlinedClose>
              <Vector />
            </IconOutlinedClose>
          </Content>
        </ButtonsButton25>
      </Frame25>
      <Divider />
      <Frame26>
        <Frame32>
          <InputBasic5 placeholder="I need a nice name" />
          <SelectInput allowClear placeholder="Persisted">
            {data.map(option => (
              <SelectInputOption key={option.id} value={option.id}>
                {option.descricao}
              </SelectInputOption>
            ))}
          </SelectInput>
        </Frame32>
        <Frame31>
          <IconFilledInfoCircle>
            <Vector1 />
          </IconFilledInfoCircle>
          <TextComponentadditional18>
            Additional information may be added later.
          </TextComponentadditional18>
        </Frame31>
      </Frame26>
      <Divider1 />
      <Frame30>
        <ButtonsButton21 type="primary">Create</ButtonsButton21>
      </Frame30>
    </ModalNewEntity>
  );
};

export default ModalNewEntityPage;
