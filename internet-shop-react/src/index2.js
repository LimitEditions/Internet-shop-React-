const menu = document.querySelector('.menu');
const burger = document.querySelector('.burger');
const closeBtn = document.querySelector('.close');
const mainStyle = document.querySelector('.main__style');

function toggleMenu() {
    menu.classList.toggle('hidden');
    mainStyle.classList.toggle('shadow');
}

burger.addEventListener('click', toggleMenu);
closeBtn.addEventListener('click', toggleMenu);

console.log(menu.classList);