function validateLoginForm() {
  const form = document.getElementById("loginForm");
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const errorMessage = document.getElementById("errorMessage");
  console.log("Form validation script loaded");

  if (!form) return; //

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
      successMessage.classList.add("hidden");
      usernameInput.classList.add("border-pink-900");
      passwordInput.classList.add("border-pink-900");
    } else {
      errorMessage.classList.add("hidden");
      successMessage.classList.remove("hidden");
      form.querySelector("button").disabled = true;
      setTimeout(() => {
        window.location.href = "src/pages/profilePage.html";
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
