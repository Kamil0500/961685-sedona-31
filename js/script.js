const searchBtn = document.querySelector('.form-search-link');
const form = document.querySelector('.form');
if (form) {
    form.classList.remove('is-open');
    searchBtn.addEventListener('click', (e) => {
        e.preventDefault();
        form.classList.toggle('is-open');
    })
}