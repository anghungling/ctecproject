"use strict";

var db = require('../db-connection');
class UserDB{
    
    getAllUsers(callback){
        var sql = "SELECT * FROM product_review.user";
        db.query(sql, callback);
    }
    addUser(username, password, name, gender, email_address, callback){
        var sql = "INSERT INTO user (username, password, name, gender, email_address) VALUES (?, ?, ?, ?, ?)";
        db.query(sql, [username, password, name, gender, email_address], callback);
    }
    updateUser(_id, username, password, name, gender, email_address, callback){
        var sql = "UPDATE user SET password = ?,name = ?,gender = ?, email_address = ?,username = ? WHERE _id = ?";
        return db.query(sql, [password, name, gender, email_address, username,_id], callback);
    }
    loginUser(username,callback){
        var sql = "SELECT password, _id FROM product_review.user WHERE username = ?";
        db.query(sql,[username], callback);
    }
    deleteUser(_id,callback){
        var sql = "DELETE FROM product_review.user WHERE _id = ?";
        db.query(sql,[_id], callback);
    }

}
    
module.exports = UserDB;