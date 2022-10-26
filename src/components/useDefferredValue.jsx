// 可让我们延迟渲染不紧急的部分，类似于防抖但没有固定的延迟时间，延迟的渲染会在
// 紧急的部分先出现在浏览器屏幕以后才开始，并且可中断不会阻塞用户输入
// 跟useTransition很相似
import { useState,useDeferredValue } from "react"

const App = () => {
    const [value,setValue] = useState('')
    const query = useDeferredValue(value)
    const handleChange = (e) => {
        setValue(e.target.value)
    }
    return (
        <>
        <button>useDeferredValue</button>
        <input type="text" placeholder="请输入内容" onChange={handleChange} value={value} />
        <ul>
            <li>列表</li>
        </ul>
        </>
    )
}
export default App