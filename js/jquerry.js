let burgerBtn = document.querySelector('.burger-btn');
let navSm = document.querySelector('.nav-sm');

burgerBtn.addEventListener('click', function(){
	burgerBtn.classList.toggle('active');
	navSm.classList.toggle('active');
})

function clickLink(elem) {
    burgerBtn.classList.toggle('active');
    navSm.classList.toggle('active');
}