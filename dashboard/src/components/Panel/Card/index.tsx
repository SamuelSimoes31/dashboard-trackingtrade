import React from 'react';

import { Container, Title, Subtitle } from './styles';

interface CardProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
}

const Card = ({children,title,subtitle}:CardProps) => {
  return (
    <Container className="CardContainer">
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      {children}
    </Container>
  );
}

export default Card;