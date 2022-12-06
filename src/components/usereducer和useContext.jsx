// 使用useContext和useReducer搭建一个简易的redux

// 思路：1.创建全局的Context  2.创建全局的reducer  
// 3.将全局useReducer返回的state和dispatch传下去，也可以放到全局context中

import React from "react";
import { useReducer,useContext } from "react";
