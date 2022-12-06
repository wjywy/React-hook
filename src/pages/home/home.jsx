import React from "react";
import * as echarts from 'echarts';
import { useEffect } from "react";
import {china} from '../../data/chinese/中华人民共和国'
import { chinaMapConfig } from "./config";
import { resData } from "./data";

const App = () => {
    const initEchart = () => {
        let myEcharts
        if (myEcharts != null && myEcharts !== "" && myEcharts !== undefined) {
            myEcharts.dispose();//销毁
        }
        myEcharts = echarts.init(document.getElementById('main'))   //初始化
        myEcharts.setOption(
            chinaMapConfig({ data: resData.data, max: resData.max, min: 0 })
    );
    }
    useEffect(() => {
        echarts.registerMap("china", { geoJSON: china });   //注册地图
        initEchart()
    },[])
    return (
        <>
        <div id="main" style={{width:'99%',height:'99vh'}}></div>
        </>
    )
}
export default App