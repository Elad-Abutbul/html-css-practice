const emailInput = document.getElementById("emailInput");
const errorMsg = document.getElementById("errorMsg");
const signup = document.getElementById("signup");
const success = document.getElementById("success");
const successEmail = document.getElementById("successEmail");
const dismissBtn = document.getElementById("dismissBtn");
const signupForm = document.getElementById("signupForm");
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;



// handlerim |
//           v

signupForm.addEventListener("submit",onSubmit);

dismissBtn.addEventListener("click", onDismiss);

emailInput.addEventListener("input", clearErrorState);

// handlerim ^
//           |




// functions |
//           v

function onSubmit(event) {

  event.preventDefault()

  const email = emailInput.value.trim();

  if (isValidEmail(email)) {
    showSuccessState(email);
    return;
  }

  showErrorState();

}

function onDismiss(){
  toggleViews("signup")
}

function showSuccessState(email) {

  successEmail.textContent = email;

  successEmail.style.fontWeight = "600";

  signupForm.reset();

  toggleViews("success");

  clearErrorState();

}

function clearErrorState() {

  emailInput.classList.remove("input-error");

  errorMsg.style.display = "none";

}

function showErrorState() {

  emailInput.classList.add("input-error");

  errorMsg.style.display = "block";

}



function toggleViews(toggle) {

  if (toggle=="signup") {
    signup.style.display = "flex";
    success.style.display = "none";
  } else {
    signup.style.display = "none";
    success.style.display = "flex";
  }

}

function isValidEmail(email) {
  return EMAIL_PATTERN.test(email);
}

//           ^
// functions |