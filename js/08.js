const refs = {
  form: document.querySelector('.login-form'),
};

refs.form.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();

  const { email, password } = event.currentTarget.elements;

  const data = {
    email: email.value,
    password: password.value,
  };

  console.log(data);
}
