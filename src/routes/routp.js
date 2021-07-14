const express = require('express');
const router = express.Router();
router.use(express.json()); 
const us = require("../helpers/user");
const user= us;
var dir="C:/Users/DELL/Desktop/Stream";
var path = require('path');
const co= require('./cook');
 bodyParser = require("body-parser");

 router.use(bodyParser.json());

 router.use(express.static('public'));

 router.use(bodyParser.urlencoded({
    extended: true
  }));


  router.get('/profile', function(req,res){
    res.sendFile(path.join(dir,'./src/public/profile.html'));
 });
 router.get('/profil', function(req,res){
    res.sendFile(path.join(dir,'./src/public/profil.html'));
 });
 router.get('/profiled', function(req,res){
    res.sendFile(path.join(dir,'./src/public/profiled.html'));
 });

 router.post('/upu', function (req, res) {
    console.log(req.body);
    const {name,lname,mail,iid} = req.body;
    user.updateu(name,lname,mail,iid).then(resultados => {
        console.log(resultados);
        co.cook(res,req);
        res.redirect("/profile");
    }).catch(err => {
      
       return res.status(500).send(err);
        
    });
   
  });


  router.post('/del', function (req, res) {
    console.log(req.body);
    const {iid} = req.body;
    user.delu(iid).then(resultados => {
        console.log(resultados);
        res.redirect("/");
    }).catch(err => {
      
       return res.status(500).send(err);
        
    });
   
  });
 module.exports = router;
