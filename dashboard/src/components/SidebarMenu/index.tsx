import React from 'react';
import { Bar } from './styles';

import Burger from './Burger';
import Menu from './Menu';
import Arrow from './Arrow';

const SidebarMenu: React.FC = () => {
  return (
    <Bar>
      <Burger />
      <Menu />
      <Arrow />
    </Bar>
  );
}

export default SidebarMenu;
