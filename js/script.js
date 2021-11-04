// alert('Hello World');



const nome = prompt ('Inserisci il tuo nome')
console.log('nome')

const cognome = prompt ('Inserisci il tuo cognome')
console.log('cognome')

const colore = prompt ('Inserisci il tuo colore preferito')
console.log('colore')

let numero = 21;

let password = nome + cognome + colore + numero;
document.getElementById('password').innerHTML = password;
console.log('password')