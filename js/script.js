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

document.addEventListener("DOMContentLoaded", () => {

  const currentPage = window.location.pathname; 
  const pageName = document.title || currentPage; 

  function logVisit(page, name) {
    let visits = JSON.parse(localStorage.getItem("pageVisits")) || {}; 
    if (!visits[page]) {
      visits[page] = { count: 0, name }; 
    }
    visits[page].count += 1; 
    localStorage.setItem("pageVisits", JSON.stringify(visits)); 
  }

  logVisit(currentPage, pageName); 

  const links = document.querySelectorAll("a"); 
  links.forEach(link => {
    link.addEventListener("click", (event) => {
      const url = event.target.href;
      const name = event.target.textContent.trim(); 
      logClick(url, name); 
    });
  });


  displayTopLinks();
});

function displayTopLinks() {
  const visits = JSON.parse(localStorage.getItem("pageVisits")) || {};
  const sortedPages = Object.entries(visits)
    .sort((a, b) => b[1].count - a[1].count) 
    .slice(0, 3); 

  const ul = document.querySelector(".most-viewed-links");
  sortedPages.forEach(([url, data]) => {
    const li = document.createElement("li");
    li.innerHTML = `<a href="${url}">${data.name}</a>`; 
    ul.appendChild(li);
  });
}
