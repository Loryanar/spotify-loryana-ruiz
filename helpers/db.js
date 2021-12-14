const { Pool } = require("pg")

const bd = new Pool({
  database: process.env.POSTGRES_DB,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT,
  ssl:true,
  dialectOptions: {
    ssl: {
      require: true, // This will help you. But you will see nwe error
      
    }
  }
});
module.exports = bd;