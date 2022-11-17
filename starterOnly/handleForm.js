// HANDLE FORM
// Objet qui vas être utilisé pour vérifier que chacun des inputs est valide
const inputsValidity = {
    first: false,
    last: false,
    email: false,
    birthDate: false,
    quantity: false,
    location: false,
    condition: false,
    events: true,
};

const form = document.querySelector('form');

form.addEventListener('submit', validate);

// Fonction qui définit le comportement à avoir à l'envoi du formulaire
function validate(e) {
    // On enléve le comportement par défaut
    e.preventDefault();
    // On récupére dans un tableau le noms des propriétés de l'objet inputsInvalidity
    const keys = Object.keys(inputsValidity);
    // On filtre le tableau keys et on garde uniquement les inputs invalide
    const inputsInvalid = keys.filter((key) => !inputsValidity[key]);

    if (inputsInvalid.length) {
        console.log(inputsInvalid);
    } else {
        alert('top');
    }
}

// HANDLE INPUT
// On récupere les differents inputs dans le dom
const firstInput = document.querySelector('#first');
const lastInput = document.querySelector('#last');
const emailInput = document.querySelector('#email');
const birthDateInput = document.querySelector('#birthdate');
const quantityInput = document.querySelector('#quantity');
const locationInputs = document.getElementsByName('location');
const conditionInput = document.querySelector('#checkbox1');
const eventsInput = document.querySelector('#checkbox2');

// VALIDATION DE L'INPUT FIRST (Prénom)
firstInput.addEventListener('blur', firstValidation);
firstInput.addEventListener('input', firstValidation);

// Fonction qui permet de valider ou le nom le premier input
function firstValidation() {
    if (firstInput.value.length >= 2) {
        inputsValidity.first = true;
    } else {
        inputsValidity.first = false;
    }
}

// VALIDATION DE L'INPUT LAST (Nom)
lastInput.addEventListener('blur', lastValidation);
lastInput.addEventListener('input', lastValidation);

// Fonction qui permet de valider ou le nom le premier input
function lastValidation() {
    if (lastInput.value.length >= 2) {
        inputsValidity.last = true;
    } else {
        inputsValidity.last = false;
    }
}

// VALIDATION DE L'INPUT EMAIL
const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

emailInput.addEventListener('blur', emailValidation);
emailInput.addEventListener('input', emailValidation);

// Fonction qui permet de valider ou le nom le premier input
function emailValidation() {
    if (regexEmail.test(emailInput.value)) {
        inputsValidity.email = true;
    } else {
        inputsValidity.email = false;
    }
}


// VALIDATION DE L'INPUT DATE 
birthDateInput.addEventListener('blur', birthDateValidation);
birthDateInput.addEventListener('input', birthDateValidation);

// Fonction qui permet de valider ou le nom le premier input
function birthDateValidation() {
    if (birthDateInput.value) {
        inputsValidity.birthDate = true;
    } else {
        inputsValidity.birthDate = false;
    }
}

// VALIDATION DE L'INPUT QUANTITY 
quantityInput.addEventListener('blur', quantityValidation);
quantityInput.addEventListener('input', quantityValidation);

// Fonction qui permet de valider ou le nom le premier input
function quantityValidation() {
    if (quantityInput.value /* && typeof(quantityInput.value) === "number" */) {
        inputsValidity.quantity = true;
    } else {
        inputsValidity.quantity = false;
    }
}

// VALIDATION DU RADIO LOCATION
locationInputs.forEach(input => {
    input.addEventListener('input', () => {
        inputsValidity.location = true
    })
});


// VALIDATION DE L'INPUT CONDITION
conditionInput.addEventListener('input', conditionValidation);

// Fonction qui permet de valider ou le nom le premier input
function conditionValidation() {
  if(conditionInput.checked){
    inputsValidity.condition = true;
} else {
    inputsValidity.condition = false;
}
}