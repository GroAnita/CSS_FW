const form = document.getElementById("loginForm");

form.addEventListener("input", (e) => {
  const input = e.target;
  if (!input.matches("input")) return;

  validateField(input);
});

function validateField(input) {
  const wrapper = input.parentElement;
  const validIcon = wrapper.querySelector(".valid");
  const invalidIcon = wrapper.querySelector(".invalid");

  let isValid = false;

  switch (input.id) {
    case "fullName":
      isValid = input.value.trim().length >= 3;
      break;
    case "phoneNumber":
      isValid = /^\+?[1-9]\d{1,14}$/.test(input.value.trim());
      break;
    case "age":
      const today = new Date();
      const birthDate = new Date(input.value);
      let age = today.getFullYear() - birthDate.getFullYear();
      const m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      isValid = age >= 18;
      break;
    case "username":
      isValid = input.value.trim().length >= 5;
      break;
    case "email":
      isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value.trim());
      break;
    case "password":
      isValid = input.value.trim().length >= 8;
      break;
    case "confirmPassword":
      const password = document.getElementById("password").value;
      isValid = input.value === password && input.value.trim().length >= 8;
      break;

    default:
      isValid = input.value.trim() !== "";
  }

  if (isValid) {
    validIcon.classList.remove("hidden");
    invalidIcon.classList.add("hidden");
  } else {
    validIcon.classList.add("hidden");
    invalidIcon.classList.remove("hidden");
  }
}

const toggles = document.querySelectorAll(".password-toggle");

toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    const container = toggle.closest(".passwordContainer");
    const input = container.querySelector("input");
    if (input.type === "password") {
      input.type = "text";
      toggle.classList.remove("fa-eye-slash");
      toggle.classList.add("fa-eye");
    } else {
      input.type = "password";
      toggle.classList.remove("fa-eye");
      toggle.classList.add("fa-eye-slash");
    }
  });
});
