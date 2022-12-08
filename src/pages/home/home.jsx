import React from "react";
import * as echarts from 'echarts';
import { useEffect } from "react";
import { china } from '../../data/chinese/中华人民共和国'
import { chinaMapConfig } from "./config";
import { resData } from "./data";
import { useState, useRef } from "react";
import Pieleft from './pie'
import './home.css'

const App = () => {
    let [id, setId] = useState(null)
    let main = useRef(null)
    const initEchart = () => {
        let myEcharts
        if (myEcharts != null && myEcharts !== "" && myEcharts !== undefined) {
            myEcharts.dispose();//销毁
        }
        myEcharts = echarts.init(main.current, 'dark')   //初始化
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
            <div className="home_total">
                <div style={{color:'white'}}>
                    <Pieleft />
                </div>
                <div className="home_divide">
                    <div ref={main} style={{width: '100%', height: '50vh' }}></div>
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
        myEcharts = echarts.init(main1.current, 'dark')
        setData(props.item.value, props.item.value, props.item.value)
        let option = {
            xAxis: {
                data: [props.item.name, '奶茶店数量', '奶茶销售额']
            },
            yAxis: {},
            series: [
                {
                    type: 'bar',
                    data: [data, data, data],
                    label: {
                        show: true
                    }
                }
            ]
        }
        console.log('data', data)
        myEcharts.setOption(option)
    }, [data, props])
    return (
        <div ref={main1} style={{ width: '100%', height: '50vh' }}></div>
    )
}
export default App