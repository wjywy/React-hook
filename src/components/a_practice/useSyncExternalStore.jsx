// 解决我们既使用redux，又开启conCurrent时出现的状态不一致的问题
// 通过强制的状态同步更新，使得外部store可以支持并步读取。它实现了对外部数据源订阅不再需要useEffect，
// 并且推荐用于任何与 React 外部状态集成的库。其实它就是将conCurrent模式变成了sync模式，即同步不可中断模式
// 用法：
// const value = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot )
// subscribe 是 external store 提供的 subscribe 方法；getSnapshot、getServerSnapshot 是用于获取指定
//  store 状态的方法，类似于 react-redux 中使用 useSelector 时需要传入的 selector，
// 一个用于客户端渲染，一个用于服务端渲染；返回值就是我们在组件中可用的 store 状态。



// 感觉没啥用，以后遇到了再细写