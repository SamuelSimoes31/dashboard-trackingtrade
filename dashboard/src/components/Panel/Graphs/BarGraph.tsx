import React from 'react';
import { ResponsiveBar } from '@nivo/bar'
// import { Container } from './styles';

interface BarGraphProps {
  data: object[];
  keys: string[];
  index: string;
}

const BarGraph = ({data,keys,index}:BarGraphProps) => (
  <ResponsiveBar
    data={data}
    keys={keys}
    indexBy={index}
    groupMode={'grouped'}
    layout={'vertical'}
    margin={{ top: 5, right: 10, bottom: 90, left: 10 }}
    innerPadding={2}
    padding={0.7}
    // indexScale={{"type":"band","round":false}}
    enableLabel={true}
    enableGridX={false}
    enableGridY={false}
    axisBottom={{tickSize:0}}
    axisLeft={{tickSize:0,tickPadding:10}}
    labelSkipHeight={1}
    colors={['#7FC008','#DB8C28']}
    legends={
      [
        {
          anchor: "bottom-left",
          dataFrom: "keys",
          itemWidth: 10,
          itemHeight: 10,
          direction: 'column',
          translateY: 60,
          itemsSpacing: 10,
          symbolShape: "circle"
        }
      ]
    }
  />
)

export default BarGraph;