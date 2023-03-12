let cardsLike = document.querySelectorAll('.card-like');
let cardLikeValue = document.querySelector('.card-like__value');
let icon = document.querySelector('.card-like__xlink')

for (let cardLike of cardsLike) {
  cardLike.onclick = function () {
    if (cardLike.classList.contains('card-like--added')) {
      cardLikeValue.textContent--;
      cardLike.classList.remove('card-like--added');
      icon.setAttribute("xlink:href", "img/sprite.svg#like-icon")
    } else {
      cardLikeValue.textContent++;
      cardLike.classList.add('card-like--added');
      icon.setAttribute("xlink:href", "img/sprite.svg#like-icon-added")
    }
  }
}
