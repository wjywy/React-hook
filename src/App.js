import AppRef from './components/useRef.tsx'
import TestEffect from './components/useEffect.tsx'
import Echarts from './components/折线图.jsx'
import TestEcharts from './components/echartsDetail.jsx'
import DynamicEcharts from './components/动态排序柱状图.jsx'
import PieEcharts from './components/饼图.jsx'
import TestZhu from './components/柱状图.jsx'
import TestTransition from './components/useTransition.jsx'
import TestImperativeHandle from './components/useImperativeHandle.jsx'
import TestUseContext from './components/useContext.jsx'
import TestUseReducer from './components/useReducer.tsx'
// import TestContext from './components/useContext示例.jsx'
import ListForever from './list_false/index.jsx'

import './App.css';

function App() {
  return (
    <>
    <TestUseReducer/>
    <TestUseContext/>
    <AppRef/>
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
