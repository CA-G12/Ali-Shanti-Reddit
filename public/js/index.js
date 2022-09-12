const allContent = document.querySelector('.allContent');
const buttons = document.querySelector('#buttons');

fetch('/api/v1/allPosts')
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    data.forEach((element) => {
      const posts = document.createElement('div');
      const votes = document.createElement('div');
      const arrowUp = document.createElement('i');
      const vote = document.createElement('span');
      const arrowDown = document.createElement('i');
      const comment = document.createElement('div');
      const userName = document.createElement('p');
      const profileLink = document.createElement('a');
      const date = document.createElement('span');
      const title = document.createElement('p');
      const content = document.createElement('p');
      const icons = document.createElement('div');

      const commentIcon = document.createElement('i');
      const commentLink = document.createElement('a');
      commentLink.appendChild(commentIcon);
      commentLink.href = `displayPost/${element.id}`;
      const shareIcon = document.createElement('i');
      const saveIcon = document.createElement('i');
      const span = document.createElement('span');

      posts.setAttribute('class', 'posts');
      votes.setAttribute('class', 'votes');
      arrowUp.setAttribute('class', 'fa fa-arrow-up');
      vote.setAttribute('class', 'vote');
      vote.textContent = element.vote;
      arrowDown.setAttribute('class', 'fa fa-arrow-down');
      comment.setAttribute('class', 'comment');
      userName.setAttribute('class', 'userName');
      date.setAttribute('class', 'date');
      date.textContent = element.date.substring(11, 16);
      title.setAttribute('class', 'title');
      content.setAttribute('class', 'content');
      icons.setAttribute('class', 'icons');
      commentIcon.setAttribute('class', 'fa fa-comment-o');
      commentIcon.textContent = '  comments';
      shareIcon.setAttribute('class', 'fa fa-share');
      shareIcon.textContent = '  share';
      saveIcon.setAttribute('class', 'fa fa-floppy-o');
      saveIcon.textContent = '  save';
      arrowUp.addEventListener('click', (e) => {
        e.preventDefault();
        fetch(`/increaseVote/${element.id}`)
          .then((res) => res.json())
          .then((value) => {
            vote.textContent = value.vote;
          }).catch((err) => console.log(err));
      });
      arrowDown.addEventListener('click', (e) => {
        e.preventDefault();
        fetch(`/decreaseVote/${element.id}`)
          .then((res) => res.json())
          .then((value) => {
            vote.textContent = value.vote;
          }).catch((err) => console.log(err));
      });

      profileLink.href = `/profile/${element.user_id}`;
      userName.textContent = element.name;
      title.textContent = element.title;
      content.textContent = element.post;
      votes.appendChild(arrowUp);
      votes.appendChild(vote);
      votes.appendChild(arrowDown);
      profileLink.appendChild(userName);
      comment.appendChild(profileLink);
      comment.appendChild(date);
      comment.appendChild(title);
      comment.appendChild(content);
      icons.appendChild(commentLink);
      icons.appendChild(shareIcon);
      icons.appendChild(saveIcon);
      icons.appendChild(span);
      comment.appendChild(icons);
      posts.appendChild(votes);
      posts.appendChild(comment);
      allContent.appendChild(posts);
    });
  })
  .catch((error) => console.log(error));

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
