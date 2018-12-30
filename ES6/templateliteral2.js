//before
let word1 = 'Dylan';
let word2 = 'Israel';
let number2 = 10;
let number3 = 11;

const fullName= (number2+number3) + ' ' + word2;

console.log(fullName); //Dylan Israel

//after
const fullName= `${number1 + number2} ${word2}`;
