import { ButtonProps } from 'antd';
import { GenericButtonStyle } from './styles';

const GenericButton = ({ ...props }: ButtonProps) => {
  return <GenericButtonStyle {...props} />;
};

export default GenericButton;