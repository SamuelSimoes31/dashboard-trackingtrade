import React from 'react';

import { Container, Title, Subtitle } from './styles';
import GearIcon from '../../../images/gear.svg';

interface CardProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
  settings?: boolean;
  filter?: string[]; //apenas para fins práticos de dados mockados
  details?: boolean;
}

const Card = ({children,title,subtitle,settings,filter,details}:CardProps) => {


  return (
    <Container className="CardContainer" >
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      {settings && <img src={GearIcon} alt='GearIcon' onClick={() => alert('Will be implemented soon!')}/>}
      {filter && 
        <select name="filter">
          {filter?.map(e => <option>{e}</option>)}
        </select>
      }
      {details && <p className="details" onClick={() => alert('Will be implemented soon!')}>visualizar detalhes</p>}
      {children}
    </Container>
  );
}

export default Card;