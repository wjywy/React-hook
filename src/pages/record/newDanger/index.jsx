import React from "react";

const App = () => {
    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column', marginTop: '20px' }}>
                <div style={{ width: '40vw', height: '15vh', display: 'flex', flexDirection: 'row' }}>
                    <div style={{ width: '8%', height: '100%', backgroundColor: '#FB671D' }}></div>
                    <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: 'white', width: '85%', alignItems: 'center', justifyContent: 'center' }}>
                        <div>最新风险</div>
                        <div>0.62</div>
                        <div style={{ width: '50%', height: '20px', backgroundColor: '#0270E4' }}></div>
                    </div>
                </div>
                <div style={{ width: '40vw', height: '15vh', marginTop: '10px', display: 'flex', flexDirection: 'row' }}>
                    <div style={{ width: '8%', height: '100%', backgroundColor: '#02B2DB' }}></div>
                    <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: 'white', width: '85%', alignItems: 'center', justifyContent: 'center' }}>
                        <div>预测次数</div>
                        <div>12</div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default App