import React, {useState, useMemo} from 'react';
import { StatusType } from '../../../utils/commonTypes';
import StatusListItem from './StatusListItem';
import SearchBar from './SearchBar';
import styled from 'styled-components';

type actionPlansUpdatesType = {
  id: number;
  title: string;
  person: string;
  status: StatusType;
  time: string;
}[]

interface StatusListProps {
  data: actionPlansUpdatesType;
  labelPerson: string;
}


export const Scroll = styled.div`
  overflow: auto;
  width: 100%;
  height: calc(100% - 84px);
`;

const StatusList = ({data,labelPerson}:StatusListProps) => {
  const [query, setQuery] = useState('sousa');



  const list = useMemo(() => {
    return data.filter(e => Object.values(e).map(v => v.toString().toLowerCase()).filter(a => a.includes(query)).length > 0);
  },[data, query])

  return (
    <React.Fragment>
    <SearchBar setSearch={setQuery}/>
    <Scroll>
    {
      list.map(item => (
        <StatusListItem
          key={item.id}
          title={item.title}
          person={item.person}
          labelPerson={labelPerson}
          status={item.status}
          time={item.time}
        />
      ))
    }
    </Scroll>
    </React.Fragment>
  );
}

export default StatusList;
