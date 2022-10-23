import * as echarts from 'echarts/core';
import { useEffect } from 'react';
import React from 'react';

const Picture = () => {
    useEffect(() => {
        let myEchart
        if (myEchart != null && myEchart !== "" && myEchart !== undefined) {
            myEchart.dispose();//销毁
        }
        myEchart = echarts.init(document.getElementById('main2'))
        let data = [];
        for (let i = 0; i < 5; ++i) {
            data.push(Math.round(Math.random() * 200));
        }
        let option = {
            // 关闭动画
            // animation:false
            
            // animationDelay和animationDelayUpdate用于设置动画延迟开始的时间，
            // 通常我们会使用回调函数将不同数据设置不同的延时来实现交错动画的效果：

            xAxis: {
                // 表示用数据的最大值作为X轴最大值
                max: 'dataMax'
            },
            yAxis: {
                type: 'category',
                data: ['A', 'B', 'C', 'D', 'E'],
                // inverse为true代表Y轴从下往上是从小到大的排列
                inverse: true,
                // 表示第一次柱条排序动画的时长,时长设置要与animationDurationUpdate相同
                animationDuration: 300,
                // 表示第一次后柱条排序动画的时长
                animationDurationUpdate: 300,
                // y轴上有max+1列
                max: 4 
            },
            series: [
                {
                    // realtimeSort为true代表开启该系列的动态排序效果
                    realtimeSort: true,
                    name: 'X',
                    type: 'bar',
                    data: data,
                    label: {
                        show: true,
                        position: 'right',
                        // valueAnimation为true表示实时改变标签
                        valueAnimation: true
                    }
                }
            ],
            legend: {
                show: true
            },
            // 表示是否从0开始动画
            animationDuration: 3000,
            // 表示每次更新动画的时长，应与setOption改变数据的频率相同
            animationDurationUpdate: 3000,

            animationEasing: 'linear',
            animationEasingUpdate: 'linear'
        };

        function update() {
            let data = option.series[0].data;
            for (var i = 0; i < data.length; ++i) {
                if (Math.random() > 0.9) {
                    data[i] += Math.round(Math.random() * 2000);
                } else {
                    data[i] += Math.round(Math.random() * 200);
                }
            }
            myEchart.setOption(option);
        }
        setInterval(() => {
            update();
        }, 3000);

    },[])
    return (
        <div id='main2' style={{width:500,height:300}}></div>
    )
}
export default Picture


