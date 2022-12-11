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
    let [local,setLocal] = useState(null)
    let [ref,setRef] = useState(null)
    let [foot,setFoot] = useState(true)  //开启步行路线查询
    let [bus,setBus] = useState(true)   //开启汽车路线查询

    // 定位当前城市
    function getLocalCity () {
        let locatCity = new window.BMapGL.LocalCity()
        locatCity.get((e) => {
            console.log('localEEEE', e)
            setLocal(e.name) 
            console.log('local', local)
        })
    }

    // 获取搜素框的值
    async function inputSearch(valueSearch, e) {
        console.log('antdSearch', valueSearch)
        getLocalCity()
        setValue(valueSearch)
        console.log('inputvalue',value)
        getCenter(maptop)
        getWalkingInfo(maptop)
    }

    // 得到map实例
    function getMap(ref) {
        if (ref !== null && ref.map) {
            setMap(ref.map)
        }
    }

    // 点击开始搜索之后显示的区域
    function getCenter (map) {
        map.centerAndZoom('重庆', 11)
        let localvalue = new window.BMapGL.LocalSearch(map, {
            renderOptions: { map: map}
        })
        console.log('value', value)
        localvalue.search( value )
    }

    // 两地之间的路线规划图
    function getWalkingInfo (map) {
        map.enableScrollWheelZoom()
        let walking = new window.BMapGL.WalkingRoute(map,{
            renderOptions:{map:map,panel:'r-result' ,autoViewport:true}
        })
        console.log('location',local)
        walking.search(local,value)
    }
    // useEffect(() => {
    //     console.log('maptop',maptop)
    //     getWalkingInfo(maptop)
    // },[value])

    return (
        <>
            <Search placeholder="请输入查询种类" id="ac" className="searchInput" enterButton="点击搜索" onSearch={inputSearch} />
            <div className="province_map_result">
            <Map
                ref={(ref) => getMap(ref)}
                // center={{ lng: 116.402544, lat: 39.928216 }}
                // zoom="11"
                className={'province_map'}
                enableScrollWheelZoom>
                <Marker position={{ lng: 116.402544, lat: 39.928216 }}   //标注点的坐标，可以通过设置state时代每次点击标注点就改变此位置
                    autoViewport   //自动聚焦视野
                    enableDragging />   {/*marker在地图上绘制简单的标注点，此属性是是否可拖拽 */}
                <NavigationControl />
                {/* <InfoWindow position={{ lng: 116.402544, lat: 39.928216 }}>
                </InfoWindow> */}
                <CityListControl />  {/*当宽度大于400且高度大于350时才会显示出来，有三个属性，分别是map(会主动继承父级实例),anchor,offset*/}
                <MapTypeControl />   {/*地图类型控件，默认位于地图右上角*/}
                <ScaleControl />
            </Map>
            <div id="r-result" className="r-result"></div>
            </div>
            <AutoComplete
                input='ac'    //挂载的元素ID，若传值为空，则会自动生成一个input元素
                location='全国'   //设定所属结果的返回范围
            />
        </>
    )
}

export default App