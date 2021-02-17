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
      "Inspeções realizadas": 1,
      "Planos de ação criados": 4
    },
    {
      "day": 5,
      "Inspeções realizadas": 1,
      "Planos de ação criados": 4
    },
    {
      "day": 6,
      "Inspeções realizadas": 1,
      "Planos de ação criados": 4
    },
    {
      "day": 7,
      "Inspeções realizadas": 1,
      "Planos de ação criados": 4
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
      nome: 'Larissa Silva Gonçaves',
      planejado: 10,
      realizado: 10,
      "última atualização": '08:10h'
    },
    {
      nome: 'Larissa Silva Gonçaves',
      planejado: 10,
      realizado: 10,
      "última atualização": '08:10h'
    }
  ]
}