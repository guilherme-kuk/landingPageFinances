// Form
const formNews = document.getElementById('form');
const newsInput = document.getElementById('email-input');
const newsBtn = document.getElementById('news-btn');

formNews.addEventListener('submit', (e) => {
  e.preventDefault();
  success();
  afterSuccess();
});

function success() {
  setTimeout(function () {
    newsInput.value = '';
    newsBtn.value = 'Enviado! 💗';
  }, 1000);
}

function afterSuccess() {
  setTimeout(function () {
    newsBtn.value = 'Assinar Newsletter';
  }, 2800);
}