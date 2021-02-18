import styled from 'styled-components';

interface StyledArrowProps {
  open: boolean;
}

export const StyledArrow = styled.div<StyledArrowProps>`
  z-index: 10;
  position: fixed;
  left: 272px;
  top: 78px;

  width: 15px;
  height: 15px;

  border-radius: 50%;
  background: ${({theme}) => theme.colors.primary};

  display: flex;
  justify-content: center;
  align-items: center;

  transition: all 0.3s linear;
  transform: ${({ open }) => open ? 'translateX(0) rotate(0)' : 'translateX(-1530%) rotate(180deg)'};
`;
