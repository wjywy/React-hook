// import { scaleData } from "./data";
// import * as echarts from 'echarts';

export const chinaMapConfig = (configData) => {
  let { data, max, min } = configData;
  return [{
    title: {
      text: "数据地图",
      left: "right",
      textStyle: {
        color: 'white'
      }
    },
    tooltip: {
      // 提示框
      triggerOn: 'mousemove',
      trigger: "item",
      showDelay: 0,
      transitionDuration: 0.2,
      formatter: function (params) {
        return `受众人群:${params.name}<br/>
                    平均价格: ${params.dataIndex}<br/>
                    品牌销量:${params.dataIndex}`    //只能使用模板字符串
      }
    },
    label: {
      color: 'white'
    },
    visualMap: {
      // 视觉映射组件
      type: "continuous",
      left: "right",
      min: min,
      max: max,
      inRange: {
        color: [
          "#e5f7ff",
          "#096dd9",
          "#fedeb5",
          "#f96a35",
          "#c3380e",
          "#942005",
          '#5b1305'
        ]
      },
      text: [`最大值：${max}`, 0],
      textStyle: {
        color: 'white'
      }
      // calculable: true
    },
    toolbox: {
      // 工具导航
      show: true,
      left: "left",
      top: "top",
      feature: {
        restore: {},
        saveAsImage: {}
      }
    },
    dataset: {
      source: data
    },
    series: {
      // 地图,可以是数组，多个
      label: {
        show: true, //显示省市名称
        position: [1, 100], // 相对的百分比
        fontSize: 12,
        offset: [2, 0],
        align: "left",
        color: 'white'
      },
      itemStyle: {
        areaColor: "#09295b" // 地图图形颜色
      },
      type: "map",
      roam: true,
      map: "china",
      zoom: 1.2, // 当前视角的缩放比例
      scaleLimit: {
        max: 2,
        min: 1 // 设置默认缩放效果
      },
      top: "10%" // 距离顶部距离
    }
  }];
};



// export const optionPie = () => {
//   let rich = {
//     white: {
//       color: '#ddd',
//       align: 'center',
//       padding: [5, 0]
//     }
//   };
//   let placeHolderStyle = {
//     normal: {
//       label: {
//         show: false
//       },
//       labelLine: {
//         show: false
//       },
//       color: 'rgba(0, 0, 0, 0)',
//       borderColor: 'rgba(0, 0, 0, 0)',
//       borderWidth: 0
//     }
//   };
//   let data = [];
//   for (let i = 0; i < scaleData.length; i++) {
//     data.push({
//       value: scaleData[i].value,
//       name: scaleData[i].name,
//       itemStyle: {
//         normal: {
//           borderWidth: 5,
//           shadowBlur: 30,
//           borderColor: new echarts.graphic.LinearGradient(0, 0, 1, 1, [{
//             offset: 0,
//             color: '#7777eb'
//           }, {
//             offset: 1,
//             color: '#70ffac'
//           }]),
//           shadowColor: 'rgba(142, 152, 241, 0.6)'
//         }
//       }
//     }, {
//       value: 4,
//       name: '',
//       itemStyle: placeHolderStyle
//     });
//   }
//   let seriesObj = [{
//     name: '',
//     type: 'pie',
//     clockWise: false,
//     radius: [195, 200],
//     hoverAnimation: false,
//     itemStyle: {
//       normal: {
//         label: {
//           show: true,
//           position: 'outside',
//           color: '#ddd',
//           formatter: function (params) {
//             var percent = 0;
//             var total = 0;
//             for (var i = 0; i < scaleData.length; i++) {
//               total += scaleData[i].value;
//             }
//             percent = ((params.value / total) * 100).toFixed(0);
//             if (params.name !== '') {
//               return params.name + '\n{white|' + '占比' + percent + '%}';
//             } else {
//               return '';
//             }
//           },
//           rich: rich
//         },
//         labelLine: {
//           show: false
//         }
//       }
//     },
//     data: data
//   }];
//   let title = {
//     text: '消费者年龄分布',
//     left: "right",
//     textStyle: {
//       color: 'white'
//     }
//   }
//   return {
//     backgroundColor: '#04243E',
//             tooltip: {
//                 show: false
//             },
//             legend: {
//                 show: false
//             },
//             toolbox: {
//                 show: false
//             },
//             title:title,
//             series: seriesObj
//   }
// }