import { useRef } from "react";

const App = () => {
    // ref元素只有一个current属性，初始值为传入的参数(null),ref名需要和与后面的ref标签中的ref保持相同
    const getRef = useRef()
    function getInputThing () {
        console.log(getRef.current.value)
    }
    return (
        <>
        <input type="text" ref={getRef} onChange={getInputThing} />
        </>
    )
}

export default App