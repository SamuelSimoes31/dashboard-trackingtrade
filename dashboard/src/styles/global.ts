import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #FAFAFA;
    font-family: Poppins;
    -webkit-font-smoothing: antialiased !important;
  }

  body html #root {
    height: 100%;
  }

  .App {
    display: flex;
    flex-direction: row;
  }

`;