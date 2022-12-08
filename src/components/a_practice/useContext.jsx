// //在组件中共享状态，不用一层一层地去传 
// //在使用原始的context的api时，我们首先会在顶层声明Provider组件，并声明value属性，接着
// //在后代组件中声明Consumer子组件，并且只能是唯一的函数，函数参数即是context的负载
// // 若存在多个Context,Provider和Consumer按任意的顺序嵌套即可

// 在这里我们会看见点击子组件后，它的孙子组件也会发生渲染，这样就会导致不必要的性能开销，
// 注意哈，当useContext和memo一起使用时，如果点击子组件时会重复订阅context，并在孙子
// 组件中消费，那么此时在孙子组件中使用memo就会不起作用。但是，如果你订阅的不是具体值，而是订阅的
// 在初始化上下文时的默认值，那么此时memo就可以正常使用

// 如何解决重复渲染，优化性能的问题
// 分三种情况来解决：1.父组件没有props传入子组件，使用memo
// 2.父组件传的简单数据类型给子组件，使用memo,有两个参数，第二个参数就是传入的props，发生改变时会重新渲染
// 3.当传入的数据类型为方法时，在使用memo的同时，注意使用useCallback包裹该方法，注意依赖性的问题
// 3.父组件传的数据类型为对象或者数组给子组件，使用memo的同时，注意使用useMemo以方法形式返回该对象，
// 传入需要更新的依赖值

// usecallback要配合memo来使用。usecallback和usememo接受的参数都一样，都是在其依赖项发生改变后才执行。但是，usememo返回的是函数运行的结果，usecallback返回的是函数

// 一般在使用useContext时，我们并不需要手动设置类型，ts会自动识别类型。当然，也可以使用泛型来规定useContext的类型。

import React, { createContext, useContext, useState } from "react";
import { memo } from "react"



// 创造一个上下文
const P = createContext(null);
// 创造一个上下文 带默认值
const B = createContext({ value: 3333, count: 12121 });

// 子组件
const Pa = () => {
    // 获取 P--Context
    const { count, setCount } = useContext(P);
    const add = () => {
        setCount((n) => n + 1);
    };

    return <div onClick={add}>{count}</div>;
};

// 孙子组件
const Ba = memo(() => {
    // 获取 B--Context
    const value = useContext(B)
    console.log('value', value._currentValue2.count)
    return (
        <>
            <div>孙子组件{value._currentValue2.count}</div>
        </>
    )
})

// 孙子组件
const Bb = memo(() => {
    // 获取 P--Context
    // const count = useContext(P);    //加上p后点击子组件这个孙子组件就会重复渲染
    // 获取 B--Context
    const value = useContext(B);
    console.log(value._currentValue2.value);  //undifined
    return (
        <div>
            Bb==B==={value.value},Bb==B===默认值==={value._currentValue2.count},<br />
            {/* Pb--P==={count.count}, */}
        </div>
    )
})

// 子组件
const Pb = () => {
    // 获取 P--Context
    const { count, setCount } = useContext(P);
    const add = () => {
        setCount((n) => n + 1);
    };

    return (
        <div>
            <div onClick={add}>子组件{count}</div>
            {/* 加入新的 P--Context */}
            <P.Provider value={{ count: 2222 }}>
                <P.Provider value={{ count: 3333 }}>
                    <B.Provider value={B}>
                        <Bb></Bb>
                        <Ba></Ba>
                    </B.Provider>
                </P.Provider>
            </P.Provider>
        </div>
    );
};

// 顶级组件
const Home = (props) => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <P.Provider value={{ count, setCount }}>
                <Pa></Pa>
                <Pb></Pb>
            </P.Provider>
        </div>
    );
};

export default Home;