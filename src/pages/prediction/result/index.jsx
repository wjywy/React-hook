import './index.css'
const App = () => {
    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ height: '50%', color: 'white' }} className='resultBorder'>预测结果</div>
                <div style={{ height: '50%', color: 'white' }} className='resultBorder'>指导意见</div>
            </div>
        </>
    )
}
export default App;