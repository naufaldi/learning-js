const personalInfo = {
  firstName: 'Dylan',
  lastName: 'Israel',
  city: 'Austin',
  state: 'Texas',
  zcode: 73301
};

const (firstName, lastName) = personalInfo;

console.log(`${firstName} ${lastName}`);
//Dylan Israel

//or like this

const (firstName:fn , lastName:ln ) = personalInfo;

console.log(`${fn} ${ln}`);
//same output
//Dylan Israel
