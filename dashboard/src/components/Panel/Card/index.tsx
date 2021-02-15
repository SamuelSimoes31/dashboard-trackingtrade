import React from 'react';

import { Container, Title, Subtitle } from './styles';

interface Props {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
}

const Card: React.FC<Props> = ({children,title,subtitle}) => {
  return (
    <Container className="CardContainer">
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      {children}
    </Container>
  );
}

export default Card;