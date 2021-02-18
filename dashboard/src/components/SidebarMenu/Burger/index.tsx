import React from 'react';
import { useMenuContext } from '../../../utils/menuContext';

import { StyledBurger } from './styles';

const Burger = () => {
  const { toggleOpen } = useMenuContext();
  return (
    <StyledBurger onClick={toggleOpen}>
      <div/>
      <div/>
      <div/>
    </StyledBurger>
  );
}

export default Burger;
