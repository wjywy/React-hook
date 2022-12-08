import { useRef } from "react";
import React from "react";

export default function AppRef () {
    // ref元素只有一个current属性，初始值为传入的参数(null),ref名需要和与后面的ref标签中的ref保持相同
    const getRef = useRef<HTMLInputElement>(null)    //使用标签属性
    function getInputThing () {
        if (getRef.current) {
            console.log('current',getRef.current.value)
        }
    }
    return (
        <>
        <input type="text" ref={getRef} onChange={getInputThing} placeholder={''} />
        </>
    )
}