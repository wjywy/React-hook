import React, { useEffect, useState } from "react";
import { Outlet } from "react-router";
import { useNavigate } from "react-router";
import './index.css'

export const GetTime = () => {
    let [time,setTime] = useState(null)
    let timer
    function calTime() {
        let date = new Date()
        let year = date.getFullYear()
        year = year < 10 ? '0' + year : year
        let month = date.getMonth() + 1
        month = month < 10 ? '0' + month : month
        let day = date.getDate()
        day = day < 10 ? '0' + day : day
        let hour = date.getHours()
        hour = hour < 10 ? '0' + hour : hour
        let minute = date.getMinutes()
        minute = minute < 10 ? '0' + minute : minute
        let second = date.getSeconds()
        second = second < 10 ? '0' + second : second
        setTime(year + '-' + month + '-' + day + '-' + hour + ':' + minute + ':' + second) 
        timer = setTimeout( () => {
            calTime()
        }, 1000)
    }
    useEffect(() => {
        calTime()
        return () => {
            timer && clearTimeout(timer)
        }
    }, [])
    return (
        <>
            <div style={{marginRight:50,fontSize:16}}>{time}</div>
        </>
    )
}

const App = () => {
    let navigate = useNavigate()
    const to_home = () => {
        navigate('/top/home', { replace: false })
    }
    const to_assay = () => {
        navigate('/top/assay', { replace: false })
    }
    const to_prediction = () => {
        navigate('/top/prediction', { replace: false })
    }
    const to_province = () => {
        navigate('/top/province',{replace:false})
    }
    const to_record = () => {
        navigate('/top/record', { replace: false })
    }

    return (
        <>
            <div className="toptab_select_father">
                <div className="toptab_select">
                    <span style={{ color: 'white', fontSize: 16, marginLeft: 100 }}>茶饮品牌预测分析平台</span>
                    <div onClick={to_home}>首页</div>
                    <div onClick={to_assay}>指标分析</div>
                    <div onClick={to_prediction}>在线预测</div>
                    <div onClick={to_province}>省份信息</div>
                    <div style={{ marginRight: 300 }} onClick={to_record}>我的记录</div>
                    <GetTime />
                </div>
            </div>
            <Outlet />
        </>
    )
}
export default App