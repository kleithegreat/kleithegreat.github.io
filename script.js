document.addEventListener('DOMContentLoaded', function () {
  const styleToggle = document.getElementById('style-toggle');
  const themeStyle = document.getElementById('theme-style');

  function setTheme(theme) {
    themeStyle.setAttribute('href', theme + '-mode.css');
    localStorage.setItem('theme', theme);
  }

  const savedTheme = localStorage.getItem('theme') || 'dark';
  setTheme(savedTheme);

  styleToggle.addEventListener('click', () => {
    const currentTheme = localStorage.getItem('theme') || 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  });
});