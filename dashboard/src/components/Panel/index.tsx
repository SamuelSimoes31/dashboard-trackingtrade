import React from 'react';
import { Container, GridPanel } from './styles';

import Card from './Card';
import Abstract from './Abstract';
import BarGraph from './Graphs/BarGraph';
import PieGraph from './Graphs/PieGraph';
import TableList from './Lists/TableList';
import StatusList from './Lists/StatusList';

import { historyData, inspectionData, actionPlanData, inspecScheduled, actionPLanUpdates, abstractData } from '../../utils/data';
// Todos os dados mockados estão no arquivo data.ts
// como as natureza dos dados, o formato, como eles podem ser filtrados/separados,
// então não me preocupei muito em adicionar funcionalidade para os botões, até 
// porque elas não foram informadas né
// Mas aqui a ideia seria puxar todos esses dados (não necessariamenten esses formatos)
// através de hooks que contenham as requisições a API REST

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
          <PieGraph 
            data={inspectionData.data}
            id={inspectionData.id}
            value={inspectionData.value}
          />
          <Abstract title={abstractData.title} lines={abstractData.lines}/>
        </Card>
        <Card
          title={"Plano de ação"}
          subtitle={"status do dia"}
          settings
          details
        >
          <PieGraph 
              data={actionPlanData.data}
              id={actionPlanData.id}
              value={actionPlanData.value}
          />
          <Abstract title={abstractData.title} lines={abstractData.lines}/>
        </Card>
        <Card
          title={"Planos de ação"}
          subtitle={"atualizações"}
          settings
          filter={['Pendente','Realizado']}
        >
          <StatusList 
            data={actionPLanUpdates}
            labelPerson={'responsável'}
          />
        </Card>
        <Card title={"Inpeções Agendadas"} filter={['Diário','Mensal']} >
          <TableList labels={inspecScheduled.labels} data={inspecScheduled.data}/>
        </Card>
      </GridPanel>
    </Container>
  )
  ;
}

export default Panel;