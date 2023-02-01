const nodeMail = require('nodemailer')

let sendExam = nodeMail.createTransport({
    service: 'qq', //类型qq邮箱
    port: 465, // 上文获取的port
    secure: true, //上文获取的secure
    auth: {
        user: '2934610933@qq.com',
        pass: 'ufkdtofalclvdhbg' //获取的stmp授权码
    }
})
module.exports = sendExam