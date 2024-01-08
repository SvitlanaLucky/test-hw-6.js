const refs = {
  form: document.querySelector('.login-form'),
};

refs.form.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;
  const formEmail = formElements.email.value;
  const formPassword = formElements.password.value;

  if (formEmail === '' || formPassword === '') {
    alert('enter the email or password please');
  } else {
    console.log({ Email: formEmail, Password: formPassword });
  }
  event.currentTarget.reset();
}
