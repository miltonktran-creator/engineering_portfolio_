// Smooth in-page navigation and a small active-section cue for the contents list.
document.querySelectorAll('.toc-list a').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelectorAll('.toc-list a').forEach(item => item.removeAttribute('aria-current'));
    link.setAttribute('aria-current', 'location');
  });
});
