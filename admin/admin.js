var express = require('express');
var path = require('path');
var appi = express.Router();
appi.use(express.json());
const cookieParser = require('cookie-parser');
const us = require("../helpers/resultados");
const user= us;
const co= require('../helpers/cook');
bodyParser = require("body-parser");

 appi.use(bodyParser.json());

 appi.use(express.static('public'));

 appi.use(bodyParser.urlencoded({
    extended: true
  }));


appi.use(bodyParser.json());

appi.get('/del', function(req,res){
    res.sendFile(path.join(__dirname,'./deleteus.html'));
 });
 
 appi.get('/deladmin', function(req,res){
    res.sendFile(path.join(__dirname,'./deletead.html'));
 });
 
 
appi.get('/upadm', function(req,res){
    res.sendFile(path.join(__dirname,'./upadmin.html'));
 });

 appi.get('/updateuser', function(req,res){
    res.sendFile(path.join(__dirname,'./upus.html'));
 });
appi.get('/ad', function(req,res){
    res.sendFile(path.join(__dirname,'./log.html'));
 });

 appi.get('/admin', function(req,res){
    res.sendFile(path.join(__dirname,'./admin.html'));
 });
 appi.post('/loga', function (req, res, next) {
  res.cookie('cookieid', req.body.lid,{ expires: new Date(Date.now() + (60*60*24*365*3)) });  
    const {lid,lpass} = req.body;
    user.obtenera(lid,lpass).then(resultados =>{ 
      user.obtenerca(lid).then(resultados =>{ 
    co.coa(res,resultados.rows).then(datos=>{ 
      console.log(datos);
    
      res.redirect("/admin");
     }); 
   });
    }); 
});

appi.post('/delu', function (req, res) {
    console.log(req.body);
    const {iid} = req.body;

    user.delu(iid).then(resultados => {
        console.log(resultados);
        res.redirect("/admin");
    }).catch(err => {
      
       return res.status(500).send(err);
        
    });
   
  });

 appi.post('/ra', function (req, res, next) {
   console.log(req.body);
co.cook(res,req);
   const {id,name,lname,email,pass} = req.body;
   user.insertara(id,name,lname,email,pass).then(resultados => {
       res.redirect("/song");
   }).catch(err => {
     
      return res.status(500).send(err);
       
   });
  
 });
  appi.post('/upus', function (req, res) {
    console.log(req.body);
    const {name,lname,mail,iid} = req.body;
    user.updateu(name,lname,mail,iid).then(resultados => {
        console.log(resultados);
        co.cookaa(res,req);
        res.redirect("/admin");
    }).catch(err => {
      
       return res.status(500).send(err);
        
    });
   
  });

  appi.post('/s', function (req, res, next) {
    
  
    user.obteneruser().then(resultados => {
        console.log(resultados.rows);
       
    }).catch(err => {
      
       return res.status(500).send(err);
        
    });
   
  });
  appi.post('/upuad', function (req, res) {
    console.log(req.body);
    const {name,lname,mail,iid} = req.body;
    user.updateadmin(name,lname,mail,iid).then(resultados => {
        console.log(resultados);
        co.cooki(res,req);
        res.redirect("/admin");
    }).catch(err => {
      
       return res.status(500).send(err);
        
    });
   
  });
  appi.post('/delad', function (req, res) {
    console.log(req.body);
    const {iid} = req.body;
    user.delad(iid).then(resultados => {
        console.log(resultados);
        res.redirect("/ad");
    }).catch(err => {
      
       return res.status(500).send(err);
        
    });
   
  });


appi.get('/ad', function(req, res) {
    res.sendFile(path.join(__dirname, 'log.html'));
  });
  module.exports= appi;