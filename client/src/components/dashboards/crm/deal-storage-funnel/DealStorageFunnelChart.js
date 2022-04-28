import React from 'react';
import * as echarts from 'echarts/core';
import EChartsReactCore from 'echarts-for-react/lib/core';
import { getColor } from 'helpers/utils';

const getOptions = () => ({
  yAxis: [
    {
      data: [
        'Processing',
        'Contact won',
        'Contact Sent',
        'Qualified to Buy',
        'Created'
      ],
      axisLabel: {
        inside: true,
        color: getColor('700'),
        fontWeight: 500,
        fontSize: 11,
        fontFamily: 'poppins'
      },
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      },
      z: 10
    },
    {
      data: ['50%', '70%', '76%', '68%', '99%'],
      axisLabel: {
        inside: false,
        color: getColor('primary'),
        fontWeight: 500,
        fontSize: 11,
        fontFamily: 'poppins',
        borderRadius: 5,
        backgroundColor: getColor('soft-primary'),
        padding: [6, 16, 6, 16],
        width: 115
      },
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      },
      z: 10
    }
  ],
  xAxis: {
    type: 'value',
    min: 0,
    max: 35,
    axisLine: {
      show: false
    },
    splitLine: {
      show: false
    },
    inverse: true,
    axisTick: {
      show: false
    },
    axisLabel: {
      show: false
    }
  },

  series: [
    {
      type: 'bar',
      showBackground: true,
      barWidth: 25,
      label: {
        show: true,
        formatter: '{c} ',
        position: 'insideLeft'
      },
      backgroundStyle: {
        color: getColor('200'),
        borderRadius: 5
      },
      itemStyle: {
        color: getColor('primary'),
        borderRadius: 5
      },
      data: [7, 10, 13, 19, 19]
    }
  ],
  grid: { right: '65px', left: '0', bottom: '0', top: '0' }
});

const DealStorageFunnelChart = () => {
  return (
    <EChartsReactCore
      echarts={echarts}
      option={getOptions()}
      style={{ height: '10rem' }}
    />
  );
};

export default DealStorageFunnelChart;