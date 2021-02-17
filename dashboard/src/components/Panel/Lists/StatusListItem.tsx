import React from 'react';
import { StatusType } from '../../../utils/commonTypes';
import {Container, Title, StatusContainer} from './StatusListItemStyle';

interface StatusListItemProps {
  title: string;
  person: string;
  labelPerson: string;
  status: StatusType;
  time: string;
}

const StatusListItem = ({title,person,labelPerson,status,time}: StatusListItemProps) => {
  return (
    <Container>
      <div>
        <Title>{title}</Title>
        <div className={'flex'}>
          <StatusContainer status={status}><p>{status}</p></StatusContainer>
          {(status === 'pendente') && (<>
            {'>'}
            <StatusContainer status={'realizado'}><p>{'realizado'}</p></StatusContainer>
            </>)}
        </div>
      </div>
      <div>
        <p>{labelPerson + ': ' + person}</p>
        <p>{time}</p>
      </div>
    </Container>
  );
}

export default StatusListItem;
