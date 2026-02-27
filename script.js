"https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js";

// intro
const texts = ["Welcome to Aisyah's page👋", "Hi, I'm Aisyah Siti Zahra!"];

const typingElement = document.querySelector(".typing");

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentText = texts[textIndex];

  if (!isDeleting) {
    typingElement.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentText.length) {
      setTimeout(() => (isDeleting = true), 1000);
    }
  } else {
    typingElement.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
    }
  }

  setTimeout(typeEffect, isDeleting ? 50 : 100);
}

typeEffect();

// edu
function toggleLogo(element) {
  const allItems = document.querySelectorAll(".logo-item");

  allItems.forEach((item) => {
    item.classList.remove("active");
  });

  element.classList.add("active");
}
