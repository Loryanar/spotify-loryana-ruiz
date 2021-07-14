router.post('/buscar', upload.single('info'), function(req, res) {
    var archivoinfo = path.join(dir, './info.json');
    var info = req.file.originalname;
    fs.readFile(archivoinfo, 'utf8', function(err, archivo) {
      if (err) throw err;
      var info = JSON.parse(archivo);
      info.push({nombre: nombre});
      fs.writeFile(archivoinfo, JSON.stringify(info), function(err) {
        if (err) throw err;
        res.sendFile(path.join(dir,'src','public', 'index.html'));
      })
    });
  });