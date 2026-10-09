// Local portfolio interactions. Replace placeholder links in index.html with real URLs.
document.querySelectorAll('[data-placeholder-link]').forEach((link) => {
  link.addEventListener('click', (event) => {
    if (link.getAttribute('href') === '#') {
      event.preventDefault();
      alert('This is a placeholder link. Edit index.html and add your CAD, GitHub, or documentation URL.');
    }
  });
});

// Keep the project count in sync if you add or remove .project-card sections.
const count = document.querySelectorAll('.project-card').length;
const countNode = document.querySelector('#project-count');
if (countNode) countNode.textContent = `${String(count).padStart(2, '0')} PROJECTS`;
