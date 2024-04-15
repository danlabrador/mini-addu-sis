const form = document.getElementById('login-form');
const loginBtn = document.getElementById('login-btn');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

const url = window.location.href;
const isTeacher = url.includes('ais');
const hasLoginSlug = url.includes('login');
const hasStudentLoginSlug = !isTeacher && hasLoginSlug;
const hasFacultyLoginSlug = isTeacher && hasLoginSlug;

form.addEventListener('submit', (e) => {
  e.preventDefault();
});

loginBtn.addEventListener('click', () => {
  if (hasStudentLoginSlug && usernameInput.value && passwordInput.value) {
    window.location.href = '../grades/';
  }

  if (hasFacultyLoginSlug && usernameInput.value && passwordInput.value) {
    window.location.href = '../submit-grades/';
  }

  if (!hasLoginSlug && usernameInput.value && passwordInput.value) {
    window.location.href = isTeacher ? './ais/submit-grades/' : './sis/grades/';
  }
});
