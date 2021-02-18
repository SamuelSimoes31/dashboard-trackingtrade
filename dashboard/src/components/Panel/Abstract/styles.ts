import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  width: 130px;
  bottom: 30px;
  right: 10px;
  

  & > p {
    font-style: normal;
    font-weight: normal;
    font-size: 11px;
    line-height: 15px;
    color: ${({theme}) => theme.colors.text_secundary};
  }

  div{
    display: flex;
    justify-content: space-between;
    p {
      font-style: normal;
      font-weight: 300;
      font-size: 11px;
      line-height: 17px;

      color: ${({theme}) => theme.colors.text_legend};
    }
  }
`;