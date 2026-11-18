const myName = 'Dima';
const myHobbies = ['Swiminng', 'Boxing', 'Cycling'];
const myFavoriteNumber = 11;

console.log(myHobbies);

console.log('Text from the multiple-exports CommonJS module');

module.exports.myName = myName;
module.exports.myHobbies = myHobbies;
module.exports.myFavoriteNumber = myFavoriteNumber;
