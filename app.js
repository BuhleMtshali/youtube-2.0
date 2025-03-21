//toggling the sidebar
document.getElementById('menu').addEventListener('click', () => {
    let sideBar = document.querySelector('.side-bar');
    sideBar.classList.toggle('hide')
});

//adding the active class to the nav-link
let navLinkElements = document.querySelectorAll('.nav-link');
navLinkElements.forEach((nav) => {
    nav.addEventListener('click', () => {
        navLinkElements.forEach((link) => link.classList.remove('active'));
        nav.classList.add('active');
    })
})