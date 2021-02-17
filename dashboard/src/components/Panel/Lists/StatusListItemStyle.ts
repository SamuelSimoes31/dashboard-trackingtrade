import styled from 'styled-components';
import { StatusType } from '../../../utils/commonTypes';


export const Container = styled.div`
  border-bottom: 1px solid #EBEBEB;
  &:last-child {
    border: none;
  }

  padding: 10px 0;

  & > div {
    display: flex;
    justify-content: space-between;

    &:last-child {
      font-size: 12px;
      line-height: 18px;
      color: #B0B0B0;
    }
  }

  .flex {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
`;

export const Title = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 25px;
  color: #333333;
`;



interface StatusContainerProps {
  status: StatusType;
}

const colorStatus = (status: StatusType)  => {
  if(status === 'realizado') return '#7FC008';
  if(status === 'pendente') return '#EB5757';
  if(status === 'criado') return '#DB8C28';
}

export const StatusContainer = styled.div<StatusContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  font-style: normal;
  font-weight: bold;
  font-size: 6px;
  line-height: 21px;
  color: ${({status}) => colorStatus(status)};

  width: 66px;
  height: 13px;
  border: 1px solid ${({status}) => colorStatus(status)};
  border-radius: 100px;
`;