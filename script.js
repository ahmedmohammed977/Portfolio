// Smooth Scroll
document.querySelectorAll('.nav-menu a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Typing Animation
document.addEventListener("DOMContentLoaded", () => {
  const typeSpan = document.querySelector(".typewrite");
  const words = JSON.parse(typeSpan.getAttribute("data-text"));
  let i = 0, j = 0, isDeleting = false;

  const type = () => {
    const current = words[i];
    typeSpan.textContent = current.substring(0, j);

    if (!isDeleting && j < current.length) {
      j++;
    } else if (isDeleting && j > 0) {
      j--;
    } else if (!isDeleting && j === current.length) {
      isDeleting = true;
      setTimeout(type, 1000);
      return;
    } else if (isDeleting && j === 0) {
      isDeleting = false;
      i = (i + 1) % words.length;
    }

    setTimeout(type, isDeleting ? 50 : 120);
  };

  type();
});

// Scroll Reveal Animation
const reveals = document.querySelectorAll('.hero-left, .hero-right, .section, .card');

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;
  reveals.forEach(el => {
    const elTop = el.getBoundingClientRect().top;
    if (elTop < triggerBottom) {
      el.classList.add('reveal-show');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
