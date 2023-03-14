let cardLikes = document.querySelectorAll('.card-like');
let cardLikeValue = document.querySelector('.card-like__value');

for (let cardLike of cardLikes) {
  cardLike.onclick = function () {
    cardLike.classList.toggle('card-like--added');
  }
}
