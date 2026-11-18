// const exportedObject = require('./multiple-exports');
// const { myName, myHobbies, myFavoriteNumber } = exportedObject;
const { myName, myHobbies, myFavoriteNumber } = require('./multiple-exports');

// // DON'T USE ABSOLUTE PATHS
// const greeting = require('/Users/bez_mac/Desktop/node/03-coomon-js-module/single-export');
const greeting = require('./single-export');

const {
  myName: otherName,
  myFriendsName,
  myGreateHobbies,
} = require('./export-and-import');

// Imports from multiple-exports
console.log(myName);
console.log(myHobbies);
console.log(myFavoriteNumber);

myHobbies.push('climbing');
// Import from single-export
greeting(myName);

// Imports from export-and-import
console.log(otherName);
console.log(myFriendsName);
console.log(myGreateHobbies);
