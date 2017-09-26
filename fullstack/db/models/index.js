'use strict';

const Product = require('./resident')
const Review = require('./driver');

Product.hasMany(Review);
Review.belongsTo(Product);

module.exports = {Product, Review};
