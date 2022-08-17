"use strict";

class Comment{
    constructor(id, productId, userId, content, datePosted, rating){
        this.id = id;
        this.productId = productId;
        this.userId = userId;
        this.content = content;
        this.datePosted = datePosted;
        this.rating = rating;
    }
    getId(){
        return this.id;
    }
    getProductId(){
        return this.productId;
    }
    getUserId(){
        return this.userId;
    }
    getContent(){
        return this.content;
    }
    getDate(){
        return this.datePosted;
    }
    getRating(){
        return this.rating;
    }
    setProductId(productId){
        this.productId = productId;
    }
    setUserId(userId){
        this.userId = userId;
    }
    setContent(content){
        this.content = content;
    }
    setDate(datePosted){
        this.datePosted = datePosted;
    }
    setRating(rating){
        this.rating = rating;
    }
}
module.exports = Comment;