import React from 'react';

import { StyledMenu, StyledSpan } from './styles';
import GraphIcon from '../../../images/graph.svg'

const Menu = ({open} : {open:boolean}) => {
  return (
    <StyledMenu open={open}>
      <ul>
        <li>
          <img src={GraphIcon} alt='GraphIcon'/>
          <StyledSpan> Painel de Controle </StyledSpan>
        </li>
      </ul>
    </StyledMenu>
  );
}

export default Menu;
