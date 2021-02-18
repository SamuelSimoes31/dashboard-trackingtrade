import React from 'react';
import { Container, GridPanel } from './styles';

import Card from './Card';
import Abstract from './Abstract';
import BarGraph from './Graphs/BarGraph';
import PieGraph from './Graphs/PieGraph';
import TableList from './Lists/TableList';
import StatusList from './Lists/StatusList';

import { historyData, inspectionData, actionPlanData, inspecScheduled, actionPLanUpdates, abstractData } from '../../utils/data';

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
        <Card
          title={"Planos de ação"}
          subtitle={"visão geral"}
          settings
        >
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
        >
          <Abstract title={abstractData.title} lines={abstractData.lines}/>
          <PieGraph 
            data={inspectionData.data}
            id={inspectionData.id}
            value={inspectionData.value}
          />
        </Card>
        <Card
          title={"Plano de ação"}
          subtitle={"status do dia"}
          settings
          details
        >
          <Abstract title={abstractData.title} lines={abstractData.lines}/>
          <PieGraph 
              data={actionPlanData.data}
              id={actionPlanData.id}
              value={actionPlanData.value}
          />
        </Card>
        <Card
          title={"Planos de ação"}
          subtitle={"atualizações"}
          settings
          filter={['Pendente','Realizado']}
          search
        >
          <StatusList 
            data={actionPLanUpdates}
            labelPerson={'responsável'}
          />
        </Card>
        <Card title={"Inpeções Agendadas"} filter={['Diário','Mensal']} search>
          <TableList labels={inspecScheduled.labels} data={inspecScheduled.data}/>
        </Card>
      </GridPanel>
    </Container>
  )
  ;
}

export default Panel;