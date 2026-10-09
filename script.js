document.querySelectorAll('[data-placeholder-link]').forEach((link) => {
  link.addEventListener('click', (event) => {
    if (link.getAttribute('href') === '#') {
      event.preventDefault();
      alert('This is a placeholder link. Edit index.html and add your CAD, GitHub, or documentation URL.');
    }
  });
});
const count = document.querySelectorAll('.project-card').length;
const countNode = document.querySelector('#project-count');
if (countNode) countNode.textContent = `${String(count).padStart(2, '0')} PROJECTS`;
