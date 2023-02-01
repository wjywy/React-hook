// 原生
// get请求通过url拿到并解析
// post需要用事件来解析

var express = require('express');
let db = require('../../sql.js')   //导入数据库文件
let multiparty = require('multiparty')  //上传图片
var router = express.Router();
let fs = require('fs');
// const { post } = require('./sound');

// 读取心音文件
function readMyFile (fileName) {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName,async function(err,data) {
            if (err) {
                reject(err)
            } else {
                resolve(data.toString())
            }
        })    
    })
}

router.get('/', async function(req, res, next) {
    let data = await readMyFile('D:/心音/构造心音数据集的源文件/正常心音a.xlsx')
    console.log(data);
    res.send(data);
});
module.exports = router;