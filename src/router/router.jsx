import { Routes, Route } from "react-router-dom";
import React from "react";
import UseLazy from "../hook/uselazy";

const Home = UseLazy(import("../pages/home/home"))
const Assay = UseLazy(import("../pages/assay/index"))
const Prediction = UseLazy(import("../pages/prediction/index"))
const Record = UseLazy(import("../pages/record/index"))
const TopTab = UseLazy(import("../components/topTab/index"))
const Province = UseLazy(import("../pages/province/index"))
const AssayTotal = UseLazy(import("../pages/assay/数据总览/index"))
const AssayDataOne = UseLazy(import("../pages/assay/数据一/index"))
const AssayDataTwo = UseLazy(import("../pages/assay/数据二/index"))


function Routers() {
    return (
        <Routes>
            <Route path="/top" element={<TopTab />}>
                <Route path="assay" element={< Assay />}>
                    <Route path="total" element={<AssayTotal />}></Route>
                    <Route path="dataOne" element={<AssayDataOne />}></Route>
                    <Route path="dataTwo" element={<AssayDataTwo />}></Route>
                </Route>
                <Route path="prediction" element={< Prediction />} />
                <Route path="province" element={<Province />} />
                <Route path="home" element={< Home />} />
                <Route path="Record" element={< Record />} />
            </Route>
        </Routes>
    )
}
export default Routers