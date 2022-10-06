console.log('teste');

let btnFavorite = document.querySelector('.btn-favorite');

function like() {
  console.log('clicado');
  btnFavorite.classList.toggle('like');
}
