import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import {
    useState,
    useEffect
} from 'react'
import './index.css'

const App = () => {
    let navigate = useNavigate()
    const to_total = () => {
        navigate('/top/assay/total', { replace: false })
    }

    const to_dataOne = () => {
        navigate('/top/assay/dataOne', { replace: false })
    }

    const to_dataTwo = () => {
        navigate('/top/assay/dataTwo', { replace: false })
    }
    return (
        <>
            <div className="array_total">
                <div className="array_fix">
                    <div onClick={to_total} className='home_left_pie array_size' >数据总览</div>
                    <div onClick={to_dataOne} className='home_left_pie array_size'>数据一</div>
                    <div onClick={to_dataTwo} className='home_left_pie array_size'>数据二</div>
                </div>
                <div className="array_flexible">
                    <Outlet />
                </div>
            </div>
        </>
    )
}
export default App


