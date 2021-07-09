
// let username = document.getElementById("username").value = "";

// document.getElementById("signin") = console.log(username);

// const paragraphs = document.querySelectorAll("p");
// alert(paragraphs[0].nodeName);

function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;
    if(user == pass ) {
        alert("Logged In");
        return false;
    } else {
        alert("wrong user/pass");
        return false;
        }
    }

    export default login;