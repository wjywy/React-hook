import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import './index.css';

const App = () => {
    const [record, setCord] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3000/record')
            .then((res) => {
                console.log(res.data.msg)
                setCord(res.data.msg)
            })
            .catch((res) => {
                console.log(res)
            })
    }, [])
    return (
        <>
            <div style={{ width: '60vw', height: '30vh', marginTop: '20px' }}>
                <div style={{ backgroundColor: 'white', height: '40px', paddingTop: '10px', paddingLeft: '1vw' }}>预测记录</div>
                <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: 'grey', }} >
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                        <span>血压高压</span><span>总胆固醇</span><span>用户名称</span><span>指导意见</span><span>预测时间</span><span>患病风险</span>
                    </div>
                    <div style={{ overflowY: 'scroll', height: '190px' }} className='listBox' >
                        {record.map((item, index) => {
                            return (
                                <Fragment key={`${item.time}${index}`}>
                                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', marginTop: '10px', fontSize: '12px' }}>
                                        <span>血压高压</span><span>总胆固醇</span><span>用户名称</span><span>指导意见</span><span>预测时间</span>
                                        <div style={{ width: '70px', textAlign: "center", backgroundColor: '#1EF9F0' }}>患病风险</div>
                                    </div>
                                </Fragment>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}
export default App