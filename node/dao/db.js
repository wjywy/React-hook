// 上传自己的npm包
// 1.npm官网申请账号
// 2.初始化项目
// 3.登录：npm login
// 4.上传：publish
// 5.报名可能会重复，需要独一无二的名字

// 连接mysql数据库
// host:'主机名',
// user:'用户名',
// password : '密码',
// database : '库名称',
// port:'端口号'

const mysql = require("mysql")

function createConnection() {
    let connection = mysql.createConnection({
        host:"localhost",
        user:"root",
        password:"630wujiayuwy",
        database:"sound"
    })
    return connection
}
module.exports.createConnection = createConnection
// // 库-表-字段
// connection.connect()
// // 查询
// connection.query('select * from user',(err,res) => {
//     if(err) throw err
//     console.log(res)
// })
// connection.end()
