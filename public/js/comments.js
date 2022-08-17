function fetchComments() {
    var request = new XMLHttpRequest();
    request.open('GET', comment_url, true);
    //This command starts the calling of the comments api
    request.onload = function () {
        //get all the comments records into our comment array
        comment_array = JSON.parse(request.responseText);
        console.log(comment_array);
    };

    request.send();
}
//This function display all the comments of that product when the user click on the comment icon button
function showProductComments(element) {
    document.getElementById("emptyComment").innerHTML = "No review yet. Create one now";
    var item = element.getAttribute("item");
    currentIndex = item;
    document.getElementById("review").textContent = "Review for " + product_array[item].product;
    //on top
    document.getElementById("commentBody").textContent = "";
    //check movie title is equal, then display the relevant comments
    for (var i = 0; i < comment_array.length; i++) {
        if (comment_array[i].productId == product_array[item]._id) {
            document.getElementById("emptyComment").innerHTML = "";
            selectedProductId = product_array[item]._id;
            star = "";
            var html = '<div class="text-center" style="width:100%;">                                                           \
                            <div class="card">                                                                                  \
                                <div class="card-body">                                                                         \
                                    <p class="card-text" id="rating' + i + '">' + comment_array[i].content + "</p>               \
                                    <small>by " + comment_array[i].username + " @ " + comment_array[i].datePosted + "</small>   \
                                </div>                                                                                          \
                            </div>                                                                                              \
                        </div>";
            document.getElementById("commentBody").insertAdjacentHTML('beforeend', html);

            var star = "";
            for (var j = 0; j < comment_array[i].rating; j++) {
                console.log(i);
                star += "<img src='images/yellowstar.png' style='width:50px'/>";
            }
            star += "<i class='far fa-trash-alt fa-2x edit' data-dismiss='modal' item='" + i + "' onClick='deleteComment(this)' ></i>";
            star += "<i class='far fa-edit fa-2x edit' data-toggle='modal' data-target='#editCommentModal' data-dismiss='modal' item='" + i + "' onClick='editComment(this)' ></i>";
            document.getElementById("rating" + i).insertAdjacentHTML('beforebegin', star + "<br/>");
        }
    }
}
function newComment() {
    //Initialise each HTML input elements in the modal window with default value.
    rating = 0;
    document.getElementById("userComments").value = "";
}

function addComment() {//submit or send new comment to server for the comment to  be added
    var token = sessionStorage.getItem("token")
    if (token != null) { //if user is logged in
        var comment = new Object();//post this object
        var currentuserid = sessionStorage.getItem("thisuserid");//store data in browser
        var currentusername = sessionStorage.getItem("username");//store data in browser
        comment.productId = product_array[currentIndex]._id; //Movie ID is required by server to create new comment 
        comment.userId = currentuserid; //get userid
        comment.username = currentusername; //get username
        comment.content = document.getElementById("userComments").value; // Value from HTML input text
        comment.datePosted = null; // Change the datePosted to null instead of taking the timestamp on the client side;
        comment.rating = rating;

        var postComment = new XMLHttpRequest(); // new HttpRequest instance to send comment

        postComment.open("POST", comment_url, true); //Use the HTTP POST method to send data to server
        postComment.setRequestHeader("Content-Type", "application/json");
        postComment.onload = function () {
            console.log("new comment sent");
            fetchComments(); // fetch all comments again so that the web page can have updated comments.     
        };
        // Convert the data in Comment object to JSON format before sending to the server.
        postComment.send(JSON.stringify(comment));
        console.log(comment)
    } else {
        var response = confirm("You must log in to post a review!");
    }
}
//This function allows the user to mouse hover the black and white popcorn
//so that it will turn to a colored version when hovered

