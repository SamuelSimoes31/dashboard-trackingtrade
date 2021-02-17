import styled from 'styled-components';

export const Table = styled.table`
  color: #333333;
  width: 100%;

  colgroup {
    col:first-child {
      width:60%;
    }
    col:last-child {
      
    }
  }

  th:first-child, td:first-child {
    text-align: left;
  }

  tr {
    line-height: 25px;
  }

  th {
    font-weight: bold;
    font-size: 10px;
    text-transform: uppercase;
    white-space: nowrap;
    padding: 0 2px;
  }

  td {
    font-weight: normal;
    font-size: 12px;
    text-align: center;
    /* white-space: nowrap; */
    border-bottom: 0.5px solid #EBEBEB;
  }

`;