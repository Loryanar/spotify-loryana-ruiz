const { Pool } = require("pg")

const bd = new Pool({
  user: "camnjfokidbfwu",
  host: "ec2-44-194-225-27.compute-1.amazonaws.com",
  database: "d1v9p2pjfqackr",
  password: "5381beb09aa09611d83c0eaaf118a15fc3eb3474de86b393de28f9327a4016e7",
  port: 5432,
  dialect: "postgres",
  ssl:true,
  dialectOptions: {
    ssl: {
      require: true, // This will help you. But you will see nwe error
      rejectUnauthorized: false // This line will fix new error
    }
  }
});
module.exports = bd;