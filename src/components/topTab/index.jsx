import React, { Fragment, useEffect, useState } from "react";
import { Outlet } from "react-router";
import { useNavigate, useLocation } from "react-router";
import './index.css'

export const GetTime = () => {
    let [time, setTime] = useState(null)
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
        timer = setTimeout(() => {
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
            <div style={{ marginRight: 50, fontSize: 16 }}>{time}</div>
        </>
    )
}

const App = () => {
    const location = useLocation()
    const [select, setSelect] = useState(location.pathname.slice(5))
    const tab = [{
        key: 'home',
        value: '首页'
    }, {
        key: 'assay',
        value: '指标分析'
    }, {
        key: 'prediction',
        value: '在线预测'
    }, {
        key: 'province',
        value: '省份信息'
    }, {
        key: 'record',
        value: '我的记录'
    }]
    let navigate = useNavigate()
    const to_navigate = (url) => {
        console.log(location.pathname.slice(5))
        setSelect(url)
        navigate(`/top/${url}`, { replace: false })
    }

    return (
        <>
            <div className="toptab_select_father">
                <div className="toptab_select">
                    <span style={{ color: 'white', fontSize: 16, marginLeft: 100 }}>茶饮品牌预测分析平台</span>
                    {tab.map((item, index) => {
                        return (
                            <Fragment key={`${item.key}${index}`}>
                                <div style={index === 4 ? { marginRight: '300px' } : {}} onClick={() => to_navigate(item.key)} className={item.key === select ? 'select' : ''}>
                                    {item.value}</div>
                            </Fragment>
                        )
                    })}
                    <GetTime />
                </div>
            </div>
            <Outlet />
        </>
    )
}
export default App