/* Scroll-in animation */
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".card").forEach(card => {
  observer.observe(card);
});

/* Interactive logo movement */
const logo = document.querySelector(".hero-logo");

document.addEventListener("mousemove", e => {
  const x = (window.innerWidth / 2 - e.clientX) / 40;
  const y = (window.innerHeight / 2 - e.clientY) / 40;

  logo.style.transform = `translate(${x}px, ${y}px)`;
});
