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
// On recupere notre form sur le dom
const form = document.querySelector('form');
const confirmationContainer = document.querySelector('.confirmation-container')

// On envoie la fonction validate quand on submit le formulaire
form.addEventListener('submit', validate);

// Fonction qui définit le comportement à avoir à l'envoi du formulaire
function validate(e) {
    // On enléve le comportement par défaut
    e.preventDefault();
    // On récupére dans un tableau le noms des propriétés de l'objet inputsInvalidity
    const keys = Object.keys(inputsValidity);
    // On filtre le tableau keys et on garde uniquement les inputs invalide
    const inputsInvalid = keys.filter((key) => !inputsValidity[key]);

    // si il ya des inputs invalide, on les montre grâce à show error
    if (inputsInvalid.length) {
        inputsInvalid.forEach((input) => {
            const index = keys.indexOf(input);
            showError(index, false);
        });
    } else {
        form.style.display = "none"
        confirmationContainer.style.display = "flex"
    }
}

// On récupere tous les messages d'erreurs
const errorMsg = document.querySelectorAll('.error-msg');
// On récupere tous les inputs de type text
const textControl = document.querySelectorAll('.text-control');


// Fonctions qui permet d'afficher les erreurs en fonctionde l'index de l'input choisi. Quand l'input est valide(true), on envoie pas d'erreur sinon on montre l'erreur
function showError(index, validation) {
    if (validation) {
        errorMsg[index].style.display = 'none';
        if (textControl[index]) textControl[index].classList.remove('error-input');
    } else {
        errorMsg[index].style.display = 'block';
        if (textControl[index]) textControl[index].classList.add('error-input');
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

// Fonction qui permet de valider ou le nom le premier input et affiche une erreur quand l'input n'est pas valide
function firstValidation() {
    if (firstInput.value.length >= 2) {
        inputsValidity.first = true;
        showError(0, true);
    } else {
        inputsValidity.first = false;
        showError(0, false);
    }
}

// VALIDATION DE L'INPUT LAST (Nom)
lastInput.addEventListener('blur', lastValidation);
lastInput.addEventListener('input', lastValidation);

// Fonction qui permet de valider ou le nom le premier input
function lastValidation() {
    if (lastInput.value.length >= 2) {
        inputsValidity.last = true;
        showError(1, true);
    } else {
        inputsValidity.last = false;
        showError(1, false);
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
        showError(2, true);
    } else {
        inputsValidity.email = false;
        showError(2, false);
    }
}

// VALIDATION DE L'INPUT DATE
birthDateInput.addEventListener('blur', birthDateValidation);
birthDateInput.addEventListener('input', birthDateValidation);

// Fonction qui permet de valider ou le nom le premier input
function birthDateValidation() {
    if (birthDateInput.value) {
        inputsValidity.birthDate = true;
        showError(3, true);
    } else {
        inputsValidity.birthDate = false;
        showError(3, false);
    }
}

// VALIDATION DE L'INPUT QUANTITY
quantityInput.addEventListener('blur', quantityValidation);
quantityInput.addEventListener('input', quantityValidation);

// Fonction qui permet de valider ou le nom le premier input
function quantityValidation() {
    if (quantityInput.value /* && typeof(quantityInput.value) === "number" */) {
        inputsValidity.quantity = true;
        showError(4, true);
    } else {
        inputsValidity.quantity = false;
        showError(4, false);
    }
}

// VALIDATION DU RADIO LOCATION
// Lorsque on séléctionne un des boutons radios, on valide notre radio
locationInputs.forEach((input) => {
    input.addEventListener('input', () => {
        inputsValidity.location = true;
    });
});

// VALIDATION DE L'INPUT CONDITION
conditionInput.addEventListener('input', conditionValidation);

// Fonction qui permet de valider ou le nom le premier input
function conditionValidation() {
    if (conditionInput.checked) {
        inputsValidity.condition = true;
        showError(6, true);
    } else {
        inputsValidity.condition = false;
        showError(6, false);
    }
}
