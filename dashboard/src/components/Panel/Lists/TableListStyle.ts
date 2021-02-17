import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;

  p {
    color: #333333;
  }

`;

export const CollumFlex = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  /* margin: 0 10px; */

  &:first-child { /* Levar primeiro flex pra esquerda */
    flex-grow: 1;
    p {
      text-align: left;
    }
  }

  & > p:first-child{ /* títulos */
    font-weight: bold;
    font-size: 12px;
    line-height: 21px;
    border: none;
    text-transform: uppercase;
  }

  & > p { /* linhas de conteúdo */
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;
    text-align: center;
    

    border-bottom: 0.5px solid #EBEBEB;
    width: 100%;
  }
`;