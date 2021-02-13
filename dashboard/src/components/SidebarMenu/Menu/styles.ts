import styled from 'styled-components';

export const StyledMenu = styled.div`
  position: absolute;
  left: 51px;
  width: 228px;
  height:100vh;
  border-right: 1px solid #EBEBEB;

  padding-top: 111px;

  display: flex;
  flex-direction: column;
  align-items:center;

  ul {
    
    list-style-type: none;

    li {
      margin: 15px;
    }
  }

`;

export const StyledSpan = styled.span`
  font-size: 15px;
  line-height: 26px;

  color: #0794B2;
`;
