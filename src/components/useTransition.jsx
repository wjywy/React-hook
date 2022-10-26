// 使用 useTransition 时，react 会以 Concurrent 模式来协调 fiber tree。
// Concurrent 模式下，协调过程是并行可中断的，渲染进程不会长时间被阻塞，使得用户操作可以及时得到响应
// 每次通过useState触发更新时,react都会为更新安排一个task。触发更新的上下文不同，其task的优先级也不同，
// 相应的task的处理顺序也不同

import { useState } from "react";
import { useTransition } from "react";

const App = () => {
    // 返回一个isPending变量和一个startTransition方法。isPending来展示更新的状态，为true时
    // 表示还未开始处理，为false时表示开始处理更新。startTransition允许用户将回调中的各种UI
    // 的优先级设置为Transition
    // 高优先级更新会中断低优先级更新，为了防止低优先级更新一直被高优先级事件阻塞而得不到处理，
    // react为每种类型的更新设置了最迟必须处理时间——timeout，一般为5s
    const [isPending,startTransition] = useTransition()
    let [value, setValue] = useState('')
    const handleChange = (e) => {
        startTransition(() => setValue(e.target.value))
    }
    return (
        <>
            <input type="text" onChange={handleChange} />
            {isPending && <div>transition......</div> }
            {Array(10000).fill('a').map(() => {
                return (
                    <div>{value}</div>
                )
            })}
        </>
    )
}
export default App