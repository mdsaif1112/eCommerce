const offcanvasBtn = document.querySelector('.fa-bars');

const offcanvasCloseBtn = document.querySelector('.fa-xmark');

const offcanvasBody = document.querySelector('.offcanvas');


offcanvasBtn.addEventListener('click', function(){
    offcanvasBody.classList.add('offcanvas__in');
});

offcanvasCloseBtn.addEventListener('click', function () {
    offcanvasBody.classList.remove('offcanvas__in')
});