import styled from 'styled-components';

export const CardHeader = styled.div`
  height: 30px;
`;

export const ChildrenWrapper = styled.div`
  position: relative;
  
  height: calc(100% - 30px);
  /* border: 1px solid cyan; */
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  
  background: ${({theme}) => theme.colors.card_background};
  border: 0.5px solid ${({theme}) => theme.colors.card_border};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
  border-radius: 5px;

  padding: 14px;

  img {
    position: absolute;
    top: 10px;
    right: 10px;
  }

  select {
    position: absolute;
    width: 40%;
    height: 28px;
    top: 10px;
    right: 40px;

    background: ${({theme}) => theme.colors.select_background};
    border-radius: 100px;

    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;

    color: ${({theme}) => theme.colors.text_primary};

    padding: 0 10px;
    outline: none;
    border: none;
  }

  .details {
    position: absolute;

    bottom: 3px;
    left: 25px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;

    color: ${({theme}) => theme.colors.text_primary};
    z-index: 10;
  }

`;

export const Title = styled.p`
  
  height: 13px;
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  color: ${({theme}) => theme.colors.text_primary};
  margin-bottom: 2px;
`;

export const Subtitle = styled.p`
  height: 13px;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: ${({theme}) => theme.colors.text_secundary};
`;