function welcome() {
    alert("Welcome to the site")
}

window.welcome();
alert(window.innerHeight)

document.body.style.background="red";
document.body.style.background = "red";
setTimeout(() => document.body.style.background="", 1000);

alert(location.href);
if (confirm("Want to visit Wikipedia?")){
    location.href="https://wikipedia.org";
}



