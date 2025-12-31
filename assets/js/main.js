// Mobile Menu
const toggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");

if (toggle) {
  toggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
}

// GSAP
gsap.from(".navbar", {
  y: -80,
  opacity: 0,
  duration: 1
});

gsap.from(".hero-text h1", {
  x: -100,
  opacity: 0,
  duration: 1,
  delay: 0.5
});

gsap.from(".hero-text p", {
  x: -80,
  opacity: 0,
  duration: 1,
  delay: 0.8
});

gsap.from(".hero-image img", {
  x: 100,
  opacity: 0,
  duration: 1,
  delay: 0.6
});

gsap.from(".feature-card", {
  scrollTrigger: {
    trigger: ".features-grid",
    start: "top 80%"
  },
  y: 80,
  opacity: 0,
  stagger: 0.25,
  duration: 1
});
