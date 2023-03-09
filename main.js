// Formulário de satisfação (NPS)

const targetName = 'satisfacao';
const formNps = document.querySelector('.form-nps');

document.addEventListener('change', function(event) {
    if (event.target.name === targetName) {
        formNps.dataset.value = event.target.value;
    }
})

// Curtir (javascript)

const likeJs = document.querySelector('.like-js');
var like = null;
document.addEventListener('click', function(event) {
    if (event.target.className.includes('like-js-btn')) {
        if(like === event.target.dataset.value) {
            like = null;
            likeJs.className = 'like-js';
        } else {
            like = event.target.dataset.value;
            likeJs.className = 'like-js ' + like;
        }
    }
});