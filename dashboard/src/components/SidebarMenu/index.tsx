import React, { useContext } from 'react';
import { Container, Bar } from './styles';
import { ThemeContext } from 'styled-components';
import { useMenuContext } from '../../utils/menuContext';

import Burger from './Burger';
import Menu from './Menu';
import Arrow from './Arrow';
import Switch from './Switch';

interface SidebarMenuProps {
  toggleTheme(): void;
}

const SidebarMenu = ( {toggleTheme} :SidebarMenuProps) => {
  const { open } = useMenuContext();

  const { title } = useContext(ThemeContext);

  return (
    <Container open={open} >
      <Menu/>
      <Bar />
      <Burger />
      <Arrow/>
      <Switch onChange={toggleTheme} initialState={title==='dark'}/>
    </Container>
    
  );
}

export default SidebarMenu;
