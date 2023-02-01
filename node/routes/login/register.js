const express = require('express')
const mysql = require('mysql')
const bodyparser = require('body-parser')  //解析body请求体的数据
let multipart = require('connect-multiparty'); //解析formdata的数据
const router = express.Router()
let db = require('../../dao/db')
// const nodeMail = require('../login/sendExamPwd')
let conn

let urllencodeParser = bodyparser.urlencoded({ extended: false })  //解析表单数据，当参数为true时可以解析任意类型的数据
var multipartMiddleware = multipart(); // 获取formdata数据

// 点击注册，需要到数据库新增数据
router.post('/', multipartMiddleware, function (req, res, next) {
    conn = db.createConnection()
    conn.connect()
    let username = req.body.username
    let password = req.body.password
    let email = req.body.examPwd  // 前端填入的验证码
    console.log(username);
    console.log(password);

    // 查询账号是否存在 
    const findUsername = (username) => {
        return new Promise((resolve, reject) => {
            let sql = 'select username from register where username=?'
            let sqlparams = [username]
            conn.query(sql, sqlparams, (err, result) => {
                if (err) {
                    reject('数据库错误', err)
                } else if (result.length > 0) {
                    reject('您的账户已存在,请勿重复注册')
                } else {
                    resolve('账号为注册，请继续注册账号')
                }
            })
        })
    }

    // 插入账号数据到数据库
    const insertData = (username, password) => {
        let sql = 'insert into register(username,password) values(?,?)'
        let sqlparams = [username, password]
        conn.query(sql, sqlparams, (err, result) => {
            if (err) {
                console.log(err)
                res.json({
                    msg: 'sql执行错误'
                })
            } else {
                console.log('result', result)
                res.json({
                    data: [username, password],
                    msg: '执行成功,即将为您跳转登录界面',
                    code: 200
                })
            }
        })
    }

    // 注册流程
    const register = async () => {
        await findUsername(username)
            .then(() => {
                insertData(username, password)
            })
            .catch((error) => {
                res.json({
                    msg: error
                })
            })
    }
    console.log(global.code)
    if (email !== String(global.code)) {
        res.json({
            msg: '验证码填写错误'
        })
    } else {
        register()
    }
})

module.exports = router