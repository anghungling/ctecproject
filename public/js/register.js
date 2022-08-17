function registerMe() {
    var registerUser = new XMLHttpRequest();
    totalUsers = user_array.length
    list = [];
    for (var count = 0; count < totalUsers; count++) {
        var registeredUser = user_array[count].username;
        list.push(registeredUser)
    }
    registerUser.open("POST", "/users", true);
    registerUser.setRequestHeader("Content-Type", "application/json");
    registerUser.onload = function () {
        $('#registerModal').modal('hide');
        $('#registersuccessModal').modal('show');
    }
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var name = document.getElementById("name").value;
    var gender = document.getElementById("gender").value;
    var email_address = document.getElementById("email_address").value;
    if (list.includes(username)) { //if username alr exist in database then show failmodel
        $('#registerfailModal').modal('show');
    } else { //else it will run the registeruser function
        var payload = { username: username, password: password, name: name, gender: gender, email_address: email_address }
        registerUser.send(JSON.stringify(payload));
    }
}