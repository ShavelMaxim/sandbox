const selectors = {
  inputEmail: '.js-email-input',
  labelEmail: '.js-email-label'
}

const classes = {
  labelActive: 'form-email__label_active'
}

const inputEmail = document.querySelector(selectors.inputEmail);
const labelEmail = document.querySelector(selectors.labelEmail);

const handleChangeEmail = (e) => labelEmail.classList.toggle(classes.labelActive, e.currentTarget.value.length);

['change', 'paste', 'input'].forEach((event) => inputEmail.addEventListener(event, handleChangeEmail));
