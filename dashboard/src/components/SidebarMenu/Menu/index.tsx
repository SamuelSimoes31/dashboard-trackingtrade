import React from 'react';

import { StyledMenu, StyledSpan } from './styles';
import GraphIcon from '../../../images/graph.svg'

const Menu :React.FC = () => {
  return (
    <StyledMenu>
      <ul>
        <li>
          <img src={GraphIcon} alt='GraphIcon'/>
          <StyledSpan> Painel de Controle </StyledSpan>
        </li>
        <li>
          <img src={GraphIcon} alt='GraphIcon'/>
          <StyledSpan> Painel de Controle </StyledSpan>
        </li>
        <li>
          <img src={GraphIcon} alt='GraphIcon'/>
          <StyledSpan> Painel de Controle </StyledSpan>
        </li>
        <li>
          <img src={GraphIcon} alt='GraphIcon'/>
          <StyledSpan> Painel de Controle </StyledSpan>
        </li>
      </ul>
    </StyledMenu>
  );
}

export default Menu;
