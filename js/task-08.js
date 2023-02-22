const form = document.querySelector('.login-form');

form.addEventListener('submit', onformSubmit);

function onformSubmit(event) {
    event.preventDefault();
    
    const email = event.currentTarget.elements.email.value;
    const password = event.currentTarget.elements.password.value;

    if(email === '' || password === '') {
       return alert('Всі поля повинні бути заповнені');
    }
    const dataUser = {
        email,
        password,
    }
    console.log(dataUser);

    function funReset() {  
        form.reset();  
      }
      funReset();
}
