import React, {useContext} from 'react';
import { ResponsivePie , DatumValueAccessorFunction, PieLayer} from '@nivo/pie'
import { ThemeContext } from 'styled-components';

interface PieContext {
  dataWithArc:  Array<any>;
  arcGenerator: Function;
  centerX:      number;
  centerY:      number;
  radius:       number;
  innerRadius:  number;
}

const LegendValuesLayer = (context: PieContext) => {
  const { dataWithArc, centerY } = context;
  
  return (
    <>
      {
        dataWithArc.map((item,index) => (
          <text
          key={index}
          x={125}
          y={centerY+80+(20*index) }
          textAnchor="middle"
          dominantBaseline="central"
          style={{
            fontSize: '11px',
            }}
            >
          {`${item.formattedValue}`}
      </text>
      ))
    }
    </>
  )
}

interface PieGraphProps {
  data: object[];
  id: string;
  value: string | DatumValueAccessorFunction<object>;
  eneableLegend?: boolean;
}

const PieGraph = ({data,id,value, eneableLegend=true}:PieGraphProps) => {

  function layersToPrint() : PieLayer<object>[] {
    const layers: PieLayer<object>[] = ['slices','radialLabels'];
    if(eneableLegend) return layers.concat(['legends',LegendValuesLayer])
    else return layers;
  }

  const { nivoTheme } = useContext(ThemeContext);

  return (
    <ResponsivePie
    data={data}
    id={id}
    value={value}
    theme={nivoTheme}
    valueFormat={' >-.1%'}
    innerRadius={0.8}
    colors={['#7FC008','#DB8C28','#EB5757']}
    margin={{ top: eneableLegend?5:20, right: 10, bottom: eneableLegend?110:50, left: 10 }}
      enableRadialLabels={!eneableLegend}
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
      layers={layersToPrint()}
    />
  )
}


PieGraph.defaultProps = {
  eneableLegend: true
}

export default PieGraph;