function validateForm() {
  const firstName = document.getElementById("first-name").value.trim();
  const lastName = document.getElementById("last-name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;
  document
    .querySelectorAll(".error")
    .forEach((span) => (span.style.visibility = "hidden"));
  let isValid = true;

  if (firstName === "") {
    document.querySelector(".first-name-text").style.visibility = "visible";
    isValid = false;
  }

  if (lastName === "") {
    document.querySelector(".last-name-text").style.visibility = "visible";
    isValid = false;
  }

  if (email === "" || !/^\S+@\S+\.\S+$/.test(email)) {
    document.querySelector(".email-text").textContent =
      email === "" ? "Ovo polje je obavezno" : "E-mail adresa nije ispravna!";
    document.querySelector(".email-text").style.visibility = "visible";
    isValid = false;
  }

  if (
    password === "" ||
    password.length < 6 ||
    !/[A-Z]/.test(password) ||
    !/\d/.test(password)
  ) {
    document.querySelector(".password-text").textContent =
      password === ""
        ? "Ovo polje je obavezno"
        : "Lozinka mora biti najmanje 6 karaktera, sa jednim velikim slovom i jednom cifrom";
    document.querySelector(".password-text").style.visibility = "visible";
    isValid = false;
  }

  if (confirmPassword === "" || confirmPassword !== password) {
    document.querySelector(".confirm-password-text").textContent =
      confirmPassword === ""
        ? "Ovo polje je obavezno"
        : "Lozinke se ne podudaraju";
    document.querySelector(".confirm-password-text").style.visibility =
      "visible";
    isValid = false;
  }
  const message = document.getElementById("message");
  if (message) {
    if (message.value.trim() === "") {
      document.querySelector(".message-text").style.visibility = "visible";
      isValid = false;
    }
  }
  if (isValid) {
    document
      .querySelectorAll(".error")
      .forEach((span) => (span.style.visibility = "hidden"));
    document.querySelector("form").reset();
  }
}
