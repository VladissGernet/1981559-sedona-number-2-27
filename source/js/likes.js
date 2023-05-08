let cardLikes = document.querySelectorAll('.card-like');
let cardValues = document.querySelectorAll('.card-like__value')
let cardUses = document.querySelectorAll('.card-like__use')

let likeClick = function (cardLike, cardValue, cardUse) {
  cardLike.addEventListener('click', function () {
    let likeValue = Number(cardValue.textContent);
    if (cardLike.classList.contains('card-like--added')) {
      cardLike.classList.remove('card-like--added');
      likeValue--;
      cardUse.setAttribute('xlink:href', 'img/sprite.svg#like-icon');
    } else {
      cardLike.classList.add('card-like--added');
      likeValue++;
      cardUse.setAttribute('xlink:href', 'img/sprite.svg#like-icon-added');
    }
    cardValue.textContent = `${likeValue}`;
  });
}

for (let i = 0; i < cardLikes.length; i++) {
  likeClick(cardLikes[i], cardValues[i], cardUses[i]);
}
