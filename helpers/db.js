const { Pool } = require("pg")

const bd = new Pool({
  user: "lpvogxhmptuoyh",
  host: "ec2-34-193-101-0.compute-1.amazonaws.com",
  database: "db0mfeotitqr13",
  password: "0ca0d37e9bbaddeaa9deaa5b8e4d1f90f7c077c61d9830b88e706384ab7d4326",
  port: 5432,
});
module.exports = bd;