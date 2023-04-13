const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const charactersSym = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
  "/"];

let passwordOne = document.getElementById("password-one");
let passwordTwo = document.getElementById("password-two");
let amountEl = document.getElementById("amount-el");
let x = 12;

function includSym() {
  characters.push(...charactersSym);
}

function changeNum() {
  x = amountEl.value;
}

function generator() {
  let stringOne = "";
  let stringTwo = "";
  for(let i = 0; i < x; i++) {
    let randomNumber = Math.floor(Math.random() * characters.length);
    let randomNumberTwo = Math.floor(Math.random() * characters.length);
    stringOne += characters[randomNumber];
    stringTwo += characters[randomNumberTwo];
  }
  passwordOne.textContent = stringOne;
  passwordTwo.textContent = stringTwo;
}





