/* == SEARCH == */
document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById('search-button');
    const searchClose = document.getElementById('nav-close');
    const searchContent = document.getElementById('search');

    if (searchButton) {
        searchButton.addEventListener('click', () => {
            searchContent.classList.add('show-search');
        });
    }

    if (searchClose) {
        searchClose.addEventListener('click', () => {
            searchContent.classList.remove('show-search');
        });
    }
});


/* == LOGIN == */
document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.getElementById('login-button');
    const loginClose = document.getElementById('login-close');
    const loginContent = document.getElementById('login-container');

    if (loginButton) {
        loginButton.addEventListener('click', () => {
            console.log("Bouton de connexion cliqué");
            loginContent.classList.add('show-login');
        });
    }

    if (loginClose) {
        loginClose.addEventListener('click', () => {
            console.log("Bouton de fermeture cliqué");
            loginContent.classList.remove('show-login');
        });
    }
});



/* == HOME SWIPPER == */
let swiperHome = new Swiper('.home_swiper', {
    loop: true,
    spaceBetween: 0,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',
    

    autoplay: {
        display:3000,
        disableOnInteraction: false,
    },

    breakpoints: {
        1220: {
            spaceBetween: -38,
        }
    }
});

/* == NEWBOOK SWIPPER == */
let swiperNewBook = new Swiper('.newBook_swiper', {
    loop: true,
    spaceBetween: 16,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',
    

    autoplay: {
        display:3000,
        disableOnInteraction: false,
    },

    breakpoints: {
        1660: {
            slidesPerView: 4,
            centeredSlides: false,
        }
    }
});

/* == TESTIMONIAL SWIPER == */
let swiperTestimonial = new Swiper('.testimonial_swiper', {
    loop: true,
    spaceBetween: 16,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',
    

    breakpoints: {
        1660: {
            slidesPerView: 3,
            centeredSlides: false,
        }
    }
});


/* == SHADOW HEADER == */
const shadowHeader = () =>{
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('shadow-header') 
                        : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)

