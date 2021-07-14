var path = require('path');
 var fs= require('fs');
 var mediaserver = require('mediaserver');
 const express = require('express');
const router = express.Router();
var mediaserver = require('mediaserver');
 var multer = require('multer');
var dir="C:/Users/DELL/Desktop/Stream";

var opcionesMulter = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(dir, 'canciones'));
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
});

var upload = multer({storage: opcionesMulter});

router.use(express.static('public'));
router.use('/jquery.cookie', express.static(path.join(dir, 'node_modules', 'jquery.cookie')));
router.use('/jquery', express.static(path.join(dir, 'node_modules', 'jquery', 'dist')));
router.use('/form', express.static(path.join(dir, 'src', 'public', 'js')));

router.get('/', function(req, res ) {
    res.sendFile(path.join(dir ,'./src/public/regist.html'));
 });
router.get('/index', function(req,res){
    res.sendFile(path.join(dir,'./src/public/index2.html'));
 });
router.get('/canciones', function(req,res){
    fs.readFile(path.join(dir,'./canciones.json'), 'utf8',function(err,canciones){
        if(err) throw err;
        res.json(JSON.parse(canciones));
    });
});
router.get('/canciones/:nombre', function(req, res) {
    var cancion = path.join(dir, './canciones', req.params.nombre);
    mediaserver.pipe(req, res, cancion);
  });
  
  router.post('/canciones', upload.single('cancion'), function(req, res) {
    var archivoCanciones = path.join(dir, './canciones.json');
    var nombre = req.file.originalname;
    fs.readFile(archivoCanciones, 'utf8', function(err, archivo) {
      if (err) throw err;
      var canciones = JSON.parse(archivo);
      canciones.push({nombre: nombre});
      fs.writeFile(archivoCanciones, JSON.stringify(canciones), function(err) {
        if (err) throw err;
        res.sendFile(path.join(dir,'src','public', 'index.html'));
      })
    });
  });

  module.exports = router;