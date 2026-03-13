// REGISTER FUNCTION
function register(){
    let username = document.getElementById("registerUsername").value;
    let password = document.getElementById("registerPassword").value;

    if(username === "" || password === ""){
        alert("Please fill all fields");
        return;
    }

    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    alert("Registration successful!");
    window.location.href = "index.html";
}

// LOGIN FUNCTION
function login(){
    let username = document.getElementById("loginUsername").value;
    let password = document.getElementById("loginPassword").value;
    let remember = document.getElementById("rememberMe").checked;

    let storedUsername = localStorage.getItem("username");
    let storedPassword = localStorage.getItem("password");

    if(username === storedUsername && password === storedPassword){
        if(remember){
            localStorage.setItem("loggedIn", "true");
        } else {
            sessionStorage.setItem("loggedIn", "true");
        }
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid credentials");
    }
}

// CHECK LOGIN (Protect Dashboard)
function checkLogin(){
    let isLoggedIn = localStorage.getItem("loggedIn") || sessionStorage.getItem("loggedIn");

    if(!isLoggedIn){
        window.location.href = "index.html";
    } else {
        document.getElementById("welcomeUser").innerText =
            "Hello, " + localStorage.getItem("username");
    }
}

// LOGOUT
function logout(){
    localStorage.removeItem("loggedIn");
    sessionStorage.removeItem("loggedIn");
    window.location.href = "index.html";
}
