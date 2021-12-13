var express = require('express');
var path = require('path');
var appi = express.Router();
const cookieParser = require('cookie-parser');
appi.use(express.json()); 
const us = require("../helpers/resultados");
const user= us;
const co= require('../helpers/cook');
 bodyParser = require("body-parser");
 appi.use('/jquery.cookie', express.static(path.join(__dirname,'../node_modules', 'jquery.cookie'  )));

 appi.use(bodyParser.json());

 

 appi.use(bodyParser.urlencoded({
    extended: true
  }));

  appi.use(cookieParser());
  appi.use(bodyParser.json());
  appi.get('/profile', function(req,res){
    res.sendFile(path.join(__dirname,'./profileup.html'));
 });
 appi.get('/profil', function(req,res){
    res.sendFile(path.join(__dirname,'./user.html'));
 });
 appi.get('/profiled', function(req,res){
    res.sendFile(path.join(__dirname,'./profiled.html'));
 });

 appi.post('/upu', function (req, res) {
    console.log(req.body);
    const {name,lname,mail,iid} = req.body;
    user.updateu(name,lname,mail,iid).then(resultados => {
        console.log(resultados);
        co.cook(res,req);
        res.redirect("/profil");
    }).catch(err => {
      
       return res.status(500).send(err);
        
    });
   
  });


  appi.post('/del', function (req, res) {
    console.log(req.body);
    const {iid} = req.body;
    user.delu(iid).then(resultados => {
        console.log(resultados);
        res.redirect("/");
    }).catch(err => {
      
       return res.status(500).send(err);
        
    });
   
  });

appi.use(express.static('public')); 


appi.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'regist.html'));
  });

  appi.post('/', function (req, res, next) {
    console.log(req.body);
co.cook(res,req);
    const {id,name,lname,email,pass} = req.body;
    user.insertar(id,name,lname,email,pass).then(resultados => {
        res.redirect("/stream");
    }).catch(err => {
      console.log(err)
       return res.status(500).send(err);
        
    });
   
  });
  
appi.post('/log', function (req, res, next) {
  res.cookie('cookieid', req.body.lid,{ expires: new Date(Date.now() + (60*60*24*365*3)) });  
    const {lid,lpass} = req.body;
    user.obtener(lid,lpass).then(resultados =>{ 
      user.obtenerc(lid).then(resultados =>{ 
    co.co(res,resultados.rows).then(datos=>{ 
      console.log(datos);
    
      res.redirect("/stream");
     }); 
   });
    }); 
});
 
 module.exports =appi;