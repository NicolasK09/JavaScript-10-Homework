const postsUrl = 'https://jsonplaceholder.typicode.com/posts';

function createPostElement(post) {
  const li = document.createElement('li');
  li.className = 'post';
  li.innerHTML = `
    <h3>${post.title}</h3>
    <p>${post.body}</p>
  `;
  return li;
}

function displayPosts(posts) {
  const postsList = document.getElementById('posts');
  posts.forEach(post => {
    const postElement = createPostElement(post);
    postsList.appendChild(postElement);
  });
}

function getPosts() {
  fetch(postsUrl)
    .then(response => response.json())
    .then(posts => {
      displayPosts(posts);
    })
    .catch(error => {
      console.error('An error occurred:', error);
    });
}

setTimeout(() => {
  getPosts();
}, 2000);
