import React, { Component } from 'react'
 
import * as echarts from 'echarts/core';
import { GridComponent } from 'echarts/components';
import { LineChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';
 
echarts.use(
    [GridComponent, LineChart, CanvasRenderer]
);
 
class test2 extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
 
    componentDidMount() {
        let myChart = echarts.init(document.getElementById("main"))
        myChart.setOption({
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [150, 230, 224, 218, 135, 147, 260],
                type: 'line'
            }]
        })
    }
 
    render() {
        return (
            <div id="main" style={{ width: 600, height: 600 }}></div>
        );
    }
}
 
export default test2;