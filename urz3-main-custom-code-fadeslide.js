// urz3-main.js - hosted logic for fade-slide and fade-in animations

// FADE-SLIDE and FADE-IN animation logic

(function () {
  document.addEventListener("DOMContentLoaded", function () {
    const fadeElements = document.querySelectorAll(".fade-slide");
    const fadeIns = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const el = entry.target;
        const delay = el.getAttribute("data-delay") || "0";

        if (entry.isIntersecting) {
          el.style.transition = `opacity 0.4s ease ${delay}ms, transform 0.4s ease ${delay}ms`;
          el.classList.add("in-view");
          el.classList.add("visible");
        } else {
          el.style.transition = "none";
          el.classList.remove("in-view");
          el.classList.remove("visible");
        }
      });
    }, { threshold: 0.1 });

    fadeElements.forEach(el => observer.observe(el));
    fadeIns.forEach(el => observer.observe(el));
  });
})();
