const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".close-icon");
const leftSidebar = document.querySelector(".left-sidebar");
const rightSidebar = document.querySelector(".right-sidebar");

menuIcon.addEventListener("click", () => {
  leftSidebar.style.width = "50%";
  rightSidebar.style.width = "50%";
  menuIcon.style.display = "none";
  closeIcon.style.display = "block";
});

closeIcon.addEventListener("click", () => {
  leftSidebar.style.width = "0";
  rightSidebar.style.width = "0";
  menuIcon.style.display = "block";
  closeIcon.style.display = "none";
});
