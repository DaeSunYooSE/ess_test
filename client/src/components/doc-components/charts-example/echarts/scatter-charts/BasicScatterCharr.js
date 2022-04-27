import React from 'react';
import EChartsReactCore from 'echarts-for-react/lib/core';
import { getColor } from 'helpers/utils';
import FalconComponentCard from 'components/common/FalconComponentCard';
import { ScatterChart } from 'echarts/charts';
import * as echarts from 'echarts/core';
import {
  GridComponent,
  TooltipComponent,
  TitleComponent,
  LegendComponent
} from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  ScatterChart,
  CanvasRenderer,
  LegendComponent
]);

const chartCode = `function ChartOptions() {

  const getOption = () => ({
    tooltip: {
      trigger: 'item',
      axisPointer: {
        type: 'none'
      },
      padding: [7, 10],
      backgroundColor: getColor('100'),
      borderColor: getColor('300'),
      textStyle: { color: getColor('dark') },
      borderWidth: 1,
      transitionDuration: 0
    },
    xAxis: {
      axisLabel: {
        color: getColor('600')
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: getColor('200')
        }
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: getColor('200')
        }
      }
    },
    yAxis: {
      axisLabel: {
        color: getColor('600')
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: getColor('200')
        }
      },

      axisLine: {
        show: true,
        lineStyle: {
          color: getColor('200')
        }
      }
    },
    series: [
      {
        // symbolSize: val => val[2] * 2,
        data: [
          [10.0, 8.04],
          [8.07, 6.95],
          [13.0, 7.58],
          [9.05, 8.81],
          [11.0, 8.33],
          [14.0, 7.66],
          [13.4, 6.81],
          [10.0, 6.33],
          [14.0, 8.96],
          [12.5, 6.82],
          [9.15, 7.2],
          [11.5, 7.2],
          [3.03, 4.23],
          [12.2, 7.83],
          [2.02, 4.47],
          [1.05, 3.33],
          [4.05, 4.96],
          [6.03, 7.24],
          [12.0, 6.26],
          [12.0, 8.84],
          [7.08, 5.82],
          [5.02, 5.68]
        ],
        type: 'scatter',
        itemStyle: {
          color: getColor('danger')
        }
      }
    ],
    grid: {
      right: 8,
      left: 5,
      bottom: 5,
      top: 8,
      containLabel: true
    }
    });
    return (
      <EChartsReactCore
        echarts={echarts}
        option={getOption()}
        style={{ height: '18.75rem' }}
      />
    );
  }
`;

const BasicScatterChart = () => {
  return (
    <FalconComponentCard className="h-100">
      <FalconComponentCard.Header title="Basic scatter chart" light={false} />
      <FalconComponentCard.Body
        code={chartCode}
        language="jsx"
        scope={{
          EChartsReactCore,
          echarts,
          getColor
        }}
      />
    </FalconComponentCard>
  );
};

export default BasicScatterChart;
