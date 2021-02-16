import React from 'react';
import { ResponsivePie , DatumValueAccessorFunction} from '@nivo/pie'

interface Props {
  data: object[];
  id: string;
  value: string | DatumValueAccessorFunction<object>;
}


const CenteredMetric = (context: PieContext) => {
  const { dataWithArc, centerX, centerY } = context;
  console.log(context);

  return (
    <>
      {
        dataWithArc.map((item,index) => (
          <text
            key={index}
            x={125}
            y={centerY+88+(20*index) }

            textAnchor="middle"
            dominantBaseline="central"
            style={{
                fontSize: '11px',
                // fontWeight: 'bolder',
            }}
      >
          {`${item.formattedValue}`}
      </text>
      ))
      }
    </>
  )
}

const PieGraph: React.FC<Props> = ({data,id,value}) => (
  <ResponsivePie
    data={data}
    id={id}
    value={value}
    valueFormat={' >-.1%'}
    innerRadius={0.8}
    colors={['#7FC008','#DB8C28','#EB5757']}
    margin={{ top: 5, right: 10, bottom: 90, left: 10 }}
    enableRadialLabels={false}
    enableSliceLabels={false}
    legends={
      [
        {
          anchor: "bottom-left",
          direction: 'column',
          itemWidth: 10,
          itemHeight: 10,
          translateY: 60,
          itemsSpacing: 10,
          symbolShape: "circle",
          data: [{
            id: "Realizados",
            label: 'MANO'
          },
          {
            id: "Em aberto",
            label: "oxet"
          },
          {
            id: "Não Realizados",
            label: "oxew"
          }]
        }
      ]
    }
    layers={
      ['slices','legends', CenteredMetric]
    }
  />
)

interface PieContext {
  dataWithArc:  Array<any>;
  arcGenerator: Function;
  centerX:      number;
  centerY:      number;
  radius:       number;
  innerRadius:  number;
}


function fullArguments() {
  console.log(Array.from(arguments))
  return <text>{"A POW"}</text>
}

export default PieGraph;