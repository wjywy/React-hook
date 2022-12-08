import React from "react";
import { createContext } from "react";
import { useContext,useState } from "react";

let TimeList = createContext(null)
// 父组件
const App = () => {
    const [count,setCount] = useState()
    return (
        <>
        <div >oh my god</div>
        <TimeList.Provider value={count}>
            <Son ></Son>
        </TimeList.Provider>
        </>
    )
}

// 子组件
let Son = () => {
    let sonValue = useContext(TimeList)
    return (
        <>
        <div>you are son{sonValue.value}</div>
        </>
    )
}
export default App