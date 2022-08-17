function loginMe() {

    var loginUser = new XMLHttpRequest();
    //when a user login the js will send this user input to the server side
    //when it is send to server side it will check whether the user exists
    //if exists it will generate a token and using username as the input to check

    loginUser.open("POST", "/login", true);
    loginUser.setRequestHeader("Content-Type", "application/json");
    loginUser.onload = function () {
        $('#loginModal').modal('hide'); //hide after login
        var token = JSON.parse(loginUser.responseText);
        console.log(token.result);
        if (token.result != false) { //if result is not false which means token is correct then show login success
            $('#loginsuccessModal').modal('show');
            document.getElementById("registerMenu").style.display="none";
            document.getElementById("loginMenu").style.display="none";
            document.getElementById("logoutMenu").style.display="block";
            document.getElementById("editMenu").style.display="block";
            document.getElementById("welcome_message").innerHTML="Welcome, " +username;
            document.getElementById("welcome").innerHTML="Welcome back, " +username+ "!";
            sessionStorage.setItem("token",token.result);
            sessionStorage.setItem("username",username);
            sessionStorage.setItem("thisuserid",token.thisuserid);
        } else {
            $('#loginfailModal').modal('show'); //if result is false then show login fail
        }
    }
    var username = document.getElementById("usernameLogin").value;
    var password = document.getElementById("passwordLogin").value;
    var payload = { username: username, password: password,name: name,gender: gender,email_address: email_address }
    loginUser.send(JSON.stringify(payload));
}