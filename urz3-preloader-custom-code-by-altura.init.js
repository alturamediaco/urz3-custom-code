document.addEventListener("DOMContentLoaded", function () {
  const riveContainer = document.getElementById("logo-rive");
  const loader = document.getElementById("loader");
  const hero = document.getElementById("hero-rock");

  if (!riveContainer || !loader) return;

  // Set initial hero state
  if (hero) {
    hero.style.opacity = "0";
    hero.style.transform = "translateY(100vh)";
    hero.style.transition = "transform 1.2s ease-out, opacity 1.2s ease-out";
  }

  // Wait for Rive canvas to appear
  const checkReady = setInterval(() => {
    const canvas = riveContainer.querySelector("canvas");

    if (canvas && canvas.offsetHeight > 0) {
      clearInterval(checkReady);

      setTimeout(() => {
        // Step 1: Animate loader out
        loader.classList.add("hide-loader");

        // Step 2: Fully remove loader from layout after animation completes
        setTimeout(() => {
          loader.classList.add("loader-gone");

          if (hero) {
            hero.style.opacity = "1";
            hero.style.transform = "translateY(0)";
          }
        }, 1050); // Delay for fade-out animation
      }, 3000); // Delay to match Rive animation
    }
  }, 100);
});
