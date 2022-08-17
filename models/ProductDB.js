"use strict";

var db = require('../db-connection');
class ProductDB{
    getAllProducts(callback){
        var sql = "SELECT product_review.category.type, product_review.product_list.* FROM product_review.product_list INNER JOIN product_review.category ON product_review.product_list.typeId = product_review.category._id";
        //inner join to get the category n product so we can get the table to filter n display the products
        db.query(sql, callback);
    }
}

module.exports = ProductDB;