import React from 'react';

import { Container, Slider } from './styles';

interface SwitchProps {
  onChange: () => void;
}

const Switch = ( {onChange}:SwitchProps ) => {
  return (
    <Container>
      <input type="checkbox" onChange={() => {onChange()}}/>
      <Slider />
    </Container>
  );
}

export default Switch;
