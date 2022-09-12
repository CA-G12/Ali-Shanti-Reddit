const form = document.querySelector('.signup');
const inputName = document.querySelector('#userName');
const inputEmail = document.querySelector('#email');
const inputPassword = document.querySelector('#password');
const textError = document.querySelector('.textError');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  fetch('/signUp', {
    method: 'post',
    body: JSON.stringify({
      userName: inputName.value,
      email: inputEmail.value,
      password: inputPassword.value,
    }),
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.message) {
        window.location = '/';
      } else {
        textError.textContent = data;
        textError.style.color = 'red';
      }
    })
    .catch((error) => {
      console.log(error);
    });
});
