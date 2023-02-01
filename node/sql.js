const mysql = require("mysql")

// 连接数据库
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "630wujiayuwy",
    database: "sound"
})
// 库-表-字段
connection.connect()

// 注册接口——负责新增数据

connection.end()

module.exports = connection