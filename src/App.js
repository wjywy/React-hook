import TestRef from './components/useRef.jsx'
import TestEffect from './components/useEffect.jsx'
import Echarts from './components/折线图.jsx'
import TestEcharts from './components/echartsDetail.jsx'
import DynamicEcharts from './components/动态排序柱状图.jsx'
import PieEcharts from './components/饼图.jsx'
import TestZhu from './components/柱状图.jsx'
import TestTransition from './components/useTransition.jsx'
import TestImperativeHandle from './components/useImperativeHandle.jsx'
import ListForever from './虚拟列表/index.jsx'

import './App.css';

function App() {
  return (
    <>
    <TestRef/>
    <TestEffect/>
    <TestEcharts/>
    <Echarts/>
    <DynamicEcharts/>
    <PieEcharts/>
    <TestTransition/>
    <TestImperativeHandle/>
    <TestZhu/>
    <ListForever />
    </>
  );
}

export default App;
