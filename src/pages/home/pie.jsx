import React,{
    useEffect,
    useRef
} from "react";
import { scaleData } from "./data";
// import { optionPie } from "./config";
import * as echarts from 'echarts';

const App = () => {
    let piemain = useRef(null)
    const initEchart = () => {
        let myEchart
        if (myEchart != null && myEchart !== "" && myEchart !== undefined) {
            myEchart.dispose();//销毁
        }
        myEchart = echarts.init(piemain.current, 'dark')   //初始化
        let rich = {
            white: {
                color: '#ddd',
                align: 'center',
                padding: [5, 0]
            }
        };
        let placeHolderStyle = {
            normal: {
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                },
                color: 'rgba(0, 0, 0, 0)',
                borderColor: 'rgba(0, 0, 0, 0)',
                borderWidth: 0
            }
        };
        let data = [];
        for (let i = 0; i < scaleData.length; i++) {
            data.push({
                value: scaleData[i].value,
                name: scaleData[i].name,
                itemStyle: {
                    normal: {
                        borderWidth: 5,
                        shadowBlur: 30,
                        borderColor: new echarts.graphic.LinearGradient(0, 0, 1, 1, [{
                            offset: 0,
                            color: '#7777eb'
                        }, {
                            offset: 1,
                            color: '#70ffac'
                        }]),
                        shadowColor: 'rgba(142, 152, 241, 0.6)'
                    }
                }
            }, {
                value: 4,
                name: '',
                itemStyle: placeHolderStyle
            });
        }
        let seriesObj = [{
            name: '',
            type: 'pie',
            clockWise: false,
            radius: [195, 200],
            hoverAnimation: false,
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        position: 'outside',
                        color: '#ddd',
                        formatter: function (params) {
                            var percent = 0;
                            var total = 0;
                            for (var i = 0; i < scaleData.length; i++) {
                                total += scaleData[i].value;
                            }
                            percent = ((params.value / total) * 100).toFixed(0);
                            if (params.name !== '') {
                                return params.name + '\n{white|' + '占比' + percent + '%}';
                            } else {
                                return '';
                            }
                        },
                        rich: rich
                    },
                    labelLine: {
                        show: false
                    }
                }
            },
            data: data
        }];
        let title = {
            text:'消费者年龄分布',
            left: "right",
            textStyle:{
                color:'white'
            }
        }
        let option = {
            backgroundColor: '#04243E',
            tooltip: {
                show: false
            },
            legend: {
                show: false
            },
            toolbox: {
                show: false
            },
            title:title,
            series: seriesObj
        }
        myEchart.setOption(option)
    }
    useEffect(() => {
        initEchart()
    },[])
    return (
        <>
        <div ref={piemain} style={{width: '100%', height: '60vh' }}></div>
        </>
    )
}
export default App


