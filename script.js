// Mobile menu functionality
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Close menu when clicking a link (for mobile)
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
      navLinks.classList.remove('active');
    }
  });
});

// Create video editing background elements
function createVideoEditingElements() {
  const bgContainer = document.getElementById("video-editing-bg");

  // Create timeline elements
  for (let i = 0; i < 10; i++) {
    const timeline = document.createElement("div");
    timeline.className = "timeline-element";
    timeline.style.top = `${Math.random() * 100}%`;
    timeline.style.width = `${Math.random() * 200 + 100}px`;
    timeline.style.animationDelay = `${Math.random() * 5}s`;
    timeline.style.animationDuration = `${Math.random() * 10 + 10}s`;
    bgContainer.appendChild(timeline);
  }

  // Create clip elements
  for (let i = 0; i < 8; i++) {
    const clip = document.createElement("div");
    clip.className = "clip-element";
    clip.style.left = `${Math.random() * 90}%`;
    clip.style.animationDelay = `${Math.random() * 8}s`;
    bgContainer.appendChild(clip);
  }

  // Create effect elements
  for (let i = 0; i < 6; i++) {
    const effect = document.createElement("div");
    effect.className = "effect-element";
    effect.style.left = `${Math.random() * 100}%`;
    effect.style.top = `${Math.random() * 100}%`;
    effect.style.animationDelay = `${Math.random() * 10}s`;
    bgContainer.appendChild(effect);
  }

  // Create waveform elements
  for (let i = 0; i < 5; i++) {
    const waveform = document.createElement("div");
    waveform.className = "waveform";
    waveform.style.top = `${Math.random() * 100}%`;
    waveform.style.width = `${Math.random() * 200 + 100}px`;
    waveform.style.animationDelay = `${Math.random() * 7}s`;
    bgContainer.appendChild(waveform);
  }
}

// Run on page load
window.addEventListener("DOMContentLoaded", () => {
  createVideoEditingElements();
});

// Scroll to top button
const scrollTopBtn = document.getElementById("scroll-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollTopBtn.classList.add("visible");
  } else {
    scrollTopBtn.classList.remove("visible");
  }
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Header shadow on scroll
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("desktop-nav");
  if (window.scrollY > 0) {
    navbar.style.boxShadow = "0 5px 20px var(--shadow)";
  } else {
    navbar.style.boxShadow = "0 2px 10px var(--shadow)";
  }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });
    }
  });
});
