document.addEventListener('DOMContentLoaded', (event) => {
  const styleToggle = document.getElementById('style-toggle');
  const body = document.body;
  const sunIcon = document.querySelector('.sun-icon');
  const moonIcon = document.querySelector('.moon-icon');

  function setTheme(theme) {
    body.classList.remove('light-mode', 'dark-mode');
    body.classList.add(theme);
    localStorage.setItem('theme', theme);
    updateIcon(theme);
  }

  function updateIcon(theme) {
    if (theme === 'dark-mode') {
      sunIcon.style.opacity = '1';
      moonIcon.style.opacity = '0';
    } else {
      sunIcon.style.opacity = '0';
      moonIcon.style.opacity = '1';
    }
  }

  const currentTheme = localStorage.getItem('theme') || 'dark-mode';
  setTheme(currentTheme);

  styleToggle.addEventListener('click', () => {
    const newTheme = body.classList.contains('light-mode') ? 'dark-mode' : 'light-mode';
    setTheme(newTheme);
  });
});