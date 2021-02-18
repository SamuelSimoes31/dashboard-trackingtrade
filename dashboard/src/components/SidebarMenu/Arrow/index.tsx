import React from 'react';

import { StyledArrow } from './styles';
import ArrowIcon from '../../../images/arrow.svg'

const Arrow = ({open} : {open:boolean}) => {
  return (
    <StyledArrow open={open}>
      <img src={ArrowIcon} alt=""/>
    </StyledArrow>
  );
}

export default Arrow;
