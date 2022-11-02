const { Mysql, Query, SqlQuery } = require("../database/index.js");
const jwt = require("jsonwebtoken");
const { client } = require("../database/index.js");
require("dotenv").config();
const { generateKeyAndstoreOtp } = require("../Utils/OTP.js");
const { GenrateAvaratByName } = require("../Utils/Avatar");

const { BadRequestError } = require("../errors/index.js");
const { Encrypte, compare } = require("../Utils/Crypto");
const { sendEmail } = require("../Utils/Mailer");
/**
 * @description check_if_partner_has_submited_form
 */
const does_partner_form_exits = async (req, res, next) => {
  const { email } = req.body;
  if (!email) {
    throw new BadRequestError("Please provide email");
  }
  const partner = Query(`select * from partner where email = ${email}`);
  if (partner != undefined && partner.length != 0)
    return res.json({
      err: {
        already: false,
        msg: "a form has Already submited with same Email Adress",
      },
    });
  next();
};

const partner_login = async (req, res) => {
  const { email, password } = req.body;
  let HashedPass = "";
  try {
    HashedPass = await Encrypte(password);
  } catch (err) {
    console.log(err);
  }
  let user = SqlQuery(`select * from partner where email = '${email}'`);
  console.trace({
    password: password,
    email: email,
    compair: await compare(password, user.data.rows[0]._password),
  });
  if (!user.success) throw new BadRequestError("user not found");
  try {
    if (
      user.data.rows[0] == undefined ||
      user.data.rows.length == 0 ||
      !(await compare(password, user.data.rows[0]._password))
    ) {
      return res.status(404).send({ err: "password or email is not correct" });
    }
    const accesToken = jwt.sign(
      user.data.rows[0],
      process.env.ACCESS_TOKEN_SECRET
    );
    const RefreshToken = jwt.sign(
      user.data.rows[0],
      process.env.REFRESH_TOKEN_SECRET
    );
    res.status(200).send({
      accesToken: accesToken,
      RefreshToken: RefreshToken,
    });
  } catch (err) {
    console.log(err);
    throw new BadRequestError(err);
  }
};

const sendVeriifyOtp = async (req, res) => {
  const { email } = req.body;
  const Key = await generateKeyAndstoreOtp(email);
  try {
    await sendEmail({
      subject: `reducte email verification `,
      to: email,
      text: `code verefication for your account is ${Key}`,
    });
    res.sendStatus(200);
  } catch (err) {
    res.sendStatus(500);
  }
};

const Verify_email = async (req, res) => {
  const { email, key } = req.body;
  try {
    const value = await client.get(email);
    res.send({ Verified: value != null && value != undefined && value == key });
  } catch (err) {
    console.log(err);
    throw new BadRequestError("Something Went Wrong");
  }
};

const partner_Submit_form = async (req, res) => {
  const {
    email,
    password,
    nome_entreprise,
    identificateur_entreprise,
    representant_entreprise,
    role_dans_entriprise,
    numero_telephone,
    numero_telephone_fix,
    ville,
    adrress,
    activity_entrprise,
    offer,
  } = req.body;
  try {
    // const url = await GenrateAvaratByName(nome_entreprise);
    const url = "";
    // console.log(url);
    const submit = SqlQuery(`insert into partner(email,
      _password,
      avatar_Url,
      nome_entreprise,
      identificateur_entreprise,
      representant_entreprise,
      role_dans_entriprise,
      numero_telephone,
      numero_telephone_fix,
      ville,
      activity_entrprise,
      offer,
      adrress,
      _status) values(
		'${email}',
		'${await Encrypte(password)}',
		'${url}',
		'${nome_entreprise}',
		'${identificateur_entreprise}',
		'${representant_entreprise}',
		'${role_dans_entriprise}',
		'${numero_telephone}',
		'${numero_telephone_fix}',
		'${ville}',
		'${activity_entrprise}',
		'${offer}',
    '${adrress}',
    'Pending')`);

    if (submit.success) return res.status(200).send();
    return res
      .status(500)
      .json({ err: `Could not submit the form ${submit.data.err.sqlMessage}` });
  } catch (err) {
    throw new BadRequestError(err);
  }
};

//admin
const admin_login = async (req, res) => {
  const { email, password } = req.body;
  console.table([{ email, password }]);
  const admin = Query(`select * from _Admin where email = '${email.toLowerCase()}'`);
  if (admin == undefined || admin.length == 0)
    return res.status(404).send({ err: "email is not correct" });
  const is_Authed = await compare(password, admin[0]._password);

  if (!is_Authed)
    return res.status(404).send({ err: "password is not correct" });

  const accesToken = jwt.sign(admin[0], process.env.ACCESS_TOKEN_SECRET);
  const RefreshToken = jwt.sign(admin[0], process.env.REFRESH_TOKEN_SECRET);
  const { _role, account_status } = admin[0];
  res.status(200).send({
    role: _role,
    _name: _name,
    account_status: account_status,
    accesToken: accesToken,
    RefreshToken: RefreshToken,
  });
};

const ResendOTP = async (req, res) => {
  const { email } = req.body;
  const Key = await client.get(email);
  if (Key == null || Key == undefined)
    Key = await generateKeyAndstoreOtp(email);
  try {
    await sendEmail({
      subject: `reducte email verification `,
      to: email,
      text: `code verefication for your account is ${Key}`,
    });
    res.sendStatus(200);
  } catch (err) {
    console.trace(err);
    res.sendStatus(500);
  }
};

module.exports = {
  does_partner_form_exits,
  partner_login,
  admin_login,
  partner_Submit_form,
  ResendOTP,
  Verify_email,
  sendVeriifyOtp,
};
