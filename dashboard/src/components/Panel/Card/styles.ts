import styled from 'styled-components';

export const Container = styled.div`
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