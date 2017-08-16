const Sequelize = require('sequelize');
const { FLOAT, INTEGER, STRING, BOOLEAN } = require('sequelize');

var db = new Sequelize('postgres://localhost:5432/capstone');

const User = db.define('user', {
  email: STRING,
  googleID: STRING
});

const Report = db.define('report', {
  longitude: FLOAT,
  latitude: FLOAT,
  radius: INTEGER,
  businessType: STRING,
  restaurantType: STRING,
  crimeChecked: BOOLEAN,
  demographicsChecked: BOOLEAN,
  incomeChecked: BOOLEAN,
  popDensityChecked: BOOLEAN
});

Report.belongsTo(User);

module.exports = db;
