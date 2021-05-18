const editButton = document.getElementById("edit")
const firstName = document.getElementById("firstNameLI")
const lastName = document.getElementById("lastNameLI")
const email = document.getElementById("emailLI")
const locationForm = document.getElementById("locationLI")
const userName = document.getElementById("name")
const userEmail = document.getElementById("userEmail")
const userLocation = document.getElementById("userLocation")
const Update = document.getElementById("tgUpdate")


editButton.addEventListener("click", e=>{
    e.preventDefault()
    userName.classList.toggle("hide")
    userEmail.classList.toggle("hide")
    userLocation.classList.toggle("hide")
    Update.classList.toggle("hide")
    editButton.classList.toggle("hide")
    firstName.classList.toggle("hide")
    lastName.classList.toggle("hide")
    email.classList.toggle("hide")
    locationForm.classList.toggle("hide")
})


