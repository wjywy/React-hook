// 性能优化的手段
// useMemo会在渲染的时候执行，useEffect会在渲染之后执行，所以不推荐用useMemo来执行副作用
// 当返回的值是基本类型的时候，就不需要使用useMemo,当返回的值是复杂类型的时候，由于指向的地址会发生变化，
// 所以我们需要使用useMemo来记住这个值
// 当使用useContext时，只能使用useMemo来执行优化
// useMemo接受两个参数，分别是一个函数和一个数组(实际上是依赖)，函数里return函数，数组内存放依赖，
// 使用方法跟useEffect差不多.
// useMemo的写法：
// const App = () => {
//     const [m,setM] = useState('')
//     const addM = useMemo(() => {
//         return () => {
//             setM({m:m.m+1})
//         }
//     },[m])//表示监控m变化
// }

//useCallback是useMemo的语法糖
// useCallback的写法：
//   const addM = useCallback(() => {
//     setM({ m: m.m + 1 });
//   }, [m]); 


import React, { useCallback, useMemo, useState } from "react";

function App() {
  const [n, setN] = useState(0);
  const [m, setM] = useState({ m: 1 });
  console.log("执行最外层盒子了");
//   useMemo的写法
  const addN = useMemo(() => {
    return () => {
      setN(n + 1);
    };
  }, [n]);
//   useCallback的写法
  const addM = useCallback(() => {
    setM({ m: m.m + 1 });
  }, [m]);
  return (
    <>
      <div>
        最外层盒子
        <Child1 value={n} click={addN} />
        <Child2 value={m} click={addM} />
        <button onClick={addN}>n+1</button>
        <button onClick={addM}>m+1</button>
      </div>
    </>
  );
}
// Memo只会比较props，不会比较state
const Child1 = React.memo((props) => {
  console.log("执行子组件1了");
  return <div>子组件1上的n：{props.value}</div>;
});

const Child2 = React.memo((props) => {
  console.log("执行子组件2了");
  return <div>子组件2上的m：{props.value.m}</div>;
});
export default App

