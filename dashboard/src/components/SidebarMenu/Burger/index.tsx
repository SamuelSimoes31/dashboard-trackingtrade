import React from 'react';

import { StyledBurger } from './styles';

interface Props {
  toggleOpen(): void;
}

const Burger = ({toggleOpen}:Props) => {
  return (
    <StyledBurger onClick={toggleOpen}>
      <div/>
      <div/>
      <div/>
    </StyledBurger>
  );
}

export default Burger;
