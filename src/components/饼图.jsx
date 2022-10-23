import React from "react"
import * as echarts from 'echarts/core'
import { useEffect } from "react"

const App = () => {
    useEffect(() => {
        let myEchart
        if (myEchart != null && myEchart !== "" && myEchart !== undefined) {
            myEchart.dispose();//销毁
        }
        myEchart = echarts.init(document.getElementById('main3'))
        let option = {
            title: {
              text: '圆环图的例子',
              left: 'center',
              top: 'center'
            },
            series: [
              {
                type: 'pie',
                data: [
                  {
                    value: 335,
                    name: 'A'
                  },
                  {
                    value: 234,
                    name: 'B'
                  },
                  {
                    value: 1548,
                    name: 'C'
                  }
                ],
                // radius，设置饼状图的半径，相比于较小的宽高
                // radius:'50%'

                // 圆环图，将radius写成数组的形式，会自动使用较小的作为内半径
                radius: ['40%', '70%']
              }
            ]
          };
        myEchart.setOption(option)
    })
    return (
        <div id="main3" style={{width:300,height:300}}></div>
    )
}

export default App