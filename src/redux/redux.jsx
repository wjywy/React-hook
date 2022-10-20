// action是一个具有type字段的普通js对象
// type是一个字符串，给这个action一个描述的名字
// action对象可以有其他字段，其中包含有关发生事情的其他信息，我们把这些信息存放在payload里面

// 一个典型的action对象
const addTodoAction = {
    type: 'todos/todoAdded',
    payload: 'Buy milk'
}


// Reducer——reducer是一个函数，它接受一个state和一个action对象，必要时决定如何更新状态，并返回新状态
// 可以将reducer作为一个函数监听器，它根据接收到的action(事件)类型处理对应的事件
// 规则：1.仅使用 state 和 action 参数计算新的状态值
//       2.禁止直接修改state，必须先对state进行复制后才能对齐进行相对应的修改

// 一个使用reducer的小栗子
const initialState = { value: 0 }

function counterReducer(state = initialState, action) {
  // 检查 reducer 是否关心这个 action
  if (action.type === 'counter/increment') {
    // 如果是，复制 `state`
    return {
      ...state,
      // 使用新值更新 state 副本
      value: state.value + 1
    }
  }
  // 返回原来的 state 不变
  return state
}


// store——当前Redux应用的state存放于一个store的对象之中
// store是通过传入一个reducer函数来创建的,并且有一个名为getState的方法，它返回当前状态值
// 一个小栗子
// import { configureStore } from '@reduxjs/toolkit'
// const store = configureStore({ reducer: counterReducer })
// console.log(store.getState())  // {value: 0}


// Dispatch——Redux中有一个方法叫做Dispatch，更新State的唯一方法就是调用Store.dispatch()并传入
// 一个action对象。store将执行所有的reducer函数并计算出更新后的state值,我们可以采取getstate()来
// 返回当前状态值。其作用简洁来说就是监听起更新作用,后续可以通过selector拿值
// 一个小栗子
// const increment = () => {
//     return {
//       type: 'counter/increment'
//     }
//   }
//   store.dispatch(increment())
//   console.log(store.getState())   // {value: 2}


// Selector——selector函数可以从store状态树中提取指定的片段，selector可以避免重复这样的读取逻辑


// 步骤详解
// 初始启动
// 1.创建store——使用最顶层的 root reducer
// 2.store 调用一次 root reducer，并将返回值保存为它的初始 state
// 3.当视图 首次渲染时，视图组件访问 Redux store 的当前 state，并使用该数据来决定要呈现的内容。同时监听 store 的更新，以便他们可以知道 state 是否已更改
// 更新环节：
// 1.应用程序中发生了某些事情，例如用户单击按钮
// 2.dispatch 一个 action 到 Redux store，例如 dispatch({type: 'counter/increment'})
// 3.store 用之前的 state 和当前的 action 再次运行 reducer 函数，并将返回值保存为新的 state
// 4.store 通知所有订阅过的视图，通知它们 store 发生更新
// 5.每个订阅过 store 数据的视图 组件都会检查它们需要的 state 部分是否被更新。
// 6.发现数据被更新的每个组件都强制使用新数据重新渲染，紧接着更新网页
