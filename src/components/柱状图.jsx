import * as echarts from 'echarts/core'
import { useEffect } from 'react'
import React from "react"
const App = () => {
    useEffect(() => {
        let myEcharts
        if (myEcharts != null && myEcharts !== "" && myEcharts !== undefined) {
            myEcharts.dispose();//销毁
        }
         myEcharts = echarts.init(document.getElementById('main5'))
        let option = {
          legend:{
            data:[
              '35-44岁','45-54岁','55-64岁','65岁以上'
            ]
          },
            xAxis: {
              data: ['35-44岁', '45-54岁','55-64岁','65岁以上']
            },
            yAxis: {},
            title:{
              text:'各个年龄段的患病占比'
            },
            series: [
              {
                type: 'bar',
                data: [5.1, 16.5,36.9,48.1],
                label:{
                    show:true
                }
              }
            ]
          };
          myEcharts.setOption(option)
    })
      return (
        <div id="main5" style={{width:400,height:400}}></div>
      )
     
}
export default App