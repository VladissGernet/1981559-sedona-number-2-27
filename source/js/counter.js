let commentField = document.querySelector('.feedback-form__user-text');
let charCounter = document.querySelector('.feedback-form__char-counter');
let submitButton = document.querySelector('.feedback-form__button');

commentField.oninput = function () {
  charCounter.textContent = commentField.value.length;

  if (commentField.value.length > 300) {
    commentField.classList.add('feedback-form__user-text--warning');
    submitButton.disabled = true;
  } else {
    commentField.classList.remove('feedback-form__user-text--warning');
    submitButton.disabled = false;
  }
};
