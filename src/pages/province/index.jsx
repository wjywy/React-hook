import React from "react";
import {
    Map,
    Marker,
    NavigationControl,
    InfoWindow,
    CityListControl,
    MapTypeControl,
    ScaleControl,
    AutoComplete   //是结果提示、自动完成类，不依赖地图进行展示，是仅调用地图API的服务
} from 'react-bmapgl';
import { useState, useEffect, useRef } from "react";
import { Button, Input } from "antd";
import './index.css'

const { Search } = Input

const App = () => {
    let [value, setValue] = useState(null)
    let [maptop, setMap] = useState(null)

    function inputSearch(value, e) {
        console.log('antdSearch', value)
        setValue(value)
    }

    function getMap(ref) {
        if (ref !== null) {
            setMap(ref.map)
            if (maptop != null) {
                console.log('ref', maptop)
                maptop.centerAndZoom(new window.BMapGL.Point(116.404, 39.195), 11)
                let local = new window.BMapGL.LocalSearch(maptop, {
                    renderOptions: { map: maptop }
                })
                console.log('value', value)
                local.search(value)
            }
        }
    }

    return (
        <>
            <Search placeholder="请输入查询种类" id="ac" className="searchInput" enterButton="点击搜索" onSearch={inputSearch} />
            <Map
                ref={(ref) => getMap(ref)}
                center={{ lng: 116.402544, lat: 39.928216 }}
                zoom="11"
                className={'province_map'}
                enableScrollWheelZoom>
                <Marker position={{ lng: 116.402544, lat: 39.928216 }}   //标注点的坐标，可以通过设置state时代每次点击标注点就改变此位置
                    autoViewport   //自动聚焦视野
                    enableDragging />   {/*marker在地图上绘制简单的标注点，此属性是是否可拖拽 */}
                <NavigationControl />
                <InfoWindow position={{ lng: 116.402544, lat: 39.928216 }} title="请输入当前区域">
                </InfoWindow>
                <CityListControl />  {/*当宽度大于400且高度大于350时才会显示出来，有三个属性，分别是map(会主动继承父级实例),anchor,offset*/}
                <MapTypeControl />   {/*地图类型控件，默认位于地图右上角*/}
                <ScaleControl />
            </Map>
            <AutoComplete
                input='ac'    //挂载的元素ID，若传值为空，则会自动生成一个input元素
                location='中国'   //设定所属结果的返回范围
            // onSearchComplete={(e) => { //在input框输入字符后，发起列表检索，完成后的回调函数
            //     searchComplete(e)
            // }}
            />
        </>
    )
}

export default App