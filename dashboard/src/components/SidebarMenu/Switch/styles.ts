import styled from 'styled-components';

export const Container = styled.label`
  z-index: 10;
  position: relative;
  top: 4px;
  left: 5.5px;
  display: inline-block;
  width: 40px;
  height: 20px;
  
  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  input:checked + span {
    background-color: ${({theme}) => theme.colors.primary};
  }

  input:focus + span {
    box-shadow: 0 0 1px ${({theme}) => theme.colors.primary};
  }

  input:checked + span:before {
    -webkit-transform: translateX(16px);
    -ms-transform: translateX(16px);
    transform: translateX(16px);
}

`;

export const Slider = styled.span`
  position: absolute;
  /* cursor: pointer; */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
  border-radius: 34px;

  &:before {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    left: 4px;
    bottom: 2px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 50%;
  }

`;
