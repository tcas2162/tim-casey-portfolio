const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('open-nav');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('open-nav');
    })
})