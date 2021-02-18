import React from 'react';
import { Container, Bar } from './styles';

import Burger from './Burger';
import Menu from './Menu';
import Arrow from './Arrow';
import Switch from './Switch';

const SidebarMenu = () => {
  return (
    <Container>
      <Bar />
      <Burger />
      <Menu />
      <Arrow />
      <Switch />
    </Container>
    
  );
}

export default SidebarMenu;
