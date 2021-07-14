 var express= require('express');
 var app= express();


 app.use(require('./routes/routes'));

 app.use(require('./routes/rout'));
 app.use(require('./routes/routp'));
 app.use(require('./routes/routesa'));
 app.listen(9000,function(){
     console.log("Server run..");
 })
 