function rateIt(element) {
    var num = element.getAttribute("value");
    var classname = element.getAttribute("class");
    var stars = document.getElementsByClassName(classname);
    var classTarget = "." + classname;

    // This is another way of writing 'for' loop, which initialises the 
    // popcorn images use black and white.
    for (let star of stars) {
        star.setAttribute("src", graystarImage);
    }
    changeStarImage(num, classTarget);
}
// This function sets the rating and coloured images based on the value of the image tag when  
// the mouse cursor hovers over the popcorn image.
function changeStarImage(num, classTarget) {
    switch (eval(num)) {
        case 1:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", yellowstarImage);
            rating = 1;
            break;
        case 2:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", yellowstarImage);
            document.querySelector(classTarget + "[value='2']").setAttribute("src", yellowstarImage);
            rating = 2;
            break;
        case 3:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", yellowstarImage);
            document.querySelector(classTarget + "[value='2']").setAttribute("src", yellowstarImage);
            document.querySelector(classTarget + "[value='3']").setAttribute("src", yellowstarImage);
            rating = 3;
            break;
        case 4:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", yellowstarImage);
            document.querySelector(classTarget + "[value='2']").setAttribute("src", yellowstarImage);
            document.querySelector(classTarget + "[value='3']").setAttribute("src", yellowstarImage);
            document.querySelector(classTarget + "[value='4']").setAttribute("src", yellowstarImage);
            rating = 4;
            break;
        case 5:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", yellowstarImage);
            document.querySelector(classTarget + "[value='2']").setAttribute("src", yellowstarImage);
            document.querySelector(classTarget + "[value='3']").setAttribute("src", yellowstarImage);
            document.querySelector(classTarget + "[value='4']").setAttribute("src", yellowstarImage);
            document.querySelector(classTarget + "[value='5']").setAttribute("src", yellowstarImage);
            rating = 5;
            break;
    }

}
//This function will hide the existing modal and present a modal with the selected comment
//so that the user can attempt to change the username, rating or movie review
//retrieve n  display the comments
function editComment(element) {
    var item = element.getAttribute("item");
    currentIndex = item; //when its triggered, it will save the comment that its been clicked on and the item number
    document.getElementById("edituserComments").value = comment_array[item].content;
    console.log(comment_array[item].rating);
    displayColorStar('editpop', comment_array[item].rating);
}
//This function displayS the correct number of colored popcorn
//based on the movie rating that is given in the user comment
function displayColorStar(classname, num) {
    var pop = document.getElementsByClassName(classname);
    var classTarget = "." + classname;
    for (let p of pop) {
        p.setAttribute("src", graystarImage);
    }
    changeStarImage(num, classTarget);
}
//This function sends the Comment data to the server for updating
function updateComment() {
    var token = sessionStorage.getItem("token")
    if (token != null) {
        var userId = sessionStorage.getItem("thisuserid");
        if (userId == comment_array[currentIndex].userId) {
            var response = confirm("Do you want to update this comment?");
            if (response == true) {
                //if true, it will run the /comment/id
                var edit_comment_url = comment_url + "/" + comment_array[currentIndex]._id;
                var updateComment = new XMLHttpRequest(); // new HttpRequest instance to send request to server
                updateComment.open("PUT", edit_comment_url, true); //The HTTP method called 'PUT' is used here as we are updating data
                updateComment.setRequestHeader("Content-Type", "application/json");
                comment_array[currentIndex].content = document.getElementById("edituserComments").value;
                comment_array[currentIndex].rating = rating;
                updateComment.onload = function () {
                    fetchComments();//after update fetch latest updated comment
                };
                updateComment.send(JSON.stringify(comment_array[currentIndex]));
            }
        } else {
            var response = confirm("Wrong user! You cannot modify someone else's comment");
        }
    } else {
        var response = confirm("You must log in to edit a review!");
    }
}

//This function deletes the selected comment in a specific movie
function deleteComment(element) {
    var token = sessionStorage.getItem("token")
    if (token != null) {
        var item = element.getAttribute("item"); //get the current item
        var userid = sessionStorage.getItem("thisuserid");
        if (userid == comment_array[item].userId) {
            var response = confirm("Do you want to delete this comment?");
            if (response == true) {
                var delete_comment_url = comment_url + "/" + comment_array[item]._id;
                var eraseComment = new XMLHttpRequest();
                eraseComment.open("DELETE", delete_comment_url, true);
                eraseComment.onload = function () {
                    fetchComments();
                };
                eraseComment.send();
            }
        } else {
            var response = confirm("Wrong user! You cannot delete someone else's comment");
        }
    } else {
        var response = confirm("You must log in to delete a review!");
    }
}