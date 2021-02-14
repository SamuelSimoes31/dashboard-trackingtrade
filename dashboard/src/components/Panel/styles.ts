import styled from 'styled-components';

export const Container = styled.div`
  flex-grow: 1;
  position: relative;
  
  padding: 20px;

  height: 100%;
  margin: 0;

  h1 {
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 25px;
    line-height: 26px;

    margin: 20px 10px;

    color: #333333;
  }
`;

export const GridPanel = styled.div`
  display: grid;

  /* grid-template: 
    "hist       hist        plan-vision"  1fr
    "insp       plan-day    plan-updt"    1fr
    "insp-sche  insp-sche   plan-updt"    1fr
    / minmax(320px, 1fr)       minmax(320px, 1fr)         minmax(320px, 1fr);
  gap: 15px; */
  
  grid-template: 
    "hist       hist        plan-vision"  1fr
    "insp       plan-day    plan-updt"    1fr
    "insp-sche  insp-sche   plan-updt"    1fr
    / 320px       320px         320px;
  gap: 15px;
  justify-content: center;

  div:nth-child(1){
    grid-area: hist;
  }

  &:nth-child(2){
    grid-area: plan-vision;
  }

  div:nth-child(3){
    grid-area: insp;
  }

  div:nth-child(4){
    grid-area: plan-day;
  }

  div:nth-child(5){
    grid-area: plan-updt;
  }

  div:nth-child(6){
    grid-area: insp-sche;
  }
`;