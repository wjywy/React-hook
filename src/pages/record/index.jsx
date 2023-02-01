import React, { Fragment, useEffect, useState } from "react";
import PrePicture from './prePicture/index'
import PreHistroy from './preHistory/index'
import PreAverage from './preAverage/index'
import NewDanger from './newDanger/index'
import axios from "axios";

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
            <section className="sky">
                <span className="start"></span>
                <span className="start"></span>
                <span className="start"></span>
                <span className="start"></span>
                <span className="start"></span>
                <span className="start"></span>
                <span className="start"></span>
                <span className="start"></span>
                <span className="start"></span>
                <span className="start"></span>
                <span className="start"></span>
                <span className="start"></span>
                <span className="start"></span>
                <span className="start"></span>

            </section>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <PrePicture />
                <PreAverage />
            </div>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <NewDanger />
                <PreHistroy />
            </div>
        </>
    )
}
export default App