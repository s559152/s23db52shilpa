var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');



require('dotenv').config();
const connectionString =process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString,{useNewUrlParser: true,useUnifiedTopology: true});



var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once("open", function(){
console.log("Connection to DB succeeded")});


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var bankRouter = require('./routes/bank');
var boardRouter = require('./routes/board');
var selectorsRouter = require('./routes/selector');
var Bank = require("./models/Bank");
var ResourceRouter= require("./routes/resource");

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/bank',bankRouter);
app.use('/board',boardRouter);
app.use('/selector',selectorsRouter);
app.use('/resource',ResourceRouter);

async function recreateDB(){
  // Delete everything
  await Bank.deleteMany();
  let instance1 = new
  Bank({Bank_Name:"SBI", Account_Type:'Savings',Balance:12000});
  

  instance1.save().then( () => {
    console.log('Everything went well');
  }).catch( (e) => {
    console.log('There was an error', e.message);
  });


  let instance2 = new
  Bank({Bank_Name:"UNION", Account_Type:'Salary',Balance:25000});


  instance2.save().then( () => {
    console.log('Everything went well');
  }).catch( (e) => {
    console.log('There was an error', e.message);
  });
  let instance3 = new
  Bank({Bank_Name:"RBI", Account_Type:'Checking',Balance:240000});
  instance3.save().then( () => {
    console.log('Everything went well');
  }).catch( (e) => {
    console.log('There was an error', e.message);
  });
  }

  let reseed = true;
  if (reseed) { recreateDB();}
// app.use('/')
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
  

module.exports = app;

