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

    color: ${({theme}) => theme.colors.text_primary};
  }
`;

export const GridPanel = styled.div`
  display: grid;
  justify-content: center;
  grid-template: 
    "hist       hist          plan-vision" 275px
    "insp       plan-day      plan-updt"   275px
    "insp-sche  insp-sche     plan-updt"   350px
    / minmax(320px, 1fr) minmax(320px, 1fr) minmax(320px, 1fr);

  gap: 15px;


  @media(max-width: 1325px) {
    grid-template: 
    "hist       plan-vision" 275px
    "insp       plan-day"    275px
    "plan-updt  plan-updt"   350px
    "insp-sche  insp-sche"   350px
    / minmax(320px, 1fr)       minmax(320px, 1fr);
  }

  @media(max-width: 990px) {
    grid-template: 
    "hist"        275px
    "plan-vision" 275px
    "insp"        275px
    "plan-day"    275px
    "plan-updt"   350px
    "insp-sche"   350px
    / minmax(320px, 1fr);
  }

  .CardContainer:nth-child(1){
    grid-area: hist;
  }

  .CardContainer:nth-child(2){
    grid-area: plan-vision;
  }

  .CardContainer:nth-child(3){
    grid-area: insp;
  }

  .CardContainer:nth-child(4){
    grid-area: plan-day;
  }

  .CardContainer:nth-child(5){
    grid-area: plan-updt;
  }

  .CardContainer:nth-child(6){
    grid-area: insp-sche;
  }
`;