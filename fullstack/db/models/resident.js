'use strict'

const Sequelize = require('sequelize');
const db = require('../index.js');

const Resident = db.define('residents', {
  name: {
  	type: Sequelize.STRING,
  	allowNull: false
  },
  address: {
    type: Sequelize.STRING, 
    allowNull: false
  }

});

module.exports = Resident;
