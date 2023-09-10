const year = document.querySelector(".current-year");
const currentYear = new Date().getFullYear();

window.addEventListener("load", function () {
  year.innerHTML = currentYear;
  AOS.init({
    duration: 1000,
  });

  const scrollTo = (id) => {
    $("html, body").animate({ scrollTop: $(id).offset().top }, 100);
  };

  $("#homeLink").on("click touchstart", function () {
    scrollTo("#home");
  });

  $("#aboutLink").on("click touchstart", function () {
    scrollTo("#advantages");
  });

  $("#servicesLink").on("click touchstart", function () {
    scrollTo("#services");
  });

  $("#contactLink").on("click touchstart", function () {
    scrollTo("#contact");
  });

  $("#advantagesBtn").on("click touchstart", function () {
    scrollTo("#advantages");
  });

  $("#servicesBtn").on("click touchstart", function () {
    scrollTo("#services");
  });

  $("#contactBtn").on("click touchstart", function () {
    scrollTo("#contact");
  });
});
