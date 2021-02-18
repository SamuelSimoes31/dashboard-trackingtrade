import React from 'react';

import { StyledMenu, StyledSpan } from './styles';
import GraphIcon from '../../../images/graph.svg';
import { useMenuContext } from '../../../utils/menuContext';

const Menu = () => {
  const { open } = useMenuContext();
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
