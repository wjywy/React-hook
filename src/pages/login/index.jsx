import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Input, Button, Card } from "antd";
import { message } from "antd";
import "./index.css";

let time
const App = () => {
  let [password, setPassword] = useState(); //密码
  let [examPassPass, setExamPassPass] = useState(true);
  let [code, setCode] = useState(); //账号
  let [examcode, setExamcode] = useState(true);
  let [examPass, setExamPass] = useState(); //验证密码
  let [examExam, setExamExam] = useState(true);
  let [count, setCount] = useState(60);

  let navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();
  const sussess = () => {
    messageApi.open({
      type: "success",
      content: "登录成功",
    });
  };

  const error = (msg) => {
    messageApi.open({
      type: "error",
      content: msg,
    });
  };

  // 输入手机号
  function handleCode(e) {
    console.log(e.target.value.length);
    console.log(typeof e.target.value);
    if (
      (e.target.value.length < 6) &&
      e.target.value !== ""
    ) {
      console.log("长度出错");
      setExamcode(false);
    } else {
      setCode(e.target.value);
      setExamcode(true);
    }
  }

  // 输入密码
  function inputPassword(e) {
    if (
      (e.target.value.length < 6 || e.target.value.length > 12) &&
      e.target.value !== ""
    ) {
      setExamPassPass(false);
    } else {
      setPassword(e.target.value);
      setExamPassPass(true);
    }
  }

  // 重复密码
  function examPassword(e) {
    if (e.target.value !== password) {
      setExamPass(e.target.value);
      setExamExam(false);
    } else {
      setExamPass(e.target.value);
      setExamExam(true);
    }
  }

  // 点击跳转到注册界面
  function to_register() {
    navigate("/register");
  }

  function submit_thing() {
    if (password && code && examPass) {
      axios.get(`http://localhost:3000/enter?username=${code}&password=${password}&examPassword=${examPass}`)
        .then((res) => {
          console.log(res)
          if (res.data.code === 200 && res.data.msg === "欢迎登录") {
            navigate("/top/home");
          } else {
            error(res.data.msg)
          }
        })
        .catch((error) => {
          console.log(error)
          error(error)
        })
    }
  }

  return (
    <>
      {contextHolder}
      <div className='login_tocenter'>
        <div className='login_text_password'>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Input
              type='text'
              placeholder='请输入手机号或者邮箱'
              bordered={false}
              onChange={handleCode}
              className='login_placeholder'
            />
            <span style={{ color: "green", fontSize: "12px" }}>
              {!examcode && "长度出错"}
            </span>
          </div>
          <div className='login_divide'></div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Input
              type='password'
              placeholder='请输入密码'
              bordered={false}
              onChange={inputPassword}
              className='login_placeholder'
            />
            <span style={{ color: "green", fontSize: "12px" }}>
              {!examPassPass && "长度出错"}
            </span>
          </div>
          <div className='login_divide'></div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Input
              type='password'
              placeholder='请重复密码'
              bordered={false}
              onChange={examPassword}
              className='login_placeholder'
            />
            <span style={{ color: "green", fontSize: "12px" }}>
              {!examExam && "两次输入密码不一致"}{" "}
            </span>
          </div>
          <div className='login_divide'></div>
        </div>
        <div className='login_forget_find'>
          <div className='login_forgrtPassword'>忘记密码</div>
          <div className='login_findPassword'>找回密码</div>
        </div>
        <div style={{ marginTop: 10, textAlign: "center" }}>
          <Button type='primary' onClick={submit_thing}>
            点击登录
          </Button>
        </div>
        <div className='login_register' onClick={to_register}>
          没有账号，点击注册
        </div>
      </div>
    </>
  );
};
export default App;
