// Mostrar el año en el footer
document.getElementById('year').textContent = new Date().getFullYear();

// Animación con Intersection Observer
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.fade-section').forEach(el => observer.observe(el));
