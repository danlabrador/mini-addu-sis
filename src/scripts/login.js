const form = document.getElementById('login-form');
const loginBtn = document.getElementById('login-btn');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

const url = window.location.href;
const isTeacher = url.includes('ais');

form.addEventListener('submit', (e) => {
  e.preventDefault();
});

loginBtn.addEventListener('click', () => {
  if (usernameInput.value && passwordInput.value) {
    window.location.href = isTeacher ? '/ais/submit-grades/' : '/sis/grades';
  }
});