var mysql = require("mysql");
const Log = require("../log");
var syncSql = require("sync-sql");
const { BadRequestError } = require("../errors");

const connect = {
  user: "root",
  host: "35.195.162.181",
  password: "fEF6J$&RE|=n<S0r",
  database: "defaultdb",
  port: 3306,
  multipleStatements: true,
};
var Mysql = mysql.createConnection(connect);

Mysql.connect(function (err) {
  if (err) {
    Log.error(`An Error while trying to connect to databse ==> ${err}`);
    throw err;
  }
  Log.info(`SQL DB Connected`);
});

function Query(query) {
  try {
    return syncSql.mysql(connect, query).data.rows;
  } catch (err) {
    throw new BadRequestError(err);
  }
}

function SqlQuery(query) {
  try {
    return syncSql.mysql(connect, query);
  } catch (err) {
    throw new BadRequestError(err);
  }
}
module.exports = { Mysql, Query, SqlQuery };
