const { Pool } = require("pg")

const bd = new Pool({
  database: process.env.POSTGRES_DB,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  host: "ec2-44-194-225-27.compute-1.amazonaws.com",
  port: process.env.POSTGRES_PORT,
  ssl:true,
  dialectOptions: {
    ssl: {
      require: true, // This will help you. But you will see nwe error
      rejectUnauthorized: false // This line will fix new error
    }
  }
});
module.exports = bd;