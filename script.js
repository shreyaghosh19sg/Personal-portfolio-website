// Smooth scroll for nav links (optional if scroll-behavior in CSS doesn't work smoothly)
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const section = document.querySelector(this.getAttribute('href'));
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Animate sections when they appear on scroll
const animatedSections = document.querySelectorAll('.about, .skills, .projects, .contact');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1
});

animatedSections.forEach(section => {
  observer.observe(section);
});
