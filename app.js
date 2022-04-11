/* 
    >>> Email format validation event handler
*/  
const email = document.querySelector('#email');
const emailMsg = document.querySelector('.email-msg');

email.addEventListener('input', e => {
    let atSymbolCount = 0;
    const allowedSymbols = '-_.@';
    const forbiddenSymbols = '\'\"!#%£¢¨¬&*()=+§´`[]ª{}º^~\\|,<>;:/?°';

    if(email.value.charAt(0) === undefined || email.value.charAt(0) === null || email.value.charAt(0) === '' || email.value.charAt(0) === 0){
        emailMsg.style.color = '#ffffff';
        email.style.border = '1px solid #E5E7EB';
        return
    }

    // Checks if the first character of the email is valid
    for(i = 0; i < forbiddenSymbols.length; i++){
        if(email.value.charAt(0) === forbiddenSymbols.charAt(i) || email.value.charAt(0) === allowedSymbols.charAt(i)){
            emailMsg.style.color = 'rgb(228, 38, 38)';
            email.style.border = '1px solid rgb(255, 39, 39)';
            return
        }else{
            emailMsg.style.color = '#ffffff';
            email.style.border = '1px solid #E5E7EB';
        }
    }

    //Checks if the last character of the email is valid
    for(i = 0; i < forbiddenSymbols.length; i++){
        if(email.value.charAt(email.value.length - 1) === forbiddenSymbols.charAt(i) || email.value.charAt(email.value.length - 1) === allowedSymbols.charAt(i)){
            emailMsg.style.color = 'rgb(228, 38, 38)';
            email.style.border = '1px solid rgb(255, 39, 39)';
            return
        }else{
            emailMsg.style.color = '#ffffff';
            email.style.border = '1px solid #E5E7EB';
        }
    }

    //Search for symbols that are not allowed
    for(i = 0; i < email.value.length; i++){
        for(j = 0; j < forbiddenSymbols.length; j++){
            if(email.value.charAt(i) === forbiddenSymbols.charAt(j)){
                emailMsg.style.color = 'rgb(228, 38, 38)';
                email.style.border = '1px solid rgb(255, 39, 39)';
                return
            }
        }

    }

    //Keep track of at symbol @
    for(i = 0; i < email.value.length; i++){
        if(email.value.charAt(i) === '@'){
            atSymbolCount++;
            if(atSymbolCount > 1){
                emailMsg.style.color = 'rgb(228, 38, 38)';
                email.style.border = '1px solid rgb(255, 39, 39)';
                return
            }
            if(atSymbolCount <= 1){
                emailMsg.style.color = '#ffffff';
                email.style.border = '1px solid #E5E7EB';
            }
            continue;
        }
    } 

    //Checks for @ 
    if(atSymbolCount === 0){
        emailMsg.style.color = 'rgb(228, 38, 38)';
        email.style.border = '1px solid rgb(255, 39, 39)';
        return
    }else{
        emailMsg.style.color = '#ffffff';
        email.style.border = '1px solid #E5E7EB'; 
    }
});





/*
    >>> Password equality check
*/

const password = document.querySelector('.password');
const confirmPassword = document.querySelector('.confirm-password');
const passwordMsg = document.querySelector('.psw-msg');
password.addEventListener('input', e => {
    if(password.value === confirmPassword.value){
        passwordMsg.style.color = '#ffffff';
        password.style.border = '1px solid #E5E7EB';
        confirmPassword.style.border = '1px solid #E5E7EB';
    }else{
        passwordMsg.style.color = 'rgb(228, 38, 38)';
        password.style.border = '1px solid rgb(255, 39, 39)';
        confirmPassword.style.border = '1px solid rgb(255, 39, 39)';
    }
});
confirmPassword.addEventListener('input', e => {
    if(password.value === confirmPassword.value){
        passwordMsg.style.color = '#ffffff';
        password.style.border = '1px solid #E5E7EB';
        confirmPassword.style.border = '1px solid #E5E7EB';
    }else{
        passwordMsg.style.color = 'rgb(228, 38, 38)';
        password.style.border = '1px solid rgb(255, 39, 39)';
        confirmPassword.style.border = '1px solid rgb(255, 39, 39)';
    }
})