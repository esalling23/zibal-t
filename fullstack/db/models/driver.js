'use strict'

const Sequelize = require('sequelize')
const db = require('../index.js');

const Driver = db.define('drivers', {
  name: {
    type: Sequelize.STRING, 
    allowNull: false
  }
})

module.exports = Driver;
