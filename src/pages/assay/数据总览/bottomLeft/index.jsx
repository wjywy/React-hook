import React,
{
    useRef,
    useEffect
} from 'react';
import * as echarts from 'echarts';

function App() {
    const mainEchart = useRef()
    const initEcharts = () => {
        let myEcharts
        if (myEcharts != null && myEcharts !== "" && myEcharts !== undefined) {
            myEcharts.dispose();//销毁
        }
        myEcharts = echarts.init(mainEchart.current,)   //初始化
        let option = {

        }
    }
    return (
        <>
            <div>
                <div>bottomLeft</div>
                <div ref={mainEchart}></div>
            </div>
        </>
    )
}

export default App;