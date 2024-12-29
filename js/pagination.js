const pagination = document.querySelector(".pagination");
const posts = document.querySelectorAll(".post");
const paginationStart = document.querySelector(".pagination-start");
const paginationEnd = document.querySelector(".pagination-end");

if (!pagination || !paginationStart || !paginationEnd || posts.length === 0) {
  console.error("Missing necessary elements for pagination initialization.");
} else {
  initializePagination();
}

function initializePagination() {
  posts.forEach((post, index) => {
    if (index % 5 === 0) {
      createPaginationButton(index / 5);
    }
    post.style.display = "none";
  });

  paginatePosts(0);

  paginationStart.addEventListener("click", () => paginatePosts(0));
  paginationEnd.addEventListener("click", () =>
    paginatePosts(getLastPageIndex())
  );
}

function createPaginationButton(pageIndex) {
  const button = document.createElement("div");
  button.classList.add("pagination-button");
  button.id = `page-${pageIndex}`;
  button.textContent = pageIndex + 1;

  if (pageIndex === 0) button.classList.add("active-pagination");

  button.addEventListener("click", () => paginatePosts(pageIndex));
  pagination.insertBefore(button, paginationEnd);
}

function paginatePosts(page) {
  document.querySelectorAll(".pagination-button").forEach((button) => {
    button.classList.remove("active-pagination");
  });

  const activeButton = document.getElementById(`page-${page}`);
  if (activeButton) activeButton.classList.add("active-pagination");

  posts.forEach((post) => (post.style.display = "none"));

  const start = page * 5;
  const end = Math.min(start + 5, posts.length);

  for (let i = start; i < end; i++) {
    posts[i].style.display = "flex";
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function getLastPageIndex() {
  return Math.floor((posts.length - 1) / 5);
}
