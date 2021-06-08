const myForm = document.getElementById('myForm');


    let nameValidation = document.getElementById('firstName');
    let lastNameValidation = document.getElementById('lastName');
    let cardValidation = document.getElementById('card');
    let cvcValidation = document.getElementById('cvc');
    let amountValidation = document.getElementById('amount');
    let cityValidation = document.getElementById('city');
    let stateValidation = document.getElementById('state');
    let postalCodeValidation = document.getElementById('postalCode');
    let letterreg = /[a-zA-Z]+/;

myForm.addEventListener('submit' , e => { 
    
    e.preventDefault()
    checkInput()
   

});





function checkInput() {



    const nameValue = nameValidation.Value;
    const lasNameValue = lastNameValidation.value;
    const cardValue = cardValidation.value;
    const cvcValue = cvcValidation.value;
    const amountValue = amountValidation.value;
    const cityValue = cityValidation.value;
    const stateValue = stateValidation.value;
    const postalCodeValue = postalCodeValidation.value;


        if(nameValue === ''){
            setErrorFor(nameValue, 'Please enter your name');
        }else{
            setSuccessFor(nameValue);
        }



}




function setErrorFor(input, mensage){
    const formControl = input.parentElement;
    const inputs = formControl.querySelector('input');
    formControl.className = 'form-contrl error';
    inputs = mensage;
}

function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className('form-control success');
}

//Validar cada ingreso de informacion, 


//CREDITCARD
