const form = document.querySelector('.login');
const emailInput = document.querySelector('#email');
const passInput = document.querySelector('#password');
const errorMsg = document.querySelector('.errorMsg');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  fetch('/login', {
    method: 'POST',
    body: JSON.stringify({
      email: emailInput.value,
      password: passInput.value,
    }),
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.message) {
        window.location = '/';
      } else {
        errorMsg.textContent = data;
        errorMsg.style.color = 'red';
      }
    }).catch((error) => {
      console.log(error);
    });
});
