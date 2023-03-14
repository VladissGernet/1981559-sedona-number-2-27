let cardLikes = document.querySelectorAll('.card-like');

for (let cardLike of cardLikes) {
  cardLike.onclick = function () {
    cardLike.classList.toggle('card-like--added');
  }
}
