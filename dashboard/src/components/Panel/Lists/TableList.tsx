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
      <thead>
        <tr>
          {labels.map( label => <th key={label}>{label}</th>)}
        </tr>
      </thead>
      <tbody>
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
      </tbody>
    </Table>
  );

}

/*

*/

export default TableList;
