"use strict";

const express = require("express");
const port = 3000 
var productController = require('./controllers/productController'); // set productController to the productController class
var userController = require('./controllers/userController'); // set userController to the userController class
var commentController = require('./controllers/commentController'); // set commentController to the commentController class
var categoryController = require('./controllers/categoryController');

const bodyParser = require("body-parser");
var app = express();
//var host = "127.0.0.1";
//var port = 8080;
var startPage = "index.html";

app.use(express.static("./public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.route('/products').get(productController.getAllProducts); // activate the getAllProducts method if the route is GET(method) /products
app.route('/categories').get(categoryController.getAllCategories); // activate the getAllProducts method if the route is GET(method) /products

app.route('/comments').get(commentController.getAllComments) // activate the getAllComments method if the route is GET(method) /comments
app.route('/comments').post(commentController.addComment);  // activate the addComments method if the route is POST(method) /comments
app.route('/comments/:id').put(commentController.updateComment) // activate the updateComments method if the route is PUT(method) /comments/:id
app.route('/comments/:id').delete(commentController.deleteComment); // activate the deleteComment method if the route is DELETE(method) /comments/:id

app.route('/users').get(userController.getAllUsers)
app.route('/users').post(userController.addUser)
app.route('/users/:id').put(userController.updateUser);
app.route('/users/:id').delete(userController.deleteUser);
app.route('/login').post(userController.loginUser);


function gotoIndex(req, res) {
    console.log(req.params);
    res.sendFile(__dirname + "/" + startPage);
}

app.get("/" + startPage, gotoIndex);

app.route("/");

//var server = app.listen(port, host, function() {
    //var host = server.address().address;
    //var port = server.address().port;
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
    //console.log("Example app listening at http://%s:%s", host, port);
//});

