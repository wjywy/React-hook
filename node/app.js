// 1.mysql查询语句：
//  select * from 表名称：查询所有
// select * from 表名称 where userName=? and userPwd=?   部分查询
// 2.musql增加语句：
// insert into 表名称 value


var createError = require('http-errors');
var express = require('express');
let cors = require('cors')
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var SoundRouter = require('./routes/home/sound');
let EnterRouter = require('./routes/login/login') // 登录
let RegisterRouter = require('./routes/login/register') // 注册
let PredictionRouter = require('./routes/prediction/prediction') // 预测
let RecordRouter = require('./routes/record/getRecord') // 获取记录
let EmailRouter = require('./routes/login/sendEmail') // 发送验证码

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());//解决跨域
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// 配置接口
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/sound', SoundRouter);
app.use('/enter', EnterRouter);
app.use('/register', RegisterRouter);
app.use('/prediction', PredictionRouter);
app.use('/record', RecordRouter);
app.use('/email', EmailRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// 端口
app.listen(4000, () => {
  console.log('server running')
})

module.exports = app;
