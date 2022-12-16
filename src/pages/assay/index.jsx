import React from "react";
import { useEffect } from "react";
import {
    useState
} from 'react'

const App = () => {
    let [a,setA] = useState(6666)
    function vv () {
        setA(8888888)
        console.log(a)
    }

    function look () {
        console.log(a)
    }
    useEffect(() => {
        setA('qoqoqoqoqo')
        console.log(a)
    },[])
    return (
        <>
        <button onClick={vv}>点击搜索</button>
        <div onClick={look}>欢迎来到分析页面</div>
        </>
    )
}
export default App


