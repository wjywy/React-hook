const express = require('express')
const bodyparser = require('body-parser')  //解析body请求体的数据
let multipart = require('connect-multiparty'); //解析formdata的数据
const router = express.Router()
const nodeMail = require('../login/sendExamPwd')
var multipartMiddleware = multipart(); // 获取formdata数据

// var multipartMiddleware = multipart(); // 获取formdata数据
router.post('/', multipartMiddleware, async function (req, res, next) {
    const email = req.body.email // 用户的邮箱账号
    // const emailPass = req.body.examPwd // 用户收到的验证码号
    global.code = String(Math.floor(Math.random() * 1000000)).padEnd(6, '0') // 创建的随机六位数验证码
    const mail = {
        from: '众蕊公司："<2934610933@qq.com>"', // 发件人
        subject: '验证码', //类型
        to: email, // 收件人
        html: `       
        <p>您好!</p>
        <p>您的验证码是：<strong style="color: orangered">${global.code}</strong> </p>
        <p>如果不是你本人操作， 请无视此邮件</p>
        `    // 邮件内容，用html格式编写
    }
    await nodeMail.sendMail(mail, (err, info) => {
        if (!err) {
            res.json({
                code: 200,
                msg: '验证码发送成功'
            })
        } else {
            res.json({
                msg: err
            })
        }
    })
})
module.exports = router