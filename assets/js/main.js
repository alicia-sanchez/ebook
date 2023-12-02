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

