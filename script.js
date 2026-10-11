async function copyEmailToClipboard(email) {
  try {
    await navigator.clipboard.writeText(email);
  } catch (error) {
    const textarea = document.createElement('textarea');
    textarea.value = email;
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
  }
}

document.querySelectorAll('[data-copy-email]').forEach((link) => {
  link.addEventListener('click', async (event) => {
    const email = link.getAttribute('data-copy-email');
    if (!email) return;

    event.preventDefault();
    await copyEmailToClipboard(email);
    window.location.href = `mailto:${email}`;
  });
});

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
