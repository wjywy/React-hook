// useeffect基本用不着ts

// 跟数据计算无关的操作，即负效应操作使用useEffect
// useEffect常见的用途：
// 1.获取数据（data fetching）
// 2.事件监听或订阅（setting up a subscription）
// 3.改变 DOM（changing the DOM）
// 4.输出日志（logging）
// useEffect允许返回一个函数作为返回值，在组件卸载时，执行该函数，清理负效应
// 如果有多个负效应，应该使用多个useEffect，而不应该写在同一个useEffect里面

import React, { useState, useEffect } from 'react'

export default function App() {
    const [state, setstate] = useState<number>(0)

    useEffect(() => {
        document.title = `你点击了${state}次`
    })
    return (
        <div>
            <h1>{state}</h1>
            <button onClick={e => setstate(state + 1)}>点击</button>
        </div>
    )
}

