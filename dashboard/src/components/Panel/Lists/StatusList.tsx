import React from 'react';
import { StatusType } from '../../../utils/commonTypes';
import StatusListItem from './StatusListItem';


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

const StatusList = ({data,labelPerson}:StatusListProps) => {
  return (
    <React.Fragment>
    {
      data.map(item => (
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
    </React.Fragment>
  );
}

export default StatusList;
