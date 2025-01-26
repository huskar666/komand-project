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
function updateMaxNumber() {
const input11 = parseFloat(document.getElementById('num11').value) || 0;
const input22 = parseFloat(document.getElementById('num22').value) || 0;
const input33 = parseFloat(document.getElementById('num33').value) || 0;

const maxNumber = Math.max(input11, input22, input33);

document.getElementById('result3').textContent = `Найбільше число, яке ви ввели - ${maxNumber}`;
}
document.addEventListener('input', updateMaxNumber)
document.addEventListener('input', updateMaxNumber)
document.addEventListener('input', updateMaxNumber)

const dayNightContainer = document.querySelector(".header__daynight--container img");
const body = document.body;

const dayIcon = "./img/daynight.svg"; 
const nightIcon = "./img/nightmode.svg"; 

dayNightContainer.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    dayNightContainer.src = body.classList.contains("dark-mode") ? nightIcon : dayIcon;
});
const choices = ["rock", "scissors", "paper"];
    const resultElement = document.getElementById("result");
    const scoreElement = document.getElementById("score");
    const computerButton = document.getElementById("computer-choice");

    let playerScore = 0;
    let computerScore = 0;
    let playerChoice = null;

    document.querySelectorAll(".choice-button[data-choice]").forEach(button => {
      button.addEventListener("click", () => {
        playerChoice = button.dataset.choice;
        resultElement.textContent = `Ви обрали: ${translateChoice(playerChoice)}.`;
      });
    });

    computerButton.addEventListener("click", () => {
      if (!playerChoice) {
        resultElement.textContent = "Спочатку зробіть свій вибір!";
        return;
      }

      const computerChoice = choices[Math.floor(Math.random() * choices.length)];
      const result = getResult(playerChoice, computerChoice);

      if (result === "win") {
        playerScore++;
        resultElement.textContent = `Ви виграли раунд! Комп'ютер обрав ${translateChoice(computerChoice)}.`;
        resultElement.className = "result win";
      } else if (result === "lose") {
        computerScore++;
        resultElement.textContent = `Ви програли раунд. Комп'ютер обрав ${translateChoice(computerChoice)}.`;
        resultElement.className = "result lose";
      } else {
        resultElement.textContent = `Нічия! Комп'ютер також обрав ${translateChoice(computerChoice)}.`;
        resultElement.className = "result";
      }

      updateScore();
    });

    function getResult(player, computer) {
      if (player === computer) return "draw";
      if (
        (player === "rock" && computer === "scissors") ||
        (player === "scissors" && computer === "paper") ||
        (player === "paper" && computer === "rock")
      ) {
        return "win";
      }
      return "lose";
    }

    function translateChoice(choice) {
      switch (choice) {
        case "rock": return "Камінь";
        case "scissors": return "Ножиці";
        case "paper": return "Папір";
        default: return "";
      }
    }

    function updateScore() {
      scoreElement.textContent = `Рахунок: Комп'ютер - ${computerScore}, Ви - ${playerScore}`;
    }