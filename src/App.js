import TestRef from './components/useRef.jsx'
import TestEffect from './components/useEffect.jsx'
import Echarts from './components/折线图.jsx'
import TestEcharts from './components/echartsDetail.jsx'
import DynamicEcharts from './components/动态排序柱状图.jsx'
import './App.css';

function App() {
  return (
    <>
    <TestRef/>
    <TestEffect/>
    <TestEcharts/>
    <Echarts/>
    <DynamicEcharts/>
    </>
  );
}

export default App;
