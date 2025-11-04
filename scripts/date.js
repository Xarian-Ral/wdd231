document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('currentYear');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const modifiedEl = document.getElementById('lastModified');
  if (modifiedEl) modifiedEl.textContent = document.lastModified || 'Unknown';
});
