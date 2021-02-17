import React from 'react';

import { Container, CollumFlex } from './TableListStyle';

interface TableListProps {
  labels: string[];
  data: { [label:string] : string | number }[];
}

const TableList = ({labels,data}: TableListProps) => {
  return (
    <Container>
      {labels.map(label => (
        <CollumFlex key={label}>
          <p>{label}</p>
            {/* <RowFlex> */}
              {
                data.map((elem,i) => (
                  <p key={i}>{elem[label]}</p>
                ))
              }
            {/* </RowFlex> */}
        </CollumFlex>
      ))}
    </Container>
  );
}

/*

*/

export default TableList;
