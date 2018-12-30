//before
let word1 = 'Dylan';
let word2 = 'Israel';

const fullName= word1 + ' ' + word2;

console.log(fullName); //Dylan Israel

//after
const fullName= `${word1} ${word2}`;
