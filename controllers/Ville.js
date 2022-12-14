const { Mysql, Query, SqlQuery } = require("../database/index.js");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const AddVille = async (req, res) => {
  const { ville } = req.body;
  const added_ville = SqlQuery(`insert into villes(
    ville_name,
    created_date
	) values (
		'${ville}',
		CURDATE()
	)`);
  if (!added_ville.success)
    return res.status(500).json({
      err: added_ville.data.err,
    });

  res.status(200).send({
    msg: `OK`,
  });
};
const Villes = async (req, res) => {
  const villes = SqlQuery(`select * from villes`);
  if (!villes.success)
    return res.status(500).json({
      err: villes.data.err,
    });
  res.status(200).json(villes.data.rows);
};
module.exports = {
  AddVille,
  Villes,
};
