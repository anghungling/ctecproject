"use strict";

var db = require('../db-connection');

class CommentDB{
    getAllComments(callback){
        var sql = "SELECT product_review.user.username, product_review.review.* FROM product_review.review inner join product_review.user on product_review.review.userId = product_review.user._id"
        db.query(sql, callback);
    }
    addComment(comment,callback){
        var sql = "INSERT INTO review (productId, userId, content, datePosted, rating) VALUES (?, ?, ?, ?, ?)";
        db.query(sql, [comment.getProductId(), comment.getUserId(), comment.getContent(), comment.getDate(), comment.getRating()], callback);
    }
    updateComment(comment, callback){
        var sql = "UPDATE review SET content = ?, datePosted = ?, rating = ?, userId = ? WHERE _id = ?";
        db.query(sql, [comment.getContent(), comment.getDate(), comment.getRating(), comment.getUserId(), comment.getId()], callback);
    }
    deleteComment(commentID, callback){
        var sql = "DELETE FROM review WHERE _id = ?";
        db.query(sql, [commentID], callback);
    }
}
module.exports = CommentDB;