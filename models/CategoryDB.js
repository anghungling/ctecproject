"use strict";

var db = require('../db-connection');
class CategoryDB{
    getAllCategories(callback){
        var sql = "SELECT product_review.product_list.product, product_review.category.* FROM product_review.category INNER JOIN product_review.product_list ON product_review.category._id = product_review.product_list._id";
        //inner join to get the category n product so we can get the table to filter n display the products
        db.query(sql, callback);
    }
}

module.exports = CategoryDB;