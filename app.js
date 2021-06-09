const myForm = document.getElementById("myForm");




function checkInput() {

    let alerts = document.querySelector("#alerts");
let nameValidation = document.getElementById("firstName");
let lastNameValidation = document.getElementById("lastName");
let cardValidation = document.getElementById("card");
let cvcValidation = document.getElementById("cvc");
let amountValidation = document.getElementById("amount");
let cityValidation = document.getElementById("city");
let stateValidation = document.getElementById("state");
let postalCodeValidation = document.getElementById("postalCode");

console.log(stateValidation);

  if (
    nameValidation.value === ""
  ) {
    nameValidation.style.borderColor = '#D00903';
    alerts.style.backgroundColor = '#D00903'; 
    alerts.style.borderColor = 'red';
    alerts.style.color =  '#EA563F';
    alerts.innerHTML = 'You left empty fields';
  } else {
      nameValidation.style.borderColor = "green"
    alerts.style.backgroundColor = 'green'
    alerts.style.borderColor = 'green';
    alerts.style.color =  'white';
    alerts.innerHTML = 'All The fields had been aproved';
  }
  if (
    lastNameValidation.value === ""
  ) {
    lastNameValidation.style.borderColor = '#D00903';
    alerts.style.backgroundColor = '#D00903'; 
    alerts.style.borderColor = 'red';
    alerts.style.color =  '#EA563F';
    alerts.innerHTML = 'You left empty fields';
  } else {
      lastNameValidation.style.borderColor = "green"
    alerts.style.backgroundColor = 'green'
    alerts.style.borderColor = 'green';
    alerts.style.color =  'white';
    alerts.innerHTML = 'All The fields had been aproved';
  }
  if (
    cardValidation.value === ""
  ) {
    cardValidation.style.borderColor = '#D00903';
    alerts.style.backgroundColor = '#D00903'; 
    alerts.style.borderColor = 'red';
    alerts.style.color =  '#EA563F';
    alerts.innerHTML = 'You left empty fields';
  } else {
      cardValidation.style.borderColor = "green"
    alerts.style.backgroundColor = 'green'
    alerts.style.borderColor = 'green';
    alerts.style.color =  'white';
    alerts.innerHTML = 'All The fields had been aproved';
  }if (
    cvcValidation.value === ""
  ) {
    cvcValidation.style.borderColor = '#D00903';
    alerts.style.backgroundColor = '#D00903'; 
    alerts.style.borderColor = 'red';
    alerts.style.color =  '#EA563F';
    alerts.innerHTML = 'You left empty fields';
  } else {
      cvcValidation.style.borderColor = "green"
    alerts.style.backgroundColor = 'green'
    alerts.style.borderColor = 'green';
    alerts.style.color =  'white';
    alerts.innerHTML = 'All The fields had been aproved';
  }if (
    amountValidation.value === ""
  ) {
    amountValidation.style.borderColor = '#D00903';
    alerts.style.backgroundColor = '#D00903'; 
    alerts.style.borderColor = 'red';
    alerts.style.color =  '#EA563F';
    alerts.innerHTML = 'You left empty fields';
  } else {
      amountValidation.style.borderColor = "green"
    alerts.style.backgroundColor = 'green'
    alerts.style.borderColor = 'green';
    alerts.style.color =  'white';
    alerts.innerHTML = 'All The fields had been aproved';
  }if (
    cityValidation.value === ""
  ) {
    cityValidation.style.borderColor = '#D00903';
    alerts.style.backgroundColor = '#D00903'; 
    alerts.style.borderColor = 'red';
    alerts.style.color =  '#EA563F';
    alerts.innerHTML = 'You left empty fields';
  } else {
      cityValidation.style.borderColor = "green"
    alerts.style.backgroundColor = 'green'
    alerts.style.borderColor = 'green';
    alerts.style.color =  'white';
    alerts.innerHTML = 'All The fields had been aproved';
  }if (
    postalCodeValidation.value === ""
  ) {
    postalCodeValidation.style.borderColor = '#D00903';
    alerts.style.backgroundColor = '#D00903'; 
    alerts.style.borderColor = 'red';
    alerts.style.color =  '#EA563F';
    alerts.innerHTML = 'You left empty fields';
  } else {
    postalCodeValidation.style.borderColor = "green"
    alerts.style.backgroundColor = 'green'
    alerts.style.borderColor = 'green';
    alerts.style.color =  'white';
    alerts.innerHTML = 'All The fields had been aproved';
  }if(stateValidation.value !== 'Open this select menu'){
    stateValidation.style.borderColor = "green"
    alerts.style.backgroundColor = 'green'
    alerts.style.borderColor = 'green';
    alerts.style.color =  'white';
    alerts.innerHTML = 'All The fields had been aproved';
  }else{
    stateValidation.style.borderColor = '#D00903';
    alerts.style.backgroundColor = '#D00903'; 
    alerts.style.borderColor = 'red';
    alerts.style.color =  '#EA563F';
    alerts.innerHTML = 'You left empty fields';
  }
  


}
myForm.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInput();
});


/*
function setErrorFor(input, mensage){
    const formControl = input.parentElement;
    const inputs = formControl.querySelector('input');
    formControl.className = 'form-control error';
    inputs = mensage;
}

function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}*/

//Validar cada ingreso de informacion,

//CREDITCARD

