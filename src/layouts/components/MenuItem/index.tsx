import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Label,
  ProjectOutlinedIcon,
  MenuItemAnt,
  OutlinedPartitionIcon,
  DatabaseOutlinedIcon,
  ApiOutlinedIcon,
  QuestionCircleOutlinedIcon,
  SettingOutlinedIcon,
} from './styles';

interface MenuItemProps {
  label: string;
  pathActive: string;
}

const MenuItem = ({ label, pathActive }: MenuItemProps) => {
  let navigate = useNavigate();
  const { pathname } = useLocation();
  const pathParts = pathname.split('/');

  const handleIcon = (hasActive: boolean) => {
    switch (label) {
      case 'Design':
        return (
          <ProjectOutlinedIcon
            style={{ color: hasActive ? '#7346F8' : 'black' }}
          />
        );
        break;
      case 'Workflow':
        return (
          <OutlinedPartitionIcon
            style={{ color: hasActive ? '#7346F8' : 'black' }}
          />
        );
        break;
      case 'Data':
        return (
          <DatabaseOutlinedIcon
            style={{ color: hasActive ? '#7346F8' : 'black' }}
          />
        );
        break;
      case 'Plugins':
        return (
          <ApiOutlinedIcon style={{ color: hasActive ? '#7346F8' : 'black' }} />
        );
        break;
      case 'Settings':
        return (
          <SettingOutlinedIcon
            style={{ color: hasActive ? '#7346F8' : 'black' }}
          />
        );
        break;
      case 'Helper':
        return (
          <QuestionCircleOutlinedIcon
            style={{ color: hasActive ? '#7346F8' : 'black' }}
          />
        );
        break;
      default:
        return <></>;
        break;
    }
  };

  const hasActive = label.toLowerCase() === pathActive;

  const handleNavigate = () => {
    switch (label) {
      case 'Settings':
        navigate('/settings');
        break;

      case 'Helper':
        navigate('/help');
        break;

      default:
        navigate(`/${pathParts[1]}/${pathParts[2]}/${label.toLowerCase()}`);
        break;
    }
  };

  return (
    <MenuItemAnt active={hasActive} onClick={handleNavigate}>
      {handleIcon(hasActive)}
      <Label active={hasActive}>{label}</Label>
    </MenuItemAnt>
  );
};

export default MenuItem;
