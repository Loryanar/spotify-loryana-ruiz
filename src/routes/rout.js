const express = require('express');
const router = express.Router();
router.use(express.json()); 
const cookieParser = require('cookie-parser');
const us = require("../helpers/user");
const user= us;
const co= require('./cook');


bodyParser = require('body-parser'),
router.use(cookieParser());



router.use(bodyParser.urlencoded({
    extended: true
  }));

router.use(bodyParser.json());
var dir="C:/Users/DELL/Desktop/Stream";
router.get('/index', function(req,res){
    res.sendFile(path.join(dir,'./src/public/index2.html'));
 });

 router.post('/log', function (req, res, next) {
  res.cookie('cookieid', req.body.lid,{ expires: new Date(Date.now() + (60*60*24*365*3)) });  
    const {lid,lpass} = req.body;
    user.obtener(lid,lpass).then(resultados =>{ 
      user.obtenerc(lid).then(resultados =>{ 
    co.co(res,resultados.rows).then(datos=>{ 
      console.log(datos);
    
      res.redirect("/index");
     }); 
   });
    }); 
});

router.post('/', function (req, res, next) {
    console.log(req.body);
co.cook(res,req);
    const {id,name,lname,email,pass} = req.body;
    user.insertar(id,name,lname,email,pass).then(resultados => {
        res.redirect("/index");
    }).catch(err => {
      
       return res.status(500).send(err);
        
    });
   
  });
  
 

  module.exports = router;