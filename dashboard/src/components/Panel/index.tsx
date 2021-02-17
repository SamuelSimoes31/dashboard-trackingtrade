import React from 'react';
import Card from './Card';

import { Container, GridPanel } from './styles';
import BarGraph from './Graphs/BarGraph';
import { historyData, inspectionData, actionPlanData } from '../../utils/data';
import PieGraph from './Graphs/PieGraph';

const Panel = () => {
  return (
    <Container>
      <h1>Painel de Controle</h1>
      <GridPanel>
        <Card 
          title={"Histórico de eventos"} 
          settings
          filter={['Diário','Mensal']}
        >
          <BarGraph 
            data={historyData.data}
            keys={historyData.keys}
            index={historyData.index}
          />
        </Card>
        <Card title={"Planos de ação"} subtitle={"visão geral"} settings>
          <PieGraph 
            data={actionPlanData.data}
            id={actionPlanData.id}
            value={actionPlanData.value}
            eneableLegend={false}
          />
        </Card>
        <Card 
          title={"Inspeções"} 
          subtitle={"status do dia"} 
          settings
          details
        >
          <PieGraph 
            data={inspectionData.data}
            id={inspectionData.id}
            value={inspectionData.value}
          />
        </Card>
        <Card title={"Plano de ação"} subtitle={"status do dia"} settings>
          <PieGraph 
              data={actionPlanData.data}
              id={actionPlanData.id}
              value={actionPlanData.value}
          />
        </Card>
        <Card title={"Planos de ação"} subtitle={"atualizações"} settings filter={['Pendente','Realizado']}>
          {}
        </Card>
        <Card title={"Inpeções Agendadas"} filter={['Diário','Mensal']} >
          {}
        </Card>
      </GridPanel>
    </Container>
  )
  ;
}

export default Panel;