import React from 'react';
import { useLocation } from 'react-router-dom';
import { menuConfigList, menuList } from '../../../utils/constants';

import MenuItem from '../MenuItem';

import { LayoutSider, MenuGroup, FirstSection, SecondSection } from './styles';

const LayoutSiderPage = () => {
  let activeMenu = '';

  const path = useLocation();

  if (path.pathname.includes('design')) {
    activeMenu = 'design';
  }
  if (path.pathname.includes('workflow')) {
    activeMenu = 'workflow';
  }
  if (path.pathname.includes('data')) {
    activeMenu = 'data';
  }
  if (path.pathname.includes('plugins')) {
    activeMenu = 'plugins';
  }
  if (path.pathname.includes('settings')) {
    activeMenu = 'plugins';
  }
  if (path.pathname.includes('plugins')) {
    activeMenu = 'plugins';
  }

  return (
    <LayoutSider>
      <MenuGroup>
        <FirstSection>
          {menuList.map(menuListItem => {
            return (
              <MenuItem label={menuListItem.label} pathActive={activeMenu} />
            );
          })}
        </FirstSection>
        <SecondSection>
          {menuConfigList.map(menuListItem => {
            return (
              <MenuItem label={menuListItem.label} pathActive={activeMenu} />
            );
          })}
        </SecondSection>
      </MenuGroup>
    </LayoutSider>
  );
};

export default LayoutSiderPage;
