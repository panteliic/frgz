
const pagination = document.querySelector(".pagination");
const posts = document.querySelectorAll(".post");
const paginationStart = document.querySelector(".pagination-start");
const paginationEnd = document.querySelector(".pagination-end");

posts.forEach((element, index) => {
  if (index % 5 === 0) {
    const newButton = document.createElement("div");
    newButton.classList.add("pagination-button");
    if (index / 5 === 0) newButton.classList.add("active-pagination");
    newButton.id = index / 5;
    newButton.textContent = index / 5 + 1;
    newButton.addEventListener("click", () => paginatePosts(index / 5));

    pagination.insertBefore(newButton, paginationEnd);
  }
  element.style.display = "none";
});

function paginatePosts(page) {
  const paginationButton = document.querySelectorAll(".pagination-button");
  paginationButton.forEach((button) => {
    button.classList.remove("active-pagination");
  });

  document.getElementById(page).classList.add("active-pagination");

  posts.forEach((post) => (post.style.display = "none"));
  for (let i = page * 5; i < Math.min((page + 1) * 5, posts.length); i++) {
    posts[i].style.display = "flex";
  }
}

paginatePosts(0);
paginationStart.addEventListener("click", () => paginatePosts(0));
paginationEnd.addEventListener("click", () =>
  paginatePosts(Math.floor(posts.length / 5))
);
