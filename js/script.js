const navBtn = document.querySelector(".nav-btn");
const closeBtn = document.querySelector(".close-nav");
const menu = document.querySelector("nav ul");

navBtn.addEventListener("click", () => {
  menu.classList.add("active");
});
closeBtn.addEventListener("click", () => {
  menu.classList.remove("active");
});

const nav = document.querySelector("nav");

const handleScroll = () => {
  if (window.scrollY > 0) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
};

window.addEventListener("scroll", handleScroll);

document.getElementById("newsletter-prijava").addEventListener("click", () => {
  const email = document.getElementById("newsletter-email");

  if (email.value.trim() === "" || !/^\S+@\S+\.\S+$/.test(email.value.trim())) {
    document.querySelector(".email-text").textContent =
      email.value.trim() === "" ? "Ovo polje je obavezno" : "E-mail adresa nije ispravna!";
    document.querySelector(".email-text").style.visibility = "visible";
  } else {
    document.querySelector(".email-text").style.visibility = "hidden";
    email.value = ""
  }
});
