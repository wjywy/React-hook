import React from "react";
import { useSelector,useDispatch }from 'react-redux'
import { changeName ,selectName} from "../slice";

const App = () => {
    const name = useSelector( selectName )
    console.log('name',name)
    const dispatch = useDispatch()
    return (
        <>
        <div>{name}</div>
        <button onClick={() => dispatch(changeName())}>改变</button>
        </>
    )
}
export default App