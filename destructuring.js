let a, b, c, d, e;
let names = ['Hans', 'Wes', 'Chuck', 'Kervy', 'Cyan'];

/* [a, b, c, d, e]=names;
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e); */

/* [a, b,...others]=names;
console.log(a);
console.log(b);
console.log(others); */

//destructuring an object
let year, model;

/* let car = {
  make: 'Nissan',
  model: 'Juke',
  year: 2022,
  value: 1000000
} */
({value, model, year, make} = {
  make: 'Nissan',
  model: 'Juke',
  year: 2022,
  value: 1000000
});
console.log(year);
console.log(model);
console.log(make);
console.log(value);