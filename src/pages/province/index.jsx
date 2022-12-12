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
// import { configConsumerProps } from "antd/es/config-provider";

const { Search } = Input

const App = () => {
    let [value, setValue] = useState('重庆市')
    let [maptop, setMap] = useState(null)
    let [local, setLocal] = useState(null)
    let [localPoint, setLocalPoint] = useState(null) //开启本地经纬度转换
    let [valuePoint, setValuePoint] = useState(null) //开启目标区域经纬度转换
    let typeValue = 1 // 开启目标区域经纬度转换的开关
    let typeLocal = 2 //  开启本地经纬度转换的开关

    let value_result = useRef(null)  //获取多个查询结果

    const turnBus = () => {
        getBusInfo(maptop)
    }

    const turnFoot = () => {
        getWalkingInfo(maptop)
    }

    const turnCar = () => {
        getCarInfo(maptop)
    }

    // 定位当前城市
    function getLocalCity() {
        let locatCity = new window.BMapGL.LocalCity()
        locatCity.get((e) => {
            setLocal(e.name)
            console.log('local', local)
        })
    }

    // 获取搜素框的值
    function inputSearch(valueSearch, e) {
        console.log('antdSearch', valueSearch)
        getLocalCity()
        setValue(valueSearch)
        console.log('inputvalue', value)
        getCenter(maptop)
    }

    // 实时获取输入框的值
    function changeValue(e) {
        setValue(e.target.value)
        console.log('localPOint', localPoint.lng)
    }

    // 得到map实例
    function getMap(ref) {
        if (ref !== null && ref.map) {
            setMap(ref.map)
        }
    }

    // 点击开始搜索之后显示的区域
    function getCenter(map) {
        map.centerAndZoom('重庆', 11)
        let localvalue = new window.BMapGL.LocalSearch(map,
            {
                renderOptions: { map: map, panel: 'value_result' }
            },
        )
        let value_search = value_result.current.innerText
        console.log('value_result', value_search)
        console.log('value', value)
        localvalue.search(value)
    }


    // 两地之间的步行路线规划图
    function getWalkingInfo(map) {
        map.enableScrollWheelZoom()
        let walking = new window.BMapGL.WalkingRoute(map, {
            renderOptions: { map: map, panel: 'r-result', autoViewport: true }
        })
        console.log('location', local)
        console.log('value', value)
        walking.search(local, value)
    }

    // 两地之间的行车路线规划图
    function getCarInfo(map) {
        // map.enableScrollWheelZoom()
        let end = new window.BMapGL.Point(116.486419, 39.877282)
        getDegree(value,typeValue)
        let driving = new window.BMapGL.DrivingRoute(map, {
            renderOptions: { map: map, autoViewport: true }
        })
        console.log('end',valuePoint)
        driving.search(localPoint,valuePoint)
    }

    // 两地之间的公交导航
    function getBusInfo(map) {
        let busline = new window.BMapGL.BusLineSearch(map, {
            renderOptions: { map: map, panel: 'r-result' },
            onGetBusListComplete: function (result) {
                if (result) {
                    let fstline = result.getBusListItem(0)
                    busline.getBusLine(fstline)
                }
            }
        })
        function busSearch() {
            let busName = 107
            busline.getBusList(busName)
        }
        setTimeout(function () {
            busSearch()
        }, 1500)
    }

    // 地址解析(将坐标解析为经纬度)
    function getDegree(value, type) {
        let myGeo = new window.BMapGL.Geocoder()
        myGeo.getPoint(value, function (point) {   //point就是经纬度坐标
            if (point) {
                console.log('point', point)
                type == 2
                    ?
                    setLocalPoint(point)
                    :
                    setValuePoint(point)
            }
        }, '全国')
    }

    useEffect(() => {
        getLocalCity()
        if (local != null) {
            getDegree(local, typeLocal)
        }
        if (local != null) {
            getDegree(value,typeValue)
        }
    }, [local,value])

    return (
        <div className="province_total">
            <div className="province_find" >
                <div className="province_table">
                    <label htmlFor="start" style={{ color: 'white' }}>起点</label>
                    <Input id="start" style={{ width: 400, marginLeft: 20, marginTop: 20 }}></Input>
                </div>
                <div className="province_table">
                    <label htmlFor="end" style={{ color: 'white' }}>终点</label>
                    <Input id="end" style={{ width: 400, marginLeft: 20, marginTop: 20 }}></Input>
                </div>

                <Button value={'查询'} style={{ marginLeft: 70, marginTop: 20, marginBottom: 20 }}>点击查询</Button>
                <div>
                    <Search placeholder="请输入查询种类" id="ac"
                        className="searchInput"
                        enterButton="点击搜索" onSearch={inputSearch}
                        onChange={changeValue} />
                    <Button onClick={turnBus}>公交导航</Button>
                    <Button onClick={turnFoot}>步行导航</Button>
                    <Button onClick={turnCar}>驾车导航</Button>
                </div>

                <Map
                    ref={(ref) => getMap(ref)}
                    // center={{ lng: 116.402544, lat: 39.928216 }}
                    // zoom="11"
                    className={'province_map'}
                    enableScrollWheelZoom>
                    {localPoint != null &&
                        <Marker position={localPoint}   //标注点的坐标，可以通过设置state时代每次点击标注点就改变此位置
                            autoViewport   //自动聚焦视野
                            enableDragging />
                    }
                    <NavigationControl />
                    {/* <InfoWindow position={{ lng: 116.402544, lat: 39.928216 }}>
                </InfoWindow> */}
                    <CityListControl />  {/*当宽度大于400且高度大于350时才会显示出来，有三个属性，分别是map(会主动继承父级实例),anchor,offset*/}
                    <MapTypeControl />   {/*地图类型控件，默认位于地图右上角*/}
                    <ScaleControl />
                </Map>
            </div>

            <div></div>
            <AutoComplete
                input='ac'    //挂载的元素ID，若传值为空，则会自动生成一个input元素
                location='全国'   //设定所属结果的返回范围
            />
            <div className="province_result">
                <div id="r-result" className="r-result"></div>
                <div id="value_result" ref={value_result}></div>
            </div>
        </ div>
    )
}

const TableData = (props) => {
    return (
        <>
            <div></div>
            <div></div>
            <div></div>
        </>
    )
}

export default App