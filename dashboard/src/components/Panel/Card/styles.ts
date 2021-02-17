import styled from 'styled-components';

interface ContainerProps {
  settings?: boolean;
  filter?: boolean;
}

export const Container = styled.div<ContainerProps>`
  position: relative;
  
  background: #FFFFFF;
  border: 0.5px solid #E4E4E4;
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

    background: #C4C4C4;
    border-radius: 100px;

    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;

    color: #333333;

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

    color: #333333;
    z-index: 10;
  }

`;

export const Title = styled.p`
  
  height: 13px;
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  color: #333333;
  margin-bottom: 2px;
`;

export const Subtitle = styled.p`
  height: 13px;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: #B0B0B0;
`;