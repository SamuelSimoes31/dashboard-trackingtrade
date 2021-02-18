import styled from 'styled-components';

export const StyledBurger = styled.button`
  position: fixed;
  width: 61px;
  height: 61px;
  left: -5px;
  top: 136px;
  border-radius: 50%;

  background: ${({theme}) => theme.colors.background};
  border-style: none;
  outline-style: none;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div {
    width: 20px;
    height: 2px;
    margin: 1.5px;
    background: ${({theme}) => theme.colors.text_primary};
    border-radius: 10px;
  }
`;