var express = require('express');
var router = express.Router();
// 导入MySQL模块
var mysql = require('mysql');
var dbConfig = require('../db/DBConfig');
var userSQL = require('../db/Usersql');
// 使用DBConfig.js的配置信息创建一个MySQL连接池
var pool = mysql.createPool( dbConfig.mysql );
// 响应一个JSON数据
var responseJSON = function (res, ret) {
     if(typeof ret === 'undefined') { 
          res.json({     code:'-200',     msg: '操作失败'   
        }); 
    } else { 
      res.json(ret); 
  }};
// 添加用户
router.get('/addUser', function(req, res, next){
 // 从连接池获取连接 
pool.getConnection(function(err, connection) { 
// 获取前台页面传过来的参数  
 var param = req.query || req.params;   
// 建立连接 增加一个用户信息 
connection.query(userSQL.insert, [param.uid,param.name], function(err, result) {
        if(result) {      
             result = {   
                      code: 200,   
                      msg:'增加成功'
             };  
        }     

     // 以json形式，把操作结果返回给前台页面     
       responseJSON(res, result);   

     // 释放连接  
      connection.release();  

       });
    });
 });

// 根据用户ID查询用户信息
router.get('/getUserById', function(req, res, next){
 // 从连接池获取连接 
pool.getConnection(function(err, connection) { 
// 获取前台页面传过来的参数  
 var param = req.query || req.params;   
// 建立连接 增加一个用户信息 
connection.query(userSQL.getUserById, [param.uid], function(err, result) {
        if(result) {      
             result = {   
                      code: 200,
                      data: result
             };  
        }     

     // 以json形式，把操作结果返回给前台页面     
       responseJSON(res, result);   

     // 释放连接  
      connection.release();  

       });
    });
 });

// 根据用户ID查询用户信息
router.get('/queryAll', function(req, res, next){
 // 从连接池获取连接 
pool.getConnection(function(err, connection) { 
// 获取前台页面传过来的参数  
 var param = req.query || req.params;   
// 建立连接 增加一个用户信息 
connection.query(userSQL.queryAll, function(err, result) {
        if(result) {      
             result = {   
                      code: 200,
                      data: result
             };  
        }     

     // 以json形式，把操作结果返回给前台页面     
       responseJSON(res, result);   

     // 释放连接  
      connection.release();  

       });
    });
 });

module.exports = router;
