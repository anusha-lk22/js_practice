
const randomNumber = Math.floor(Math.random() * 100) + 1;
const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

let guessCount = 1;
let resetButton;
const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");
function checkGuess() {
const userGuess = Number(guessField.value);
    if(guessCount === 1)
{
    guesses.textContent = 'previous guesse: ';
    }
guesses.textContent = `${userGuess}`;
if(userGuess === randomNumber)
{
lastResult.textContent = 'congratulations!';
lastResult.style.backgroundColor = 'green';
lowOrHi.textContent = '';
setGameOver();
}
else if(userGuess === 20)
{
    lastResult.textContent = "game over!";
    lastResult.style.backgroundColor = "green";
    lowOrHi.textContent = '';
    setGameOver();
    }
else 
{
    lastResult.textContent = 'wrong';
    lastResult.style.backgroundColor = 'red';
    if(userGuess < randomNumber)
    {
        lowOrHi.textContent = "the value is low";
            }
            else if(userGuess > randomNumber)
            {
                lowOrHi.textContent = "the guess is high";
            }

}
guessCount++;
guessField.value = '';
guessField.focus();
};

guessSubmit.addEventListener('click', checkGuess);

function setGameOver() {
guessField.disabled = true;
guessSubmit.disabled = true;
resetButton = document.createElement("button");
resetButton.textContent = "start new game";
document.body.appendChild(resetButton);
resetButton.addEventListener('click', resetGame); 
};
function resetGame() {
    guessCount = 1;
  
    const resetParas = document.querySelectorAll('.resultParas p');
    for (const resetPara of resetParas) {
      resetPara.textContent = '';
    }
  
    resetButton.parentNode.removeChild(resetButton);
  
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();
  
    lastResult.style.backgroundColor = 'white';
      const randomNumber = Math.floor(Math.random() * 100) + 1;
  }