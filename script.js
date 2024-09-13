function setTheme(theme) {
  document.body.classList.remove('light-mode', 'dark-mode');
  document.body.classList.add(theme);
  localStorage.setItem('theme', theme);
  updateIcon(theme);
}

function updateIcon(theme) {
  const sunIcon = document.querySelector('.sun-icon');
  const moonIcon = document.querySelector('.moon-icon');
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

document.addEventListener('DOMContentLoaded', (event) => {
  const styleToggle = document.getElementById('style-toggle');

  styleToggle.addEventListener('click', () => {
    const newTheme = document.body.classList.contains('light-mode') ? 'dark-mode' : 'light-mode';
    setTheme(newTheme);
  });

  updateIcon(currentTheme);
});