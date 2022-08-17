function getUser() {
    var request = new XMLHttpRequest();
    request.open('GET', user_url, true);
    //This function will be called when data returns from the web api
    request.onload = function () {
        //get all the movies records into our movie array
        user_array = JSON.parse(request.responseText);
        console.log(user_array)
    };
    request.send();
}

function getSpecificUser() {
    var request = new XMLHttpRequest();
    request.open('GET', user_url, true);
    //This function will be called when data returns from the web api
    request.onload = function() {
    //get all the movies records into our movie array
    user_array = JSON.parse(request.responseText);
    var username = sessionStorage.getItem("username");
    var get_current_user = []
    console.log(user_array)
    //look thru alll the users
    for(var i = 0; i < user_array.length; i++){
        //if the logged in user matches with ones of the users it will get all these
        if (user_array[i].username == username){
            console.log(user_array[i].username)
            get_current_user.push(user_array[i])
            sessionStorage.setItem("_id",user_array[i]._id)
            document.getElementById("inputusername").value = user_array[i].username;
            document.getElementById("inputpassword").value = user_array[i].password;
            document.getElementById("inputname").value = user_array[i].name;
            document.getElementById("inputgender").value = user_array[i].gender;
            document.getElementById("inputemail_address").value = user_array[i].email_address;
            break;
        }
    }
};
request.send();}

function updateuser() {
    var updateuser = new XMLHttpRequest();
    var updateurl = user_url + "/" + sessionStorage.getItem("_id"); // /users/_id
    console.log(sessionStorage.getItem("_id"))
    updateuser.open("PUT", updateurl, true);
    updateuser.setRequestHeader("Content-type", "application/json");
    var username = document.getElementById("inputusername").value;
    var password = document.getElementById("inputpassword").value;
    var name = document.getElementById("inputname").value;
    var gender = document.getElementById("inputgender").value;
    var email_address = document.getElementById("inputemail_address").value;
    var token = sessionStorage.getItem("token")
    var payload = { username: username, password: password,name: name,gender: gender, email_address: email_address, token: token }
    updateuser.send(JSON.stringify(payload))
}
function deleteUser() {
    var response = confirm("Are you certain that you want to delete this account?");
    if (response == true) { //if yes then it will delete the user
        var deletethisuser = new XMLHttpRequest();
        var deleteUser_url = user_url + "/" + sessionStorage.getItem("_id");
        deletethisuser.open("DELETE", deleteUser_url, true);
        deletethisuser.setRequestHeader("Content-type", "application/json");
        deletethisuser.onload = function () {
            //redirect the user back into main page after they delete
            window.location.href="index.html"
            sessionStorage.clear();
                $('#registerMenu').show();
                $('#loginMenu').show();
                $('#logoutMenu').hide();
        }
        deletethisuser.send();
    }
}