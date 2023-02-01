import React, { useEffect, useRef } from "react";
import * as echarts from 'echarts';

const App = () => {
    const preAverage = useRef(null)
    const initEchart = () => {
        let myEchart
        if (myEchart != null && myEchart !== "" && myEchart !== undefined) {
            myEchart.dispose();//销毁
        }
        myEchart = echarts.init(preAverage.current)   //初始化
        let option = {
            tooltip: {
                trigger: 'axis'
            },
            xAxis: [{
                type: 'category',
                data: ['2019-01', '2019-02', '2019-03', '2019-04', '2019-05', '2019-06'],
                axisLine: {
                    lineStyle: {
                        color: "#999"
                    }
                }
            }],
            yAxis: [{
                type: 'value',
                splitNumber: 4,
                splitLine: {
                    lineStyle: {
                        type: 'dashed',
                        color: '#DDD'
                    }
                },
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: "white"
                    },
                },
                nameTextStyle: {
                    color: "#999"
                },
                splitArea: {
                    show: false
                }
            }],
            series: [{
                name: '课时',
                type: 'line',
                data: [23, 60, 20, 36, 23, 85],
                lineStyle: {
                    normal: {
                        width: 8,
                        color: {
                            type: 'linear',

                            colorStops: [{
                                offset: 0,
                                color: '#A9F387' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: '#48D8BF' // 100% 处的颜色
                            }],
                            globalCoord: false // 缺省为 false
                        },
                        shadowColor: 'rgba(72,216,191, 0.3)',
                        shadowBlur: 10,
                        shadowOffsetY: 20
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#fff',
                        borderWidth: 10,
                        /*shadowColor: 'rgba(72,216,191, 0.3)',
                        shadowBlur: 100,*/
                        borderColor: "#A9F387"
                    }
                },
                smooth: true
            }]
        }
        myEchart.setOption(option)
    }
    useEffect(() => {
        initEchart()
    }, [])
    return (
        <>
            <div style={{ width: "40%", backgroundColor: '#32A8E5', marginLeft: '10px' }}>
                <div style={{ marginLeft: '50px', color: 'white' }}>
                    <div style={{ fontSize: '40px' }}>0.52</div>
                    <div>平均风险值</div>
                </div>
                <div ref={preAverage} style={{ width: '100%', height: '45vh' }}></div>
            </div>
        </>
    )
}
export default App