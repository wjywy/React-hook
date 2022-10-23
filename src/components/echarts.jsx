// import * as ECharts from "echarts";
import ReactECharts from 'echarts-for-react';
import React from 'react';
// import ReactECharts from 'echarts-for-react';

// 在此组件中绘制一个简单的折线图
const Line = () => {
  // 返回折线图的配置对象options
  let option = {
    // 声明一个 X 轴，类目轴（category）(同时这也为默认映射)。默认情况下，类目轴对应到 dataset 第一列。
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    // 声明一个 Y 轴，数值轴。
    yAxis: {
        type: 'value'
    },
    series: [{
        // y轴的数据
        data: [150, 230, 224, 218, 135, 147, 260],
        type: 'line'
    },
    // seriesLayoutBy
    // seriesLayoutBy可取值：
    // 'column': 默认值。系列被安放到 dataset 的列上面。
    // 'row': 系列被安放到 dataset 的行上面。
    {
        type:'line',
        seriesLayoutBy:'row'
    }
]
  };
  return (
    <div>
        <ReactECharts option={option} />
    </div>
  );
};

export default Line;
