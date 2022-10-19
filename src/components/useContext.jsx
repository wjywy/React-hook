//在组件中共享状态，不用一层一层地去传 
//在使用原始的context的api时，我们首先会在顶层声明Provider组件，并声明value属性，接着
//在后代组件中声明Consumer子组件，并且只能是唯一的函数，函数参数即是context的负载
// 若存在多个Context,Provider和Consumer按任意的顺序嵌套即可

import React from "react";

import { useContext } from "react";

// 返回一个具有两个值的对象,{Provider,Consumer}
const numberContext = React.createContext()

const App = () => {
    return (
// 使用Provider为所有子孙提供value值

        <>
        <numberContext.Provider value = {520}>
            <div>
                <ShowAn></ShowAn>
            </div>
            </numberContext.Provider> 
        </>
    )
}

const ShowAn = () => {
// 调用Consumer从上下文中获取value
// 调用useContext，传入从React.createContext获取的上下文对象
    const value = useContext(numberContext)
    return (
        <>
        <div>
            the answer is {value}
        </div>
        </>
    )
}
export default App