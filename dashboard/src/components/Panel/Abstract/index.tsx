import React from 'react';
import { Container } from './styles';

interface AbstractProps {
  title: string;
  lines: [string,string][];
}

const Abstract = ({title, lines}:AbstractProps) => {
  return (
    <Container>
      <p>{title}</p>
      {
        lines.map((line,i) => (
          <div key={i}>
            <p>{line[0]}</p>
            <p>{line[1]}</p>
          </div>
        ))
      }
    </Container>
  );
}

export default Abstract;
