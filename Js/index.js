(() => {
  "use strict";
  const forms = document.querySelectorAll(".needs-validation");

  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add("was-validated");
      },
      false
    );
  });
})();

/* For Lab cards Which wants to scroll down */

const cards = document.querySelectorAll(".card");
const displayNumber = document.getElementById("card-number");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const index = Array.from(cards).indexOf(entry.target) + 1;
        displayNumber.textContent = index.toString().padStart(2, "0");
      }
    });
  },
  {
    root: document.getElementById("scroll-container"),
    threshold: 1,
  }
);

cards.forEach((card) => observer.observe(card));

document.addEventListener("DOMContentLoaded", function () {
  const modelViewer = document.querySelector("model-viewer");
  const buttons = document.querySelectorAll(".d-btns button");

  if (buttons.length > 0) {
    buttons[0].classList.add("btn-active");
  }

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const modelName = btn.textContent.trim().toLowerCase();
      const formattedName = modelName
        .replace(/\s+/g, " ")
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
      const newSrc = `./modal/glb/${formattedName}.glb`;
      modelViewer.setAttribute("src", newSrc);
      buttons.forEach((b) => b.classList.remove("btn-active"));
      btn.classList.add("btn-active");
    });
  });
});
