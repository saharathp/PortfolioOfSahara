const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const sections = Array.from(document.querySelectorAll('section'));
const navLinks = Array.from(document.querySelectorAll('header nav a'));
const menuLinks = document.querySelectorAll('.navbar a');


function throttle(func, limit) {
    let lastCall = 0;
    return function (...args) {
        const now = Date.now();
        if (now - lastCall < limit) return;
        lastCall = now;
        return func(...args);
    };
}
const handleScroll = throttle(() => {
    const top = window.scrollY;
}, 100); 

window.addEventListener('scroll', handleScroll);


    sections.forEach(sec => {
    const offset = sec.offsetTop - 150;
    const height = sec.offsetHeight;
    const id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
        navLinks.forEach(link => {
            link.classList.remove('active');
            const activeLink = link.closest('header').querySelector(`nav a[href*="${id}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        });
    }
});

    menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
    menuLinks.forEach(link => link.classList.toggle('show'));
});
 
