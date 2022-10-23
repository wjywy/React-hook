import ReactECharts from 'echarts-for-react';
import React from 'react';

// 在此组件中绘制一个简单的折线图
const Line = () => {
  // 返回折线图的配置对象options
  let option = {
    // 声明一个 X 轴，类目轴（category）(同时这也为默认映射)。默认情况下，类目轴对应到 dataset 第一列。
    xAxis: {
        type: 'category',
        // 可以用字符'-'代表数据为空，这时这个点两侧的数据不会被左右两侧的数据连接
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    // 声明一个 Y 轴，数值轴,value代表是数值型。
    yAxis: {
        type: 'value'
    },
    series: [{
        // y轴的数据
        data: [150, 230, 224, 218, 135, 147, 220],

        // type代表图的类型，line为折线图，bar为柱状图，pie为饼图，scatter为散点图
        type: 'line',

        // stack代表堆叠，拥有同样stack的数值将堆叠在一起，即一个系列的值与另一个系列的值相加
        stack:'x',

        // 为true即代表为平滑曲线图
        smooth:true,

        // step属性代表开启方波图,有start，middle，end三种属性，分别代表在开始位置、中间位置以及结尾位置开启突变
        // step:'start',

        // 配置折线的样式
        lineStyle:{
            normal:{
                // 颜色
                color:'green',
                // 设置宽度，不用加px
                width:4,
                // 虚线
                type:'dashed'
            }
        },
        // 数据点的样式，其配置与lineStyle相差无几
        itemStyle:{
                width:3,
                // 数据点填充的颜色
                color:'red'
        },
        // 在数据点出显示数值
        label:{
            // 为true即为默认就始终显示，如果为false，但 series.emphasis.label.show 为 true，
            // 则代表只有在鼠标经过数据点的时候才显示数值
            show:true,
            position:'bottom'
        }
    },
    // seriesLayoutBy
    // seriesLayoutBy可取值：
    // 'column': 默认值。系列被安放到 dataset 的列上面。
    // 'row': 系列被安放到 dataset 的行上面。
    {
        type:'line',
        seriesLayoutBy:'row'
    },

    {
        type:'line',
        data:[50,60,70,80,90,100,120],
        stack:'x',
        // 区域填充色
        areaStyle: {
            color:'#ff0',
            // 透明度
            opacity:0.5
        }
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
