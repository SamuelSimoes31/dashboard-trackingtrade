import styled from 'styled-components';

export const StyledArrow = styled.div`
  position: fixed;
  left: 272px;
  top: 78px;

  width: 15px;
  height: 15px;

  border-radius: 50%;
  background: ${props => props.theme.colors.primary};

  display: flex;
  justify-content: center;
  align-items: center;
`;
