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

// home slider
var swiper = new Swiper(".home-slider", {
    loop: true,
    grabCursor: true,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// revies 

var swiper = new Swiper(".reviews-slider", {
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
    },
});


// slider 
// revies 

var swiper = new Swiper(".logo-slider", {
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    breakpoints: {
        450: {
            slidesPerView: 2,
        },
        640: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 4,
        },
        1000: {
            slidesPerView: 5,
        },
    },
});

