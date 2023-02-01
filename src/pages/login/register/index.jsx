import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Input, Button, message } from "antd";
import "../index.css";

let time
const App = () => {
  let [password, setPassword] = useState(); //密码
  let [code, setCode] = useState(); //账号
  let [examcode, setExamcode] = useState(false);
  let [exampass, setExampass] = useState(''); //验证码
  let [examExam, setExamExam] = useState(''); // 重复密码
  let [count, setCount] = useState(60);
  // let [submit, setSubmit] = useState(false); //发起axios的依赖

  const [messageApi, contextHolder] = message.useMessage();
  const sussess = () => {
    messageApi.open({
      type: "success",
      content: "注册成功",
    });
  };
  const error = (msg) => {
    messageApi.open({
      type: "error",
      content: msg,
    });
  };
  let navigate = useNavigate();

  // 输入手机号
  function handleCode(e) {
    console.log(e.target.value.length);
    console.log(typeof e.target.value);
    if (
      (e.target.value.length < 6 || e.target.value.length > 20) &&
      e.target.value !== ""
    ) {
      console.log("长度出错");
    } else {
      setCode(e.target.value);
    }
  }

  // 发送验证码
  async function sendExamWord() {
    time = setInterval(() => {
      setCount((pre) => pre - 1);
    }, 1000);
    if (count > 0 && count < 61) {
      console.log(111);
    } else {
      clearInterval(time);
      setCount(60);
    }
    let fromData = new FormData()
    // fromData.append('examPwd', exampass)
    fromData.append('email', code) // 用户qq邮箱账号
    const res = await axios.post('http://localhost:3000/email', fromData, {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    })
    console.log(res)
  }

  // 验证码
  function examWord(e) {
    console.log(e.target.value.length);
    setExampass(e.target.value)
  }

  // 输入密码
  function inputPassword(e) {
    if (
      (e.target.value.length < 6 || e.target.value.length > 20) &&
      e.target.value !== null
    ) {
      console.log("长度出错");
    } else {
      setPassword(e.target.value);
    }
  }

  // 重复密码
  function examPassword(e) {
    if (e.target.value !== password) {
      console.log("两次输入密码不一致");
      setExamExam(e.target.value)
    } else {
      console.log(e.target.value);
      // setExamExam(true);
    }
  }

  // 点击注册
  async function submit_thing() {
    let formData = new FormData();
    formData.append("username", String(code));
    formData.append("password", String(password));
    formData.append('examPwd', String(exampass)); // 用户填写的验证码
    formData.append('doublePwd', String(examExam)); // 用户重复密码
    if (password && code) {
      const res = await axios.post('http://localhost:3000/register', formData, {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      })
      console.log(res.data)
      if (res.data.code === 200) {
        sussess()
      } else {
        error(res.data.msg)
      }
    }
  }

  const to_login = () => {
    navigate('/login', { replace: false })
  }

  return (
    <>
      {contextHolder}
      <div className='login_tocenter'>
        <div className='login_text_password'>
          <Input
            type='text'
            placeholder='请输入qq邮箱'
            bordered={false}
            onChange={handleCode}
            className='login_placeholder'
          />
          <div className='login_divide'></div>
          <div className='login_sendExamWord'>
            <Input
              type='password'
              placeholder='请输入验证码'
              bordered={false}
              onChange={examWord}
              className='login_placeholder'
            />
            <Button
              onClick={sendExamWord}
              disabled={count > 0 && count < 60 ? true : false}
            >
              {" "}
              {count > 0 && count < 60 ? count : "发送验证码"}{" "}
            </Button>
          </div>
          <div className='login_divide'></div>
          <Input
            type='password'
            placeholder='请输入密码'
            bordered={false}
            onChange={inputPassword}
            className='login_placeholder'
          />
          <div className='login_divide'></div>
          <Input
            type='password'
            placeholder='请重复密码'
            bordered={false}
            onChange={examPassword}
            className='login_placeholder'
          />
          <div className='login_divide'></div>
        </div>
        <div style={{ marginTop: 10, textAlign: "center" }}>
          <Button type='primary' onClick={submit_thing}>
            点击注册
          </Button>
        </div>
        <div style={{ fontSize: '12px', color: 'rgb(191,191,191)', cursor: 'pointer', marginTop: '10px' }} onClick={to_login}>点击返回登录界面</div>
      </div>
    </>
  );
}


export default App;
