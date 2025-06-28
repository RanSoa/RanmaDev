let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active');
};

document.getElementById('contactBtn').onclick = function () {
    document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
}





