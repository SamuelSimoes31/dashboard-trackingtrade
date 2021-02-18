import React from 'react';
import { Container, Bar } from './styles';

import Burger from './Burger';
import Menu from './Menu';
import Arrow from './Arrow';
import Switch from './Switch';

interface SidebarMenuProps {
  toggleTheme(): void;
}

const SidebarMenu = ( {toggleTheme} :SidebarMenuProps) => {
  return (
    <Container>
      <Bar />
      <Burger />
      <Menu />
      <Arrow />
      <Switch onChange={toggleTheme}/>
    </Container>
    
  );
}

export default SidebarMenu;
