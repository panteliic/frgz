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

const currentImage = document.querySelector(".current-image");
const closeImage = document.querySelector(".close-preview");
const galleryOverlay = document.querySelector(".gallery-overlay");
const gallery = document.querySelectorAll(".image");
var indexImage;
function openImage(image) {
  currentImage.src = image.src;
  galleryOverlay.classList.add("open");
  document.body.style.overflowY = "hidden"

  gallery.forEach((img, index) => {
    if (img.src === image.src) {
      indexImage = index;
    }
  });
}
closeImage.addEventListener("click", function () {
  galleryOverlay.classList.remove("open");
    document.body.style.overflowY = "auto"
});

function slider(direction) {
  indexImage += direction;
  if (indexImage < 0) indexImage = gallery.length - 1;
  else if (indexImage >= gallery.length) indexImage = 0;

  currentImage.src = gallery[indexImage].src;
}
