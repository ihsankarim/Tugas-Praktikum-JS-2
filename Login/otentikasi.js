function login() {
    event.preventDefault();

    let uname = document.getElementById("username").value;
    let passwrd = document.getElementById("password").value;

    if (uname == "ahmad2017" && passwrd == "integrity") {
        location.replace("success.html");
        alert("Login Berhasil");
    }
    else {
        alert("Login Gagal")
    }
}