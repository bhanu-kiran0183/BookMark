//repository link https://github.com/bhanu-kiran0183?tab=repositories
const labelCloseForm = document.getElementById("close-modal");
const btnAddBookmark = document.getElementById("show--button");
const websiteName = document.getElementById("website-name");
const websiteUrl = document.getElementById("website-url");
const modalContainer = document.getElementById("modal");
labelCloseForm.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("write code for ___");
  document.getElementById("modal").classList.remove("show-modal");
});
btnAddBookmark.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("write code for ___");
  document.getElementById("modal").classList.add("show-modal");
  websiteName.focus();
});
//closing the form if the user clicks anywhere on the screen
window.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(e.target);
  e.target === modal ? modalContainer.classList.remove("show-modal") : false;
});
