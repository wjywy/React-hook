import React from "react";
import * as echarts from 'echarts';
import { useEffect } from "react";
import { china } from '../../data/chinese/中华人民共和国'
import { chinaMapConfig } from "./config";
import { resData } from "./data";
import { useState, useRef, useMemo } from "react";
import Pieleft from './pie'
import BarLeft from './category/index'
import './home.css'

//当useeffect的依赖项为数组或者对象的时候，使用useMemo

const App = () => {
    let [id, setId] = useState(null)
    let main = useRef(null)
    const initEchart = () => {
        let myEcharts
        if (myEcharts != null && myEcharts !== "" && myEcharts !== undefined) {
            myEcharts.dispose();//销毁
        }
        myEcharts = echarts.init(main.current,)   //初始化
        myEcharts.setOption(
            chinaMapConfig({ data: resData.data, max: resData.max, min: 0 })[0], true
        );
        myEcharts.on('click', function (params) {     //点击函数，显示数据
            console.log('clickData', params)
            setId(id = params.name)
            console.log(id)
        })
    }
    useEffect(() => {
        echarts.registerMap("china", { geoJSON: china });   //注册地图
        initEchart()
    }, [id])
    return (
        <>
              <section className="sky">
                <span className="start"></span>
                <span className="start"></span>
                <span className="start"></span>
                <span className="start"></span>
                <span className="start"></span>
                <span className="start"></span>
                <span className="start"></span>
                <span className="start"></span>
                <span className="start"></span>
                <span className="start"></span>
                <span className="start"></span>
                <span className="start"></span>
                <span className="start"></span>
                <span className="start"></span>

            </section>
            <div className="home_total">
                <div style={{color:'white'}} className='home_left'>
                    <Pieleft />
                    <BarLeft />
                </div>
                <div className="home_divide">
                    <div ref={main} style={{width: '100%', height: '60vh' }}></div>
                </div>
                <div className="home_zhu">
                    {resData.data.map((item, index) => {
                        return id === item.name && <RightPicture item={item} key={index} />
                    })}
                </div>
            </div>
        </>
    )
}

export let RightPicture = (props) => {
    let [data, setData] = useState()
    let main1 = useRef(null)
    useEffect(() => {
        let myEcharts
        if (myEcharts != null && myEcharts !== "" && myEcharts !== undefined) {
            myEcharts.dispose();//销毁
        }
        myEcharts = echarts.init(main1.current, )
        setData(props.item.value, props.item.value, props.item.value)
        let option = {
                title: {
                       text: `${props.item.name}奶茶店数量`,
                       textStyle: {
                           left: 'center',
                           color: '#fff',
                           fontSize: 16,
                       },
                       top: '3%',
                       left: '10%',
                   },
               backgroundColor: '#0f375f',
               grid: {
                   top: "25%",
                   bottom: "10%"//也可设置left和right设置距离来控制图表的大小
               },
               tooltip: {
                   trigger: "axis",
                   axisPointer: {
                       type: "shadow",
                       label: {
                           show: true
                       }
                   }
               },
               xAxis: {
                   data: [
                       '奶茶店数量', 
                       '奶茶销售额'
                   ],
                   axisLine: {
                       show: true, //隐藏X轴轴线
                       lineStyle: {
                                   color: '#01FCE3'
                                   }
                   },
                   axisTick: {
                       show: true //隐藏X轴刻度
                   },
                   axisLabel: {
                       show: true,
                       textStyle: {
                           color: "#ebf8ac" //X轴文字颜色
                       }
                   },
                    
               },
               yAxis: [{
                       type: "value",
                       name: "个数",
                       nameTextStyle: {
                           color: "#ebf8ac"
                       },
                       splitLine: {
                           show: false
                       },
                       axisTick: {
                           show: true
                       },
                       axisLine: {
                           show: true,
                           lineStyle: {
                                       color: '#FFFFFF'
                                       }
                       },
                       axisLabel: {
                           show: true,
                           textStyle: {
                               color: "#ebf8ac"
                           }
                       },
                        
                   },
                   {
                       type: "value",
                       gridIndex: 0,
                       min: 50,
                       max: 100,
                       splitNumber: 8,
                       splitLine: {
                           show: false
                       },
                       axisLine: {
                           show: false
                       },
                       axisTick: {
                           show: false
                       },
                       axisLabel: {
                           show: false
                       },
                       splitArea: {
                           show: true,
                           areaStyle: {
                               color: ["rgba(250,250,250,0.0)", "rgba(250,250,250,0.05)"]
                           }
                       }
                   }
               ],
               series: [{
                       name: "销售奶茶量",
                       type: "line",
                       yAxisIndex: 1, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
                       smooth: true, //平滑曲线显示
                       showAllSymbol: true, //显示所有图形。
                       symbol: "circle", //标记的图形为实心圆
                       symbolSize: 10, //标记的大小
                       itemStyle: {
                           //折线拐点标志的样式
                           color: "#058cff"
                       },
                       lineStyle: {
                           color: "#058cff"
                       },
                       areaStyle:{
                           color: "rgba(5,140,255, 0.2)"
                       },
                       data: [data,data,data]
                   },
                   {
                       name: "所卖奶茶",
                       type: "bar",
                       barWidth: 15,
                       itemStyle: {
                           normal: {
                               color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                       offset: 0,
                                       color: "#00FFE3"
                                   },
                                   {
                                       offset: 1,
                                       color: "#4693EC"
                                   }
                               ])
                           }
                       },
                       data: [data,data]
                   }
               ]
        }
        console.log('data', data)
        myEcharts.setOption(option)
    }, [data, props])
    return (
        <div ref={main1} style={{ width: '83%', height: '35vh' }} className='home_right_bar'></div>
    )
}
export default App