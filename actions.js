document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  const postsDiv = document.querySelector('#posts');

  form.addEventListener('submit', (event) => {
    event.preventDefault(); // prevent the form from submitting

    // get the form data
    const formData = new FormData(form);
    const name = formData.get('name');
    const email = formData.get('email');
    const category = formData.get('category');
    const message = formData.get('message');

    // create the post card
    const postCard = document.createElement('div');
    postCard.classList.add('card');

    const postHeader = document.createElement('h2');
    postHeader.textContent = name;

    const postCategory = document.createElement('p');
    postCategory.textContent = `Category: ${category}`;

    const postEmail = document.createElement('p');
    postEmail.textContent = `Email: ${email}`;

    const postMessage = document.createElement('p');
    postMessage.textContent = message;

    // create the reply form

    const replyForm = document.createElement('form');
    const replyLabel = document.createElement('label');
    replyLabel.textContent = 'Reply(anonymously):';
    const replyInput = document.createElement('textarea');
    replyInput.setAttribute('name', 'reply');
    const replyButton = document.createElement('button');
    replyButton.setAttribute('type', 'submit');
    replyButton.textContent = 'Reply';
    replyForm.appendChild(replyLabel);
    replyForm.appendChild(replyInput);
    replyForm.appendChild(replyButton);

    // create the replies div

    const repliesDiv = document.createElement('div');
    repliesDiv.classList.add('replies');

    postCard.appendChild(postHeader);
    postCard.appendChild(postCategory);
    postCard.appendChild(postEmail);
    postCard.appendChild(postMessage);
    postCard.appendChild(replyForm);
    postCard.appendChild(repliesDiv);

    // add the post card to the page
    postsDiv.appendChild(postCard);

    // clear the form
    form.reset();
  });

  // handle replying to a post

  postsDiv.addEventListener('submit', (event) => {
    event.preventDefault(); // prevent the form from submitting

    // get the form data
    const formData = new FormData(event.target);
    const replyMessage = formData.get('reply');

    // create the reply card

    const replyCard = document.createElement('div');
    replyCard.classList.add('card');

    const replyHeader = document.createElement('h3');
    replyHeader.textContent = 'Reply';

    const replyMessageP = document.createElement('p');
    replyMessageP.textContent = replyMessage;

    replyCard.appendChild(replyHeader);
    replyCard.appendChild(replyMessageP);

    // add the reply card to the post's replies div
    
    const postCard = event.target.closest('.card');
    const repliesDiv = postCard.querySelector('.replies');
    repliesDiv.appendChild(replyCard);

    // clear the form
    event.target.reset();
  });
});
