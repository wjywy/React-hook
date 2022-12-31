import React from 'react';
import TopLeft from '../数据总览/topLeft/index';
import TopRight from '../数据总览/topRight/index';
import BottomLeft from '../数据总览/bottomLeft/index';
import BottomRight from '../数据总览/bottomRight/index';
import './index.css';

function App() {
    return (
        <>
            <div className='assay_viewTotal'>
                <TopLeft />
                <TopRight />
                <BottomLeft />
                <BottomRight />
            </div>
        </>
    );
}

export default App