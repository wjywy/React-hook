import React from "react"
import * as echarts from 'echarts/core'
import { useEffect } from "react"
import cookieData from '../staticData/asyncData.json'

const App = () => {
    useEffect(() => {
        let myEchart
        if (myEchart != null && myEchart !== "" && myEchart !== undefined) {
            myEchart.dispose();//销毁
        }
        // 内置的dark主题
        myEchart = echarts.init(document.getElementById('main3'))
        let option = {
            // 对图形的解释部分
            legend:{
                padding:0,
                // 设置图例的朝向，vertical是指垂直方向，horizontal是水平方向
                orient:'horizontal',
                // 设置图例在X轴方向上的位置以及在Y轴方向上的位置
                // x轴方向有left、center、right三个值
                // y轴方向有top、center、bottom三个值
                x:'center',
                y:'top',
                // 设置图例之间的间距
                itemGap:40,
                // 控制图例图形的高度
                itemHeight:50,
                // 设置图例的某个选项的数据默认是显示还是隐藏。
                selected:true,

                // 图例上显示的文字信息，如果不设置该项，默认会以series设置的信息作为图例信息。
                // 如果设置该项，必须与series设置的信息一致，才会生效。
                // 该属性的作用：可以直接对某一项图例设置样式
                data:[{
                    name:'A',
                    textStyle: {fontWeight: 'bold', color: 'orange'}
                },'B','C']
            },

            // tooltip:提示框组件，用于配置鼠标滑过或点击图表时的显示框。
            // tooltip:{

            // },

            title: {
                text: '圆环图的例子',
                left: 'center',
                top: 'center'
            },
            // 全局调色盘，给定了一组颜色，系列会自动的从其中选择颜色。也可以设置局部调色盘
            color: [
                '#c23531',
                '#2f4554',
                '#61a0a8',
                '#d48265',
                '#91c7ae',
                '#749f83',
                '#ca8622',
                '#bda29a',
                '#6e7074',
                '#546570',
                '#c4ccd3'
            ],
            series: [
                {
                    type: 'pie',
                    data: cookieData,

                    // radius，设置饼状图的半径，相比于较小的宽高
                    // radius:'50%'

                    // 圆环图，将radius写成数组的形式，会自动使用较小的作为内半径
                    radius: ['40%', '70%']
                },
            ]
        };
        myEchart.setOption(option)
    })
    return (
        <div id="main3" style={{ width: 300, height: 400 }}></div>
    )
}

export default App