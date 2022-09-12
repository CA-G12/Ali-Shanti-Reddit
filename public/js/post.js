const form = document.querySelector('.addPost');
const titleInput = document.querySelector('#title');
const postInput = document.querySelector('#post');
const msg = document.querySelector('.msg');
const buttons = document.querySelector('#buttons');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  fetch('/addPost', {
    method: 'POST',
    body: JSON.stringify({
      title: titleInput.value,
      post: postInput.value,
    }),
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => response.json())
    .then((data) => {
      msg.textContent = data.message;
      window.location = '/';
    })
    .catch((error) => console.log(error));
});
const getCookie = (cname) => {
  const name = `${cname}=`;
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i += 1) {
    let c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
};
const token = getCookie('token');
if (token) {
  buttons.innerHTML = '';
  const a = document.createElement('a');
  const icon = document.createElement('i');
  icon.setAttribute('class', 'fa fa-plus');
  icon.title = 'create post';
  a.href = '/addPost';
  const logout = document.createElement('a');
  logout.textContent = 'Log Out';
  logout.href = '/logout';
  logout.setAttribute('class', 'logout');
  logout.style.marginTop = '8px';
  const user = document.createElement('span');
  fetch('/userData')
    .then((res) => res.json())
    .then((result) => {
      user.textContent = result.userName;
      user.setAttribute('class', 'userName');
    });
  a.appendChild(icon);
  buttons.appendChild(a);
  buttons.appendChild(logout);
  buttons.appendChild(user);
}
