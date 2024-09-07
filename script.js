document.addEventListener('DOMContentLoaded', function () {
  const styleToggle = document.getElementById('style-toggle');
  const body = document.body;

  function setTheme(theme) {
    body.classList.remove('light-mode', 'dark-mode');
    body.classList.add(theme + '-mode');
    localStorage.setItem('theme', theme);
    updateToggleButton(theme);
  }

  function updateToggleButton(theme) {
    const sunIcon = styleToggle.querySelector('.sun-icon');
    const moonIcon = styleToggle.querySelector('.moon-icon');
    
    if (theme === 'light') {
      sunIcon.style.display = 'none';
      moonIcon.style.display = 'block';
    } else {
      sunIcon.style.display = 'block';
      moonIcon.style.display = 'none';
    }
  }

  const savedTheme = localStorage.getItem('theme') || 'dark';
  setTheme(savedTheme);

  styleToggle.addEventListener('click', () => {
    const currentTheme = body.classList.contains('light-mode') ? 'light' : 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  });
});