let btn = document.querySelector('#btn');
let bar = document.querySelector('.bar');
btn.onclick = function(){
    bar.classList.toggle('active')
};

const menuToggle = document.querySelector('.bar #btn');
const nav = document.querySelector('.bar ul');

menuToggle.addEventListener('click', function () {
    nav.classList.toggle('nav')
});