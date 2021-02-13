import React from 'react';
import Card from './Card';

import { Container, GridPanel } from './styles';

const Panel: React.FC = () => {
  return (
    <Container>
      <h1>Painel de Controle</h1>
      <GridPanel>
        <Card title={"Histórico de eventos"} >
          {}
        </Card>
        <Card title={"Planos de ação"} subtitle={"visão geral"}>
          {}
        </Card>
        <Card title={"Inspeções"} subtitle={"status do dia"}>
          {}
        </Card>
        <Card title={"Plano de ação"} subtitle={"status do dia"}>
          {}
        </Card>
        <Card title={"Planos de ação"} subtitle={"atualizações"}>
          {}
        </Card>
        <Card title={"Inpeções Agendadas"} >
          {}
        </Card>
      </GridPanel>
    </Container>
  )
  ;
}

export default Panel;