import { InputProps } from 'antd';
import { GenericInputStyle } from './styles';

const GenericInput = ({ ...props }: InputProps) => {
  return <GenericInputStyle {...props} />;
};

export default GenericInput;
