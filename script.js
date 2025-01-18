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
document.getElementById("searchIcon").addEventListener("click", function () {
    const yearInput = parseInt(document.getElementById('yearInput').value);
    const resultDiv = document.getElementById("result");
  
    if (isNaN(yearInput)) {
      resultDiv.textContent = "Будь ласка, введіть правильний рік.";
      resultDiv.style.color = "#ccc"; 
      return;
    }
  
    if ((yearInput % 4 === 0 && yearInput % 100 !== 0) || yearInput % 400 === 0) {
      resultDiv.textContent = "Ви народилися у високосний рік!";
      resultDiv.style.color = "green"; 
    } else {
      resultDiv.textContent = "Ви народилися не у високосний рік!";
      resultDiv.style.color = "red"; 
    }
  });
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  const searchIcon2 = document.getElementById('searchIcon2');
  searchIcon2.addEventListener("click", () => {
    const number = parseInt(document.getElementById("numberInput").value);
    const resultDiv = document.getElementById("result1");

    if (isNaN(number)) {
        resultDiv.textContent = "Будь ласка, введіть число від 1 до 100.";
        resultDiv.style.color = "#ccc"; 
        return;
      }
      if (number === randomNumber) {
        resultDiv.textContent = `Вітаю, ви вгадали число! (${randomNumber})`;
        resultDiv.style.color = 'green';
      }
      if (number !== randomNumber) {
        resultDiv.textContent = `Ви програли, комп’ютер загадав (${randomNumber})`
        resultDiv.style.color = 'red';
      }
  })
  let currentOperation = null;

document.getElementById("+").addEventListener("click", function () {
  currentOperation = "+";
});

document.getElementById("-").addEventListener("click", function () {
  currentOperation = "-";
});

document.getElementById("*").addEventListener("click", function () {
  currentOperation = "*";
});

document.getElementById("/").addEventListener("click", function () {
  currentOperation = "/";
});

document.getElementById('=').addEventListener('click', function () {
  const number1 = parseFloat(document.getElementById('num1').value);
  const number2 = parseFloat(document.getElementById('num2').value);
  const resultInput = document.getElementById("res");

  if (isNaN(number1) || isNaN(number2)) {
    resultInput.value = 'Введіть обидва числа!';
    return; 
  }

  switch (currentOperation) {
    case '+':
      resultInput.value = number1 + number2;
      break;
    case '-':
      resultInput.value = number1 - number2;
      break;
    case '*':
      resultInput.value = number1 * number2;
      break;
    case '/':
      if (number2 === 0) {
        resultInput.value = 'На нуль ділити не можна, ганьба!';
      } else {
        resultInput.value = number1 / number2;
      }
      break;
    default:
      resultInput.value = 'Виберіть операцію!!';
  }
});
document.getElementById('calculate-btn').addEventListener('click', function () {
    const inputHours = document.getElementById('time-input').value;
    if (!inputHours || isNaN(inputHours) || inputHours < 0) {
        alert("Будь ласка, введіть правильне число годин (позитивне число)!");
        return;
    }

    const now = new Date();
    const currentTimeInMilliseconds = now.getTime();

    const inputTimeInMilliseconds = parseFloat(inputHours) * 60 * 60 * 1000;

    const pastTime = new Date(currentTimeInMilliseconds - inputTimeInMilliseconds);

    const differenceInMilliseconds = currentTimeInMilliseconds - pastTime.getTime();

    const differenceInMinutes = Math.floor(differenceInMilliseconds / (1000 * 60));
    const days = Math.floor(differenceInMinutes / (24 * 60));
    const hours = Math.floor((differenceInMinutes % (24 * 60)) / 60);
    const minutes = differenceInMinutes % 60;

    const result = `${days}дн. ${hours}:${minutes}`;
    document.getElementById('time-difference').textContent = result;
});
const footerInput = document.getElementById('footerInput');
const footerButton = document.getElementById('footerButton');
footerButton.addEventListener('click', () => {
  footerInput.value = 'Успішно!';
})