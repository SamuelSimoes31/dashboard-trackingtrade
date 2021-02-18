import styled from 'styled-components';

interface ContainerProps {
  open: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: inline-block;
  position: relative;
  /* width: 279px; */
  width: ${({open})=> open?279:51}px;
  transition: width 0.3s linear;
  height: 100vh;
  margin: 0;  
`;

export const Bar = styled.nav`
  z-index: 9;
  position: fixed;
  width: 51px;
  height: 100vh;
  left: 0px;
  top: 0px;

  background: linear-gradient(180deg, #0DB2D6 8.12%, #4FDA91 71.62%);
`;


