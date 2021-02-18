import React from 'react';
import { useMenuContext } from '../../../utils/menuContext';
import { StyledArrow } from './styles';
import ArrowIcon from '../../../images/arrow.svg'

const Arrow = () => {
  const { open } = useMenuContext();

  return (
    <StyledArrow open={open}>
      <img src={ArrowIcon} alt=""/>
    </StyledArrow>
  );
}

export default Arrow;
