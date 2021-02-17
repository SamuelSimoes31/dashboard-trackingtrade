import React from 'react';

import { Table } from './TableListStyle';

interface TableListProps {
  labels: string[];
  data: { [label:string] : string | number }[];
}

const TableList = ({labels,data}: TableListProps) => {
  return (
    <Table>
      <colgroup>
        <col />
        <col span={labels.length-1}/>
      </colgroup>
      <tr>
        {labels.map( label => <th key={label}>{label}</th>)}
      </tr>
      {
        data.map((elem,i) => (
          <tr key={elem.id}>
            {
              labels.map((label,i) => (
                <td key={i}>{elem[label]}</td>
              ))
            }
          </tr>
        ))
      }
    </Table>
  );

}

/*

*/

export default TableList;
