//Navbar fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
};

//Navigation
const navigation = document.querySelector('#navigation');
const navMenu = document.querySelector('#nav-menu');

navigation.addEventListener('click', function() {
    navigation.classList.toggle('navigation-active');
    navMenu.classList.toggle('hidden');
});
