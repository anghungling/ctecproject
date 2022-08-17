"use strict";
const CommentDB = require('../models/CommentDB');
const Comment = require('../models/Comment');

var commentDB = new CommentDB();

function getAllComments(request, respond){
    commentDB.getAllComments(function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });

}

function addComment(request, respond){
    var now = new Date();
    var comment = new Comment(null, request.body.productId, request.body.userId, request.body.content, now.toString(), request.body.rating);
    commentDB.addComment(comment, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    })
}
function updateComment(request, respond){
    var now = new Date();
    var comment = new Comment(request.params.id, request.body.productId, request.body.userId, request.body.content, now.toString(), request.body.rating);
    commentDB.updateComment(comment, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function deleteComment(request, respond){
    var commentID = request.params.id;
    commentDB.deleteComment(commentID, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

module.exports = {getAllComments, addComment, updateComment, deleteComment};

