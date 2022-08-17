var mysql = require('mysql');
var connection = mysql.createPool({
    host: 'productreviewdb.ctlc9gavyvdx.us-east-1.rds.amazonaws.com',
    port: '3306',
    user: 'admin',
    password: 'admin12345',
    database: 'product_review'
});
     
module.exports = connection;