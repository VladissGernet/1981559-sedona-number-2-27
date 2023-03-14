let commentField = document.querySelector('.feedback-form__user-text');
let charCounter = document.querySelector('.feedback-form__char-counter');

commentField.oninput = function () {
  charCounter.textContent = charCounter.value.length;
};

