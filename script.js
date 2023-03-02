var fname = prompt("Please enter your full name:");
var username = prompt("Please enter your username:")
let text = "What is your gender?\nPress OK if you are Male\nCancel if Female";

if (confirm(text) == true){
    var gender = "M";
    document.getElementById("gender").innerHTML = gender;
    alert("Your profile gender is set to MALE");
}
else {
    var gender = "F";
    document.getElementById("gender").innerHTML = gender;
    alert("Your profile gender is set to FEMALE");
}

var desc = prompt("Please type a brief description of yourself");
var year = prompt("Please enter your Birth Year:");
let date = new Date().getFullYear();
var age = date-year;


var pfp = confirm("Do you want to use a custom profile picture?");
    if(pfp){
        var customPFP = prompt("Please enter the file name of the picture. (Ex: wow.jpg )")
        document.getElementById("ppic").src = customPFP;
        alert("Profile picture has been updated.");
}
else {
    document.getElementById("ppic").src = ppic;
    alert("No image has been set.")
}

document.getElementById("fname").innerHTML = fname;
document.getElementById("username").innerHTML = username;
document.getElementById("desc").innerHTML = desc;
document.getElementById("year").innerHTML = year;
document.getElementById("age").innerHTML = age;