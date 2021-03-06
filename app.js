const form = document.querySelector('#form');
const input = document.querySelector('#input');
const msg = document.querySelector('#msg');
const posts = document.querySelector('#posts');

const data = {};

form.addEventListener('submit', (e) => {
  e.preventDefault();

  formValidation();
});

const formValidation = () => {
  if (input.value === '') {
    msg.innerHTML = 'Post cannot be blank';
  } else {
    msg.innerHTML = '';
    acceptData();
  }
};

const acceptData = () => {
  data['text'] = input.value;
  console.log(data);
  createPost();
};

const createPost = () => {
  posts.innerHTML += `
    <div>
      <p>${data.text}</p>
      <span class='options'>
        <i onClick='editPost(this)' class='fas fa-edit'></i>
        <i onClick='deletePost(this)' class='fas fa-trash-alt'></i>
      </span>
    </div>
  `;
  input.value = '';
};

const deletePost = (e) => {
  console.log(e.parentElement.parentElement.remove());
};

const editPost = (e) => {
  console.log(e.parentElement.previousElementSibling.innerHTML);
  input.value = e.parentElement.previousElementSibling.innerHTML;
  e.parentElement.parentElement.remove();
};
