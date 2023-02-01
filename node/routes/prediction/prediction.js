
let express = require('express');
const mysql = require('mysql')
const db = require('../../dao/db');
let router = express.Router();
let multipart = require('connect-multiparty');
let conn

var multipartMiddleware = multipart(); // 获取formdata数据
router.post('/', multipartMiddleware, function (req, res, next) {
    // conn = db.createConnection()
    // conn.connect()
    console.log(req.body)
    res.json({
        msg: '预测成功',
        data: 'hahahahha'
    })
    // conn.end()
})

module.exports = router