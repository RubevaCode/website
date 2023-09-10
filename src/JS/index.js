const year = document.querySelector(".current-year");
const currentYear = new Date().getFullYear();

window.addEventListener("load", function () {
  year.innerHTML = currentYear;
  AOS.init({
    duration: 1000,
  });
});

function handleClick(id) {
  $("html, body").animate({ scrollTop: $(id).offset().top }, 100);
}
