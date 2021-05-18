const login = document.getElementById("login-btn")
const  signUp = document.getElementById("signUp-btn")
const signUpDiv = document.getElementById("signUpDiv")
const loginDiv = document.getElementById("loginDiv")

login.addEventListener("click", e=>{
    e.preventDefault()
    signUpDiv.classList.toggle("hide")
    loginDiv.classList.toggle("hide")
   
})

signUp.addEventListener("click", e=>{
    e.preventDefault()
    signUpDiv.classList.toggle("hide")
    loginDiv.classList.toggle("hide")
   
})