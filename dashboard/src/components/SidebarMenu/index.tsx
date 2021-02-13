import React from 'react';
import { Container, Bar } from './styles';

import Burger from './Burger';
import Menu from './Menu';
import Arrow from './Arrow';

const SidebarMenu: React.FC = () => {
  return (
    <Container>
      <Bar />
      <Burger />
      <Menu />
      <Arrow />
    </Container>
    
  );
}

export default SidebarMenu;
