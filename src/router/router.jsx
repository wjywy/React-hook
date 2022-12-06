import { Routes, Route} from "react-router-dom";
import React from "react";
import UseLazy from "../hook/uselazy";

const Home = UseLazy(import("../pages/home/home"))

function Routers () {
    return (
        <Routes>
            <Route path="/" element={< Home />}  />
        </Routes>
    )
}
export default Routers