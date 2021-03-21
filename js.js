const pass = document.querySelector('#password');
const p = document.querySelector('.passinfo');
const icon = document.querySelector('.icon')
const letters = /[a-z]/i;
const numbers = /[0-9]/;
const special = /[!@#$%^&*()]/;
const minValue = 10;

const checkPassword = () => {
    if (pass.value.length > minValue && pass.value.match(letters) && pass.value.match(numbers) && pass.value.match(special)) {
        p.innerHTML = 'Masz bardzo dobre hasło :)';
        p.style.color = "#b01d47";    
    } else if ( pass.value.length > minValue && pass.value.match(letters) && pass.value.match(numbers)) {
        p.innerHTML = 'Masz dobre hasło';
        p.style.color = "#1a4218"
    } else {
        p.innerHTML = "Masz za słabe hasło!"
        p.style.color= "#182b1d"
    }   
}

const check = () => {
    if (pass.value !== "" ) {
        checkPassword()
    } else {
        p.innerHTML = "Wpisz hasło"
    }
}

pass.addEventListener('keyup', check)