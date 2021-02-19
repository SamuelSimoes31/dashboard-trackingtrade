import React, {useState, useMemo} from 'react';

import { Table, Scroll } from './TableListStyle';
import SearchBar from './SearchBar';

interface TableListProps {
  labels: string[];
  data: { [label:string] : string | number }[];
}

const TableList = ({labels,data}: TableListProps) => {
  const [query, setQuery] = useState('sousa');

  const list = useMemo(() => {
    return data.filter(e => e[labels[0]].toString().toLowerCase().includes(query));
  },[data, labels, query])

  return (
    <>
      <SearchBar setSearch={setQuery}/>
      <Scroll>
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
            list.map(elem => (
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
      </Scroll>
    </>
  );

}

/*

*/

export default TableList;
