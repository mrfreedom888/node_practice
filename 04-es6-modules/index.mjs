import { season, temperature } from './named-exports.mjs';
import { isRaining, humidity } from './inline-exports.mjs';
import getData from './default-export.mjs';
import DEFAULT_SERVER, { USERNAME, PASSWORD } from './mixed-exports.mjs';
// import { PASSWORD, USERNAME } from './mixed-exports.mjs';

console.log(season + ' = ' + temperature);

console.log(isRaining, humidity);

getData('https://jsonplaceholder.typicode.com/posts/1')
  .then((post) => console.log(post))
  .catch((err) => console.error(err));

console.log(DEFAULT_SERVER);
console.log(USERNAME, PASSWORD);
