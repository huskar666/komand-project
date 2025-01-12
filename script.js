const welcomeModal = document.querySelector('.modal--welcome');
const thankyouModal = document.querySelector('.modal--thankyou');
const closeWelcomeButton = document.querySelector('.close-welcome');
const closeThankyouButton = document.querySelector('.close-thankyou');
const nameForm = document.querySelector('#name-form');

function closeModal(modal) {
    modal.classList.add('modal--hidden');
}
function showThankYou(event) {
    event.preventDefault(); 
    closeModal(welcomeModal);
    thankyouModal.classList.remove('modal--hidden');
}

closeWelcomeButton.addEventListener('click', () => closeModal(welcomeModal));
closeThankyouButton.addEventListener('click', () => closeModal(thankyouModal));
nameForm.addEventListener('submit', showThankYou);


const inputButton = document.getElementById('inputButton');
const inputText = document.getElementById('inputText');
const input = document.getElementById('name-input')
inputButton.addEventListener('click', () => {
    inputText.textContent = `Вітаємо, ${input.value}`;
})