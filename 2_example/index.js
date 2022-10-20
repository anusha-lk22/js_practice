const content = document.querySelector('p');
content.addEventListener('click', updateName);

function updateName() {
const name = prompt('enter ur name');
content.textContent = `Player1: ${name}`;

};

