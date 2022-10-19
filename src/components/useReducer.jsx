// 对于复杂的state操作逻辑,嵌套的state的对象,使用useReducer

import { useReducer } from "react" //导入useReducer这个钩子函数

// 设定初始值为0
const initialState = {
    count:0                  
}

// 建立reducer函数
const reducer = (state = initialState, action) => {   
    switch (action.type) {
        case 'increment':
            return {count:state.count + 1}
        case 'decrement':
            return {count:state.count - 1}
        default:
            throw new Error();
    }
}

const App = () => {
//解构式,第二个参数为初始化的state，返回值为最新的state和dispatch函数(用来触发reducer函数,获取最新的state值)
    const [state,dispatch] = useReducer(reducer,initialState)   
    return (
        <>
        Count:{state.count}
        <button onClick = {() => {dispatch({type:'increment'})}}>+</button>
        <button onClick={() => {dispatch({type:'decrement'})}}>-</button>
        </>
    )
}
export default App