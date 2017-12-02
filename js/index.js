var http = require('http');
var assert = require('assert');
//http.createServer((req,res)=>{
//	var path = req.url.replace(/^\//,'');
//	if(!path.match('favicon')){
//		res.writeHead(200,{'Content-Type':'text/plain'});
//		res.end('hello world')
//		console.dir('start connect localhost')
//	}
//}).listen(3000)


var express = require('express');

var app = express();
var admin = express();
//12-02

//buffer
const buf4 = Buffer.from([1, 2, 3]);
console.log(buf4)


//admin.on('mount',function(parent){
//	console.dir('page')
//})
//
//admin.get('/user',(req,res,next)=>{
//	res.send('user page')
//})
//
//
//admin.listen(3000,()=>{
//	console.log('hello server')
//})


//app.get('/',(req,res)=>{
//	res.send('hello world')
//})
//app.use((req,res,next)=>{
//	console.log('time '+new Date())
//})

//next('route') route 参数跳至下一个路由处理程序
//错误处理中间件 需再app.use()喝路由调用之后

//添加了一个新方法 app.route()，可以为路由路径创建链式路由句柄。
//添加了一个新类 express.Router，可以创建可挂载的模块化路由句柄。
//app.get('/user/:id',(req,res,next)=>{
//console.dir(app.locals);
//console.dir(app.mountpath)
//	if(req.params.id==1) next('route')
//	else next();
//},(req,res,next)=>{
//	console.log('second '+req.params.id)
//	res.send(req.params.id)
//})
//
//app.get('/user/:id',(req,res,next)=>{
//	console.log('thrid '+req.params.id)
//	res.send('node index')
//})
//
//
//
//app.listen(3000,()=>{
//	console.log('start connet local ')
//})


























