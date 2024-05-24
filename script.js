document.addEventListener("DOMContentLoaded", function () {
  const footer = document.querySelector(".footer-container");
  const options = {
    root: null,
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        footer.classList.add("animate");
        observer.unobserve(entry.target);
      }
    });
  }, options);

  observer.observe(footer);
});
