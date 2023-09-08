const year = document.querySelector(".current-year");
const currentYear = new Date().getFullYear();

window.addEventListener("load", function () {
  year.innerHTML = currentYear;

  AOS.init({
    duration: 1200,
  });
});
