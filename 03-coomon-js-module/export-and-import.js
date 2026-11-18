const { myName, myHobbies } = require('./multiple-exports');

const myFriendsName = 'Alice';

module.exports.myGreateHobbies = myHobbies;
module.exports.myName = myName;
module.exports.myFriendsName = myFriendsName;
