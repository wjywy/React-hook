import React from "react";
import PredicForm from './form-predic/index'
import PredicResult from './result/index'
// import { useSelector,useDispatch }from 'react-redux'
// import { changeName ,selectName} from "../slice";

const App = () => {
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
                <PredicForm />
                <PredicResult />
            </div>
        </>
    )
}
export default App