const emailInput = document.getElementById("emailInput");
const errorMsg = document.querySelector(".error-msg");
const signup = document.getElementById("signup");
const success = document.querySelector(".container-success");
const successEmail = document.getElementById("successEmail");
const dismissBtn = document.getElementById("dismissBtn");
const signupForm = document.getElementById("signupForm");
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

signupForm.addEventListener("submit", onSubmit);

dismissBtn.addEventListener("click", onDismiss);


function onSubmit(event) {
  event.preventDefault();

  const email = emailInput.value.trim();

  if (isValidEmail(email)) {
    showSuccessState(email);
    return;
  }

  showErrorState();
}

function onDismiss() {
  toggleViews("signup");
}

function showSuccessState(email) {
  successEmail.textContent = email;

  successEmail.classList.add("font-weight-bold");

  signupForm.reset();

  toggleViews("success");

  clearErrorState();
}

function clearErrorState() {
  emailInput.classList.remove("input-error");
  errorMsg.classList.remove("block");
  errorMsg.classList.add("hidden");
}

function showErrorState() {
  emailInput.classList.add("input-error");
  errorMsg.classList.remove("hidden");
  errorMsg.classList.add("block");
}

function toggleViews(toggle) {
  if (toggle == "signup") {
    signup.style.display = "flex";
    success.style.display = "none";
    return;
  }
  signup.style.display = "none";
  success.style.display = "flex";
}

function isValidEmail(email) {
  return email && EMAIL_PATTERN.test(email);
}
