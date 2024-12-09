const register = document.querySelector("#button1");
const sigin = document.querySelector("#button2");
const signin = document.querySelector("#button4");
const regbox = document.querySelector('.register-box');
const logbox = document.querySelector('.login-box');
sigin.addEventListener("click", () => {
    logbox.style.display = "block";
    regbox.style.display = "none";
})

register.addEventListener("click", () => {
    logbox.style.display = "none";
    regbox.style.display = "block";
})
signin.addEventListener("click", () => {
    logbox.style.display = "block";
    regbox.style.display = "none";
})

const csrfToken = document.cookie.replace(/(?:(?:^|.*;\s*)csrftoken\s*=\s*([^;]*).*$)|^.*$/, "$1");
logbox.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.querySelector('#username');
    const password = document.querySelector("#Password");
    login()
    async function login() {
        link = new URL(`http://127.0.0.1:8000/api/login`);
        const response1 = await fetch(link,
            {
                method: "post",
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRFToken': csrfToken,
                },
                body: JSON.stringify({
                    "username": name.value,
                    "password": password.value,
                })
            }
        );
        const data1 = await response1;
        if (data1.ok == false) {
            alert("Invalid UserName or Password");
        }
        const data2 = await response1.json();
        console.log(data2);
        if (data2.userstatus == true) {
            window.location.href = "http://127.0.0.1:8000/users/admin";
        }
        else {
            window.location.href = "http://127.0.0.1:8000/users/user";
        }
        window.localStorage.setItem("username", data2.username);
        window.localStorage.setItem("userid", data2.userid);
    }
    name.value = "";
    password.value = "";
})


//fetch post
regbox.addEventListener("submit", (e) => {
    e.preventDefault();
    const regname = document.querySelector("#reg-name");
    const regemail = document.querySelector("#reg-email");
    const regpassword = document.querySelector('#reg-password');
    register()
    async function register() {
        link = new URL(`http://127.0.0.1:8000/api/register`);
        const response1 = await fetch(link,
            {
                method: "post",
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRFToken': csrfToken,
                },
                body: JSON.stringify({
                    "username": regname.value,
                    "email": regemail.value,
                    "password": regpassword.value
                })
            }
        );
        const data1 = await response1;
        if (data1.ok == false) {
            alert("Invalid Details");
        }
        const data2 = await response1.json();
        alert("Registration Successful");
    }
    regname.value = "";
    regemail.value = "";
    regpassword.value = "";
})


