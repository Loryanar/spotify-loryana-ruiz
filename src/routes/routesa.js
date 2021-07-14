const express = require('express');
const router = express.Router();
router.use(express.json()); 
const cookieParser = require('cookie-parser');
const us = require("../helpers/user");
const user= us;
const co= require('./cook');
var path = require('path');
bodyParser = require("body-parser");

 router.use(bodyParser.json());

 router.use(express.static('public'));

 router.use(bodyParser.urlencoded({
    extended: true
  }));


router.use(bodyParser.json());
var dir="C:/Users/DELL/Desktop/Stream";

router.get('/del', function(req,res){
    res.sendFile(path.join(dir,'./src/public/deleteus.html'));
 });
 
 router.get('/deladmin', function(req,res){
    res.sendFile(path.join(dir,'./src/public/deleteadmin.html'));
 });
 
 
router.get('/upadm', function(req,res){
    res.sendFile(path.join(dir,'./src/public/updateadmin.html'));
 });

 router.get('/updateuser', function(req,res){
    res.sendFile(path.join(dir,'./src/public/upus.html'));
 });
router.get('/indexa', function(req,res){
    res.sendFile(path.join(dir,'./src/public/regista.html'));
 });
 router.get('/indexad', function(req,res){
    res.sendFile(path.join(dir,'./src/public/index.html'));
 });
 router.get('/profileadmin', function(req,res){
    res.sendFile(path.join(dir,'./src/public/profileadmin.html'));
 });
 router.post('/loga', function (req, res, next) {
  res.cookie('cookieid', req.body.lid,{ expires: new Date(Date.now() + (60*60*24*365*3)) });  
    const {lid,lpass} = req.body;
    user.obtenera(lid,lpass).then(resultados =>{ 
      user.obtenerca(lid).then(resultados =>{ 
    co.coa(res,resultados.rows).then(datos=>{ 
      console.log(datos);
    
      res.redirect("/indexad");
     }); 
   });
    }); 
});

router.post('/delu', function (req, res) {
    console.log(req.body);
    const {iid} = req.body;

    user.delu(iid).then(resultados => {
        console.log(resultados);
        res.redirect("/profileadmin");
    }).catch(err => {
      
       return res.status(500).send(err);
        
    });
   
  });

  router.post('/upus', function (req, res) {
    console.log(req.body);
    const {name,lname,mail,iid} = req.body;
    user.updateu(name,lname,mail,iid).then(resultados => {
        console.log(resultados);
        co.cookaa(res,req);
        res.redirect("/profile");
    }).catch(err => {
      
       return res.status(500).send(err);
        
    });
   
  });

router.post('/ra', function (req, res, next) {
    console.log(req.body);
co.cook(res,req);
    const {id,name,lname,email,pass} = req.body;
    user.insertara(id,name,lname,email,pass).then(resultados => {
        res.redirect("/indexad");
    }).catch(err => {
      
       return res.status(500).send(err);
        
    });
   
  });
  
  router.post('/s', function (req, res, next) {
    
  
    user.obteneruser().then(resultados => {
        console.log(resultados.rows);
       
    }).catch(err => {
      
       return res.status(500).send(err);
        
    });
   
  });
  router.post('/upuad', function (req, res) {
    console.log(req.body);
    const {name,lname,mail,iid} = req.body;
    user.updateadmin(name,lname,mail,iid).then(resultados => {
        console.log(resultados);
        co.cooki(res,req);
        res.redirect("/profileadmin");
    }).catch(err => {
      
       return res.status(500).send(err);
        
    });
   
  });
  router.post('/delad', function (req, res) {
    console.log(req.body);
    const {iid} = req.body;
    user.delad(iid).then(resultados => {
        console.log(resultados);
        res.redirect("/indexa");
    }).catch(err => {
      
       return res.status(500).send(err);
        
    });
   
  });

  module.exports = router;