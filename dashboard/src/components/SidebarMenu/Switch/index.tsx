import React from 'react';

import { Container, Slider } from './styles';

interface SwitchProps {
  onChange(): void;
  initialState: boolean;
}

const Switch = ( {onChange,initialState}:SwitchProps ) => {
  return (
    <Container>
      <input type="checkbox" onChange={() => {onChange()}} checked={initialState} />
      <Slider />
    </Container>
  );
}

export default Switch;
