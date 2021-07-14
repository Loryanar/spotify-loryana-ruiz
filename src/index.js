 var express= require('express');
 var app= express();


 app.use(require('./routes/routes'));
 puerto = process.env.PORT || 9000;
 app.use(require('./routes/rout'));
 app.use(require('./routes/routp'));
 app.use(require('./routes/routesa'));
 app.listen(puerto,function(){
     console.log("Server run..");
 })
 