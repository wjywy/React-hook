import React, {
    useRef,
    useEffect
} from 'react';
import * as echarts from 'echarts';

const App = () => {
    let mainPie = useRef(null)
    const initEcharts = () => {
        let myEcharts
        if (myEcharts != null && myEcharts !== "" && myEcharts !== undefined) {
            myEcharts.dispose();//销毁
        }
        myEcharts = echarts.init(mainPie.current)

        let option = {
            toolbox: {
                show: true,
                feature: {
                    mark: {
                        show: true
                    },
                    dataView: {
                        show: true,
                        readOnly: false
                    },
                    magicType: {
                        show: true,
                        type: ['pie', 'funnel']
                    },
                    restore: {
                        show: true
                    },
                    saveAsImage: {
                        show: true
                    }
                }
            },
            calculable: true,
            "tooltip": {
                "trigger": "item",
            },
            "title": {
                "text": "因素占比分析",
                "left": "center",
                "top": 5,
                "textStyle": {
                    "color": "#ccc"
                }
            },
            "calculable": true,
            "legend": {
                "icon": "circle",
                "x": "center",
                "y": "10%",
                "data": [
                    "地理位置",
                    "价格高低",
                    "风评好坏",
                    "品牌高端与否",
                    "门面是否美观",
                ],
                "textStyle": {
                    "color": "#fff"
                }
            },
            "series": [{
                // "name": "XX线索",
                "type": "pie",
                "radius": [
                    30,
                    100
                ],
                "avoidLabelOverlap": false,
                "startAngle": 0,
                "center": [
                    "50%",
                    "52%"
                ],
                "roseType": "area",
                "selectedMode": "single",
                "label": {
                    "normal": {
                        "show": true,
                    },
                    "emphasis": {
                        "show": true
                    }
                },
                "labelLine": {
                    "normal": {
                        "show": true,
                        "smooth": false,
                        "length": 10,
                        "length2": 5
                    },
                    "emphasis": {
                        "show": true
                    }
                },
                "data": [{
                    "value": '23',
                    "name": `地理位置` + `\n`  + `占比23%`,
                    "itemStyle": {
                        "normal": {
                            "color": "#33FFCC"
                        }
                    }
                },
                {
                    "value": '15',
                    "name": "价格高低" + `\n` + '占比15%',
                    "itemStyle": {
                        "normal": {
                            "color": "#33CCFF"
                        }
                    }
                },
                {
                    "value": '34',
                    "name": "风评好坏" + `\n` + '占比34%',
                    "itemStyle": {
                        "normal": {
                            "color": "#0096f3"
                        }
                    }
                },
                {
                    "value": '23',
                    "name": "品牌高端与否" + `\n` + '占比23%',
                    "itemStyle": {
                        "normal": {
                            "color": "#00c0e9"
                        }
                    }
                },
                {
                    "value": '12',
                    "name": "门面是否美观" + `\n` + '占比12%',
                    "itemStyle": {
                        "normal": {
                            "color":'#00e9db',
                        }
                    }
                },
                ]
            }]
        }
        myEcharts.setOption(option)
    }
    useEffect(() => {
        initEcharts()
    }, [])

    return (
        <>
            <div ref={mainPie} style={{ width: '83%', height: '35vh' }} className='home_left_pie'></div>
        </>
    );
};
export default App;