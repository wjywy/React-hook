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
        let option = {
            title: {
                text:'实时预测茶饮品牌销售额走向',
                textStyle:{
                    fontSize:12
                }
            },
            xAxis:{},
            toolTip:{

            },
            legend:{
                data:['销售额'],
                left:'right'
            },
            yAxis:{
                type:'category',
                data:['茶百道','喜茶','星巴克','书亦','蜜雪']
            },
            series:[{
                name:'销售额',
                type:'bar',
                data:[34,32,67,43,78]
            }]
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