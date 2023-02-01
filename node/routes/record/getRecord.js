const express = require('express')
const db = require('../../dao/db')
const router = express.Router()

let conn
router.get('/', function (req, res, next) {
    conn = db.createConnection()
    conn.connect()
    let sql = 'select * from record'
    conn.query(sql, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            console.log(result)
            res.json({
                code: 200,
                msg: result
            })
        }
    })
})

module.exports = router