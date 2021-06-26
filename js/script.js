const searchBtn = document.querySelector('.form-search-link');
const form = document.querySelector('.form');
const formInputs = document.querySelectorAll('.form input');

if (form) {
  const checkFormValidity = () => {
    let flag = true;
    formInputs.forEach((input) => {
      if (!input.value) {
        flag = false;
      }
    });
    return flag;
  }

  form.classList.remove('is-open');
  searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    form.classList.toggle('is-open');
  });

  form.addEventListener('submit', (e) => {
    if (!checkFormValidity()) {
      e.preventDefault();
      form.classList.remove('error');
      form.offsetWidth = form.offsetWidth;
      form.classList.add('error');
    }
  });
}
