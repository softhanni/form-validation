


let submit = document.querySelector(".submit");
submit.addEventListener("click", handleForm);


function handleForm(e) {

    e.preventDefault()

    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let confirmPassword = document.getElementById("confirm-password");
    let age = document.getElementById("age");


    if (name.value === "" || !isNaN(name.value)) {

        alert("PLZ enter a valid Name")
    } else if (email.value.includes("@") == false || email.value === "") {
        alert("Plz Enter a valid Email")
    } else if (password.value.length < 8 || password.value === "") {
        alert("Password should be greater than 8 digits")
    } else if (confirmPassword.value !== password.value || confirmPassword.value === "") {
        alert("Password dit not Match")
    } else if (age.value < 0 || age.value == "" || isNaN(age.value)) {
        alert("Please enter a valid age")
    } else {

        alert("Form Submitted Successfully")
    }

}
