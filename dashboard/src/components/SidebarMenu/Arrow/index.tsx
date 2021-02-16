import React from 'react';

import { StyledArrow } from './styles';
import ArrowIcon from '../../../images/arrow.svg'

const Arrow = () => {
  return (
    <StyledArrow>
      <img src={ArrowIcon} alt=""/>
    </StyledArrow>
  );
}

export default Arrow;
