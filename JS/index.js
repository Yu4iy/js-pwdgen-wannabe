function randomInteger(min, max) {
	let rand = min + Math.random() * (max - min);
	return Math.round(rand);
}

const userName = prompt('Come ti chiami');
const userSurname = prompt('Qual è il tuo cognome');
const userColor = prompt('Qual è il tuo colore preferito') + ( randomInteger(1, 999) );
let pasgen = document.getElementById('pasgen').innerHTML = userName + userSurname + userColor;

