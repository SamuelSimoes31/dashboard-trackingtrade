import React from 'react';

import { Container, Title, Subtitle } from './styles';
import GearIcon from '../../../images/gear.svg';

interface CardProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
  settings?: boolean; //está como boolean para fins práticos. Mas a ideia seria por exemplo essa prop receber um objeto e a partir dele
}

const Card = ({children,title,subtitle,settings}:CardProps) => {
  return (
    <Container className="CardContainer">
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      {children}
      {settings && <img src={GearIcon} alt='GearIcon' onClick={() => alert('Will be implemented soon!')}/>}
    </Container>
  );
}

export default Card;