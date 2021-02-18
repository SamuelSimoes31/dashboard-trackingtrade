import styled from 'styled-components';

interface StyledMenuProps {
  open: boolean;
}

export const StyledMenu = styled.div<StyledMenuProps>`
  z-index: 9;
  position: fixed;
  left: 51px;
  width: 228px;
  height:100vh;

  padding-top: 111px;

  display: flex;
  flex-direction: column;
  align-items:center;

  border-right: 1px solid #EBEBEB;
  background: ${({theme}) => theme.colors.background};

  ul {
    list-style-type: none;
    li {
      margin: 15px;
    }
  }

  transition: transform 0.3s linear;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
`;

export const StyledSpan = styled.span`
  font-size: 15px;
  line-height: 26px;

  color: ${props => props.theme.colors.primary};
`;
