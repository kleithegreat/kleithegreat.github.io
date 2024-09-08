document.addEventListener('DOMContentLoaded', (event) => {
  const styleToggle = document.getElementById('style-toggle');
  const body = document.body;
  const sunIcon = document.querySelector('.sun-icon');
  const moonIcon = document.querySelector('.moon-icon');

  // Check for saved theme preference or default to light-mode
  const currentTheme = localStorage.getItem('theme') || 'light-mode';
  body.classList.add(currentTheme);

  // Set initial icon state
  updateIcon(currentTheme);

  styleToggle.addEventListener('click', () => {
    if (body.classList.contains('light-mode')) {
      setTheme('dark-mode');
    } else {
      setTheme('light-mode');
    }
  });

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
});