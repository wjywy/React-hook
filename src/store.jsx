import { configureStore } from "@reduxjs/toolkit";
import pageReducer from './pages/slice'

export default configureStore ({
    reducer: {
        couter:pageReducer    //该死  问题竟出在这里
    }
})