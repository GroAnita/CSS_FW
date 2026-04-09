function validateLoginForm() {
  const form = document.getElementById("loginForm");
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const confirmPasswordInput = document.getElementById("confirmPassword");
  const errorMessage = document.getElementById("errorMessage");
  const successMessage = document.getElementById("successMessage");
  console.log("Form validation script loaded");

  if (!form) return;

  // This validator is for the frontpage login page only.
  // Registration has a confirm password field and its own validation script.
  if (confirmPasswordInput) return;

  form.addEventListener("submit", (e) => {
    console.log("Form submitted");
    e.preventDefault();

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    errorMessage.classList.add("hidden");
    usernameInput.classList.remove("border-pink-900");
    passwordInput.classList.remove("border-pink-900");

    if (username !== "admin" || password !== "password123") {
      errorMessage.classList.remove("hidden");
      if (successMessage) successMessage.classList.add("hidden");
      usernameInput.classList.add("border-pink-900");
      passwordInput.classList.add("border-pink-900");
    } else {
      errorMessage.classList.add("hidden");
      if (successMessage) successMessage.classList.remove("hidden");
      form.querySelector("button").disabled = true;
      setTimeout(() => {
        window.location.href = "../profile/index.html";
      }, 1500);
    }
  });

  usernameInput.addEventListener("input", () => {
    errorMessage.classList.add("hidden");
    usernameInput.classList.remove("border-pink-900");
  });

  passwordInput.addEventListener("input", () => {
    errorMessage.classList.add("hidden");
    passwordInput.classList.remove("border-pink-900");
  });
}

validateLoginForm();
