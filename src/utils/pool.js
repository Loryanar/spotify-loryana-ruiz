const { Pool } = require("pg")

const bd = new Pool({
  user: "yjuhvgvkpaaesn",
  host: "ec2-34-230-115-172.compute-1.amazonaws.com",
  database: "dfsl3ju3fgb6ao",
  password: "ba26de390b1b44b1785070716bd3fe8c5390500a3687171404ca2acb6ebad39e4",
  port: 5432,
});
module.exports = bd;