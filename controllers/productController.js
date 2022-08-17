"use strict";
const ProductDB = require('../models/ProductDB');

var productsDB = new ProductDB();

function getAllProducts(request, respond){
    productsDB.getAllProducts(function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });

}

module.exports = {getAllProducts};