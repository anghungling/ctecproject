"use strict";
const { text } = require('express');
const UserDB = require('../models/UserDB');
const bcrypt = require('bcrypt'); //encryption
var jwt = require('jsonwebtoken');
var secret = "somesecretkey"
var userDB = new UserDB();
function getAllUsers(request, respond) {
    userDB.getAllUsers(function (error, result) {
        if (error) {
            respond.json(error);
        }
        else {
            respond.json(result);
        }
    });
}
function addUser(request, respond) {
    var username = request.body.username; //what input to expect, so it can generate a key and get the value so the server can check
    var password = request.body.password;
    password = bcrypt.hashSync(password, 10); //encrypting the pw
    var name = request.body.name;
    var gender = request.body.gender;
    var email_address = request.body.email_address;
    userDB.addUser(username, password, name, gender, email_address, function (error, result) {
        if (error) {
            respond.json(error);
        }
        else {
            respond.json(result);
        }
    });
}
function updateUser(request, respond) {
    var userid = request.params.id;
    var username = request.body.username;
    var password = request.body.password;
    var name = request.body.name;
    var gender = request.body.gender;
    var email_address = request.body.email_address;
    var token = request.body.token;
    password = bcrypt.hashSync(password, 10);
    try {
        var decoded = jwt.verify(token, secret);
        //if token n secret is compatible it will trigger catch
        userDB.updateUser(userid, username,password,name,gender,email_address, function (error, result) {
            if (error) {
                respond.json(error);
            }
            else {
                respond.json(result);
            }
        });
    } catch (error) {
        respond.json({ result: "invalid token" });
    }

}

function loginUser(request, respond) {
    var username = request.body.username;
    var password = request.body.password;
    userDB.loginUser(username, function (error, result) {
        if (error) {
            respond.json(error);
        }
        else {
            if (result.length > 0) {
                const hash = result[0].password;
                var flag = bcrypt.compareSync(password, hash);
                //compare encryped pw(hash) with the clear text(password), if the same flag will be true
                //if same flag is true, if not same flag is false
                if (flag) {
                    var token = jwt.sign(username, secret)
                    //takes in the username as input so we know this token belongs to which user
                    respond.json({ result: token,thisuserid:result[0]._id }); //first value of the id
                } else {
                    respond.json({ result: false });
                }
            }
        }
    });
}

function deleteUser(request, respond) {
    var _id = request.params.id;
    userDB.deleteUser(_id, function (error, result) {
        if (error) {
            respond.json(error);
        }
        else {
            respond.json(result);
        }
    });
}
module.exports = { getAllUsers, addUser, updateUser, loginUser, deleteUser }; 
