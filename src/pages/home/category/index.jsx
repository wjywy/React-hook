import React, {
    useEffect,
    // useState,
    useRef
} from "react";
import './index.css'
import * as echarts from 'echarts';

const App = () => {
    let main = useRef(null)
    const initEchart = () => {
        let myEcharts
        if (myEcharts != null && myEcharts !== "" && myEcharts !== undefined) {
            myEcharts.dispose();//销毁
        }
        myEcharts = echarts.init(main.current, )
        var myColor = ['#00e9db', '#00c0e9', '#0096f3', '#33CCFF', '#33FFCC',];
        let option = {
            // title:'实时预测',
            backgroundColor: '#0e2147',
            grid: {
                left: '11%',
                top: '12%',
                right: '0%',
                bottom: '8%',
                containLabel: true
            },
            xAxis: [{
                show: false,
            }],
            yAxis: [{
                axisTick: 'none',
                axisLine: 'none',
                offset: '27',
                axisLabel: {
                    textStyle: {
                        color: '#ffffff',
                        fontSize: '16',
                    }
                },
                data: ['茶百道','喜茶','星巴克','书亦','蜜雪']
            }, {
                axisTick: 'none',
                axisLine: 'none',
                axisLabel: {
                    textStyle: {
                        color: '#ffffff',
                        fontSize: '16',
                    }
                },
                data: [ '5', '4', '3', '2', '1']
            }, {
                name: '分拨延误TOP 10',
                nameGap: '50',
                nameTextStyle: {
                    color: '#ffffff',
                    fontSize: '16',
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(0,0,0,0)'
                    }
                },
                data: [],
            }],
            series: [{
                    name: '条',
                    type: 'bar',
                    yAxisIndex: 0,
                    data: [4, 13, 25, 29, 38],
                    label: {
                        normal: {
                            show: true,
                            position: 'right',
                            textStyle: {
                                color: '#ffffff',
                                fontSize: '16',
                            }
                        }
                    },
                    barWidth: 12,
                    itemStyle: {
                        normal: {
                            color: function(params) {
                                var num = myColor.length;
                                return myColor[params.dataIndex % num]
                            },
                        }
                    },
                    z: 2
                }, {
                    name: '白框',
                    type: 'bar',
                    yAxisIndex: 1,
                    barGap: '-100%',
                    data: [99, 99.5, 99.5, 99.5, 99.5],
                    barWidth: 20,
                    itemStyle: {
                        normal: {
                            color: '#0e2147',
                            barBorderRadius: 5,
                        }
                    },
                    z: 1
                }, {
                    name: '外框',
                    type: 'bar',
                    yAxisIndex: 2,
                    barGap: '-100%',
                    data: [100, 100, 100, 100, 100],
                    barWidth: 24,
                    itemStyle: {
                        normal: {
                            color: function(params) {
                                var num = myColor.length;
                                return myColor[params.dataIndex % num]
                            },
                            barBorderRadius: 5,
                        }
                    },
                    z: 0
                },
                {
                    name: '外圆',
                    type: 'scatter',
                    hoverAnimation: false,
                    data: [0, 0, 0, 0, 0],
                    yAxisIndex: 2,
                    symbolSize: 35,
                    itemStyle: {
                        normal: {
                            color: function(params) {
                                var num = myColor.length;
                                return myColor[params.dataIndex % num]
                            },
                            opacity: 1,
                        }
                    },
                    z: 2
                }
            ]
        }
        myEcharts.setOption(option)
    }
    useEffect(() => {
        initEchart()
    }, [])
    return (
        <>
            <div ref={main} style={{width:'83%',height:'35vh'}} className='home_bar_border' ></div>
        </>
    )
}
export default App