import { ButtonProps } from 'antd';
import { GenericButtonWithLoadingStyle } from './styles';

const GenericButtonWithLoading = ({ ...props }: ButtonProps) => {
  return <GenericButtonWithLoadingStyle {...props} />;
};

export default GenericButtonWithLoading;
