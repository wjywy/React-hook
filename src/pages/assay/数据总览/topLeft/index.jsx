import React,
{
    useRef,
    useEffect
} from 'react';
import * as echarts from 'echarts';

function App() {
    const mainEchart = useRef(null)
    const initEcharts = () => {
        let myEcharts
        if (myEcharts != null && myEcharts !== "" && myEcharts !== undefined) {
            myEcharts.dispose();//销毁
        }
        myEcharts = echarts.init(mainEchart.current,)   //初始化  
        var charts = { // 按顺序排列从大到小
            cityList: ['地理位置', '价格影响', '口味丰富度', '宣传是否到位', '呜呜呜不知道'],
            cityData: [15, 30, 30, 20, 5]
        }
        var top10CityList = charts.cityList
        var top10CityData = charts.cityData
        var color = ['rgba(248,195,248', 'rgba(100,255,249', 'rgba(135,183,255', 'rgba(248,195,248', 'rgba(100,255,249']

        let lineY = []
        for (let i = 0; i < charts.cityList.length; i++) {
            let x = i
            if (x > color.length - 1) {
                x = color.length - 1
            }
            let data = {
                name: charts.cityList[i],
                color: color[x] + ')',
                value: top10CityData[i],
                itemStyle: {
                    normal: {
                        show: true,
                        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                            offset: 0,
                            color: color[x] + ', 0.3)'
                        }, {
                            offset: 1,
                            color: color[x] + ', 1)'
                        }], false),
                        barBorderRadius: 10
                    },
                    emphasis: {
                        shadowBlur: 15,
                        shadowColor: 'rgba(0, 0, 0, 0.1)'
                    }
                }
            }
            lineY.push(data)
        }

        console.log(lineY)
        let option = {
            backgroundColor: '',
            title: {
                show: false
            },
            tooltip: {
                trigger: 'item'
            },
            grid: {
                borderWidth: 0,
                top: '10%',
                left: '5%',
                right: '15%',
                bottom: '3%'
            },
            color: color,
            yAxis: [{
                type: 'category',
                inverse: true,
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: false
                },
                axisLabel: {
                    show: false,
                    inside: false
                },
                data: top10CityList
            }, {
                type: 'category',
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: true,
                    inside: false,
                    textStyle: {
                        color: '#b3ccf8',
                        fontSize: '14',
                        fontFamily: 'PingFangSC-Regular'
                    },
                    formatter: function (val) {
                        return `${val}%`
                    }
                },
                splitArea: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                data: top10CityData
            }],
            xAxis: {
                type: 'value',
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                axisLabel: {
                    show: false
                }
            },
            series: [{
                name: '',
                type: 'bar',
                zlevel: 2,
                barWidth: '10px',
                data: lineY,
                animationDuration: 1500,
                label: {
                    normal: {
                        color: '#b3ccf8',
                        show: true,
                        position: [0, '-24px'],
                        textStyle: {
                            fontSize: 16
                        },
                        formatter: function (a, b) {
                            return a.name
                        }
                    }
                }
            }],
            animationEasing: 'cubicOut'
        }
        myEcharts.setOption(option)
    }
    useEffect(() => {
        initEcharts()
    }, [])
    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div>指标权重分析</div>
                <div ref={mainEchart} style={{ width: '90%', height: '45vh' }}></div>
            </div>
        </>
    )
}

export default App;