const sign_in_password =document.getElementById('password');
const submitButton =document.getElementById('submit-button');

// Lista de elementos para validação
const li_lower_upper = document.querySelector('#lower-upper');
const li_numbers = document.querySelector('#numbers');
const li_special_caracteres = document.querySelector('#special-caracters');
const li_digitos = document.querySelector('#digitos');

sign_in_password.addEventListener('keyup', (Event) => {
    const{ value } = sign_in_password;

    //Regex
    const regexUpper = RegExp("[A-Z]");
    const regexLower = RegExp("[a-z]");
    var regexNumbers = /\d/g;
    var regexSpecial = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

    //variaveis de validação
    const isNumbervalidad = value.match(regexNumbers);
    const isSpecialCaracters = value.match(regexSpecial);
    const isPasswordLength = value.length >= 8;
    const isLowerUpper = value.match(regexUpper) && value.match(regexLower);

    //validação dos números 
    if(isPasswordLength){
        li_numbers.classList.add('active');
        const icon = li_numbers.getElementsByTagName('i')[0];
        icon.classList.remove('fa-circle');
        icon.classList.add('fa-check');
    }else{
        li_numbers.classList.remove('active');
        const icon = li_numbers.getElementsByTagName('i')[0];
        icon.classList.remove('fa-check');
        icon.classList.add('fa-circle');
    }

    //validação de números na senha
    if(isNumbervalidad){
        li_digitos.classList.add('active');
        const icon = li_digitos.getElementsByTagName('i')[0];
        icon.classList.remove('fa-circle');
        icon.classList.add('fa-check');
    }else{
        li_digitos.classList.remove('active');
        const icon = li_digitos.getElementsByTagName('i')[0];
        icon.classList.remove('fa-check');
        icon.classList.add('fa-circle');
    }

    //validação caracteres especiais
    if(isSpecialCaracters){
        li_special_caracteres.classList.add('active');
        const icon = li_special_caracteres.getElementsByTagName('i')[0];
        icon.classList.remove('fa-circle');
        icon.classList.add('fa-check');
    }else{
        li_special_caracteres.classList.remove('active');
        const icon = li_special_caracteres.getElementsByTagName('i')[0];
        icon.classList.remove('fa-check');
        icon.classList.add('fa-circle');
    }

    //validação minusculo e maiusculo
    if(isLowerUpper){
        li_lower_upper.classList.add('active');
        const icon = li_lower_upper.getElementsByTagName('i')[0];
        icon.classList.remove('fa-circle');
        icon.classList.add('fa-check');
    }else{
        li_lower_upper.classList.remove('active');
        const icon = li_lower_upper.getElementsByTagName('i')[0];
        icon.classList.remove('fa-check');
        icon.classList.add('fa-circle');
    }

    if(isNumbervalidad && isSpecialCaracters && isPasswordLength && isLowerUpper){
        submitButton.removeAttribute('disabled');
    }else{
        submitButton.setAttribute('disabled', '');
    }

});