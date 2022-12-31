import React,
{
    useRef,
    useEffect
} from 'react';
import { useState } from 'react';
import './index.css'

const App = () => {
    const bf_scroll = useRef(null)
    useEffect(() => {
        console.log(bf_scroll.current.scrollTop)
        setInterval(() => {
            bf_scroll.current.scrollTop = bf_scroll.current.scrollTop + 1
            if (bf_scroll.current.scrollTop === 142) {
                bf_scroll.current.scrollTop = 0
            }
        }, 100);
    },[])

    return (
        <>
            <div>
                <div style={{ textAlign: 'center', backgroundColor: '#56DFE2' }} className='index_bf_infor'>预警信息</div>
                <div className='index_bottomLeft'>
                    <div>用户</div>
                    <div>患病概率</div>
                    <div>相关指标</div>
                </div>
                <div className='index_element' ref={bf_scroll}>
                    <div style={{height: 150}}></div>
                    <div className='index_bottomLeft'>
                        <div>重庆</div>
                        <div>0.47</div>
                        <div>兵临倒闭</div>
                    </div>
                    <div className='index_bottomLeft'>
                        <div>重庆</div>
                        <div>0.47</div>
                        <div>兵临倒闭</div>
                    </div>
                    <div className='index_bottomLeft'>
                        <div>重庆</div>
                        <div>0.47</div>
                        <div>兵临倒闭</div>
                    </div>
                    <div className='index_bottomLeft'>
                        <div>重庆</div>
                        <div>0.47</div>
                        <div>兵临倒闭</div>
                    </div>
                    <div className='index_bottomLeft'>
                        <div>重庆</div>
                        <div>0.47</div>
                        <div>兵临倒闭</div>
                    </div>
                    <div className='index_bottomLeft'>
                        <div>重庆</div>
                        <div>0.47</div>
                        <div>兵临倒闭</div>
                    </div>
                    <div className='index_bottomLeft'>
                        <div>重庆</div>
                        <div>0.47</div>
                        <div>兵临倒闭</div>
                    </div>
                    <div className='index_bottomLeft'>
                        <div>重庆</div>
                        <div>0.47</div>
                        <div>兵临倒闭</div>
                    </div>
                    <div className='index_bottomLeft'>
                        <div>重庆</div>
                        <div>0.47</div>
                        <div>兵临倒闭</div>
                    </div>
                    <div className='index_bottomLeft'>
                        <div>重庆</div>
                        <div>0.47</div>
                        <div>兵临倒闭</div>
                    </div>
                    <div className='index_bottomLeft'>
                        <div>重庆</div>
                        <div>0.47</div>
                        <div>兵临倒闭</div>
                    </div>
                    <div className='index_bottomLeft'>
                        <div>重庆</div>
                        <div>0.47</div>
                        <div>兵临倒闭</div>
                    </div>
                    <div className='index_bottomLeft'>
                        <div>重庆</div>
                        <div>0.47</div>
                        <div>兵临倒闭</div>
                    </div>
                </div>
                {/* </div>
                </div> */}
            </div>
        </>
    )
}

export default App;