import { StatusType } from './commonTypes';

export const historyData = {
  data: [
    {
      "day": 1,
      "Inspeções realizadas": 2,
      "Planos de ação criados": 3
    },
    {
      "day": 2,
      "Inspeções realizadas": 5,
      "Planos de ação criados": 7
    },
    {
      "day": 3,
      "Inspeções realizadas": 3,
      "Planos de ação criados": 0
    },
    {
      "day": 4,
      "Inspeções realizadas": 4,
      "Planos de ação criados": 1
    },
    {
      "day": 5,
      "Inspeções realizadas": 1,
      "Planos de ação criados": 4
    },
    {
      "day": 6,
      "Inspeções realizadas": 7,
      "Planos de ação criados": 8
    },
    {
      "day": 7,
      "Inspeções realizadas": 8,
      "Planos de ação criados": 8
    },
    {
      "day": 8,
      "Inspeções realizadas": 2,
      "Planos de ação criados": 3
    },
    {
      "day": 9,
      "Inspeções realizadas": 0,
      "Planos de ação criados": 4
    },
    {
      "day": 10,
      "Inspeções realizadas": 3,
      "Planos de ação criados": 8
    }
  ],
  index: "day",
  keys: ["Inspeções realizadas","Planos de ação criados"]
}

export const inspectionData = {
  data: [
    {
      "id": "Realizados",
      "value": 0.586,
    },
    {
      "id": "Em aberto",
      "value": 0.349
    },
    {
      "id": "Não Realizados",
      "value": 0.065
    }
  ],
  id: "id",
  value: "value"
}

export const actionPlanData = {
  data: [
    {
      "id": "Criados",
      "value": 0.586,
    },
    {
      "id": "Finalizados",
      "value": 0.349
    },
    {
      "id": "Em aberto",
      "value": 0.065
    }
  ],
  id: "id",
  value: "value"
}

type inspecScheduledType = {
  labels: ['nome','planejado','realizado','última atualização'];
  data: {
    'id': number;
    'nome': string;
    'planejado': number;
    'realizado': number;
    'última atualização': string;
  }[]
}

export const inspecScheduled: inspecScheduledType = {
  labels: ['nome','planejado','realizado','última atualização'],
  data: [
    {
      id: 0,
      nome: 'Larissa Silva Gonçaves',
      planejado: 10,
      realizado: 10,
      "última atualização": '08:10h'
    },
    {
      id: 1,
      nome: 'Lucas Silva Santos',
      planejado: 8,
      realizado: 10,
      "última atualização": '08:10h'
    },
    {
      id: 2,
      nome: 'Raissa Oliveira Araujo',
      planejado: 8,
      realizado: 10,
      "última atualização": '08:10h'
    },
    {
      id: 3,
      nome: 'Vitória Sousa Cavalcanti',
      planejado: 8,
      realizado: 10,
      "última atualização": '08:10h'
    },
    {
      id: 4,
      nome: 'Emily Araujo Oliveira',
      planejado: 8,
      realizado: 10,
      "última atualização": '08:10h'
    },
    {
      id: 5,
      nome: 'Nicolas Pereira Sousa',
      planejado: 8,
      realizado: 10,
      "última atualização": '08:10h'
    },
    {
      id: 6,
      nome: 'Leila Dias Costa',
      planejado: 8,
      realizado: 10,
      "última atualização": '08:10h'
    },
    {
      id: 7,
      nome: 'Laura Castro Gomes',
      planejado: 8,
      realizado: 10,
      "última atualização": '08:10h'
    }
  ]
}

type actionPlansUpdatesType = {
  id: number;
  title: string;
  person: string;
  status: StatusType;
  time: string;
}[]

export const actionPLanUpdates: actionPlansUpdatesType = [
  {
    id: 1,
    title: 'Nome do plano de ação',
    person: 'Bruno Barros',
    status: "pendente",
    time: '10:45 10/10/10'
  },
  {
    id: 2,
    title: 'Plano de ação 2',
    person: 'Bruno Barros',
    status: "realizado",
    time: '10:45 10/10/10'
  },
  {
    id: 3,
    title: 'Plano de ação 2',
    person: 'Bruno Barros',
    status: "realizado",
    time: '10:45 10/10/10'
  },
  {
    id: 4,
    title: 'Plano de ação 2',
    person: 'Bruno Barros',
    status: "criado",
    time: '23:45 10/11/10'
  },
  {
    id: 5,
    title: 'Plano de ação 2',
    person: 'Bruno Barros',
    status: "realizado",
    time: '10:45 10/10/10'
  },
  {
    id: 6,
    title: 'Plano de ação 2',
    person: 'Bruno Barros',
    status: "realizado",
    time: '10:45 10/10/10'
  },
  {
    id: 7,
    title: 'Plano de ação 42',
    person: 'Barros Bruno',
    status: "criado",
    time: '10:48 11/11/11'
  },
]

type abstractDataType = {
  title: string;
  lines: [string,string][];
}

export const abstractData : abstractDataType= {
  title: 'Média de tempo',
  lines: [
    ['Hoje','10 min'],
    ['Últimos 7 dias','10 min'],
    ['últimos 30 dias','10 min']
  ]
}