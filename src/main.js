// Main JavaScript for Luxury Brand Showcase

// Wait for DOM
document.addEventListener('DOMContentLoaded', () => {
  setupScrollReveal();
  setupSmoothScroll();
});

function setupScrollReveal() {
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target); // Trigger once
      }
    });
  }, options);

  const elements = document.querySelectorAll('.reveal');
  elements.forEach(el => observer.observe(el));
}

function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}


const contactBtn = document.getElementById("contactBtn");
const modal = document.getElementById("contactModal");
const closeBtn = modal.querySelector(".modal-close");
const overlay = modal.querySelector(".modal-overlay");

contactBtn.addEventListener("click", (e) => {
  e.preventDefault();
  modal.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  modal.classList.remove("active");
});

overlay.addEventListener("click", () => {
  modal.classList.remove("active");
});
