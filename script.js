//These query selectors fetch elements
    // 
let formOpenBtn = document.querySelector("#form-open"),
home = document.querySelector(".home"),
formContainer = document.querySelector(".form-container"),
formCloseBtn = document.querySelector(".form-close"),
signupBtn = document.querySelector("#signup"),
loginBtn = document.querySelector("#login"),
pwShowHide = document.querySelectorAll(".pw-hide");
const loginForm = document.getElementById('loginForm');


// these two event listeners that are triggered by the user
    // add-remove 'show' functionality
formOpenBtn.addEventListener("click", () => home.classList.add("show"))
formCloseBtn.addEventListener("click", () => home.classList.remove("show"));


// adding an event listener to each el in class 
    // toggles to show/not show password - visibility
pwShowHide.forEach(icon => {
    icon.addEventListener("click", () => {
        let getPwInput =icon.parentElement.querySelector("input");
        if(getPwInput.type === "password"){
            getPwInput.type = "text";
            icon.classList.replace("fa-eye-slash", "fa-eye");
        } else{
            getPwInput.type = "password";
            icon.classList.replace("fa-eye", "fa-eye-slash");
        }
    });
});

// Adding event listener for form submission
loginForm.addEventListener('submit', function(event) {
    // Get the email input and its value
        // function checking if user input matches regex pattern
        
        // Req #8 -  Use regex validation
    const emailInput = document.getElementById('emailInput');
    const emailPattern = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;

    // Check if user email input matches the pattern
    // Prevents form submission
    if (!emailPattern.test(emailInput.value)) {
        alert('Please enter a valid email address.');
        event.preventDefault(); 
    }
});

// Event listener that prevents form submission
signupBtn.addEventListener("click", (e) => {
    e.preventDefault();
    formContainer.classList.add("active");
});
loginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    formContainer.classList.remove("active");
});