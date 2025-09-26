// activate toggle button
let navbar = document.querySelector('.header .navbar');
let searchForm = document.querySelector('.header .search-form');
let contactInfo = document.querySelector('.contact-info');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    contactInfo.classList.remove('active');

}
// activate search button
document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
   
    contactInfo.classList.remove('active');

}
// open contact info
document.querySelector('#info-btn').onclick = () => {
    contactInfo.classList.add('active');
}
// remove contact info
document.querySelector('#close-contact-info').onclick = () => {
    contactInfo.classList.remove('active');
     navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

// deactivate toggle button on scroll

// deactivate search button on scroll
window.onscroll = () => {
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    contactInfo.classList.remove('active');

}
