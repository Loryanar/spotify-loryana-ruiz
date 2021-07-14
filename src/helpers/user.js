const ba= require("../utils/pool");
const db= ba;
const queries = require("../utils/queries");

module.exports = {
    async insertar(id,name,lname,email,pass) {
        let resultados = await db.query( queries.saveus, [id,name,lname,email,pass]);
        return resultados;
    },
    async obtener(lid,lpass) {
      const resultados = await db.query(queries.log, [lid,lpass]);
        return resultados;
    },
    async obtenerc(lid) {
        const resultados = await db.query(queries.cok, [lid]);
          return resultados;
      },
      async updateu(name,lname,mail,iid) {
        let resultados = await db.query( queries.updu, [name,lname,mail,iid]);
        return resultados;
    },
    async updateadmin(name,lname,mail,iid) {
      let resultados = await db.query( queries.upad, [name,lname,mail,iid]);
      return resultados;
  },
    async delu(iid) {
      let resultados = await db.query( queries.delus, [iid]);
      return resultados;
  },
  async insertara(id,name,lname,email,pass) {
    let resultados = await db.query( queries.savead, [id,name,lname,email,pass]);
    return resultados;
},
async obtenera(lid,lpass) {
  const resultados = await db.query(queries.loga, [lid,lpass]);
    return resultados;
},
async obteneruser() {
  const resultados = await db.query(queries.Sus, []);
    return resultados;
},
async obtenerca(lid) {
  const resultados = await db.query(queries.coka, [lid]);
    return resultados;
},
async delad(iid) {
  let resultados = await db.query( queries.delad, [iid]);
  return resultados;
},
}
