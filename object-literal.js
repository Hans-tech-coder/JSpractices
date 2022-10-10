/* 
  array will contain many data elements
  objects will be one data that will attribute  
*/

let carOne = ['year' , 'make' , 'model']

let car = {
  make: 'nissan',
  // model: 'juke'; - this a first example for the model of the car object with sigle value.
  model: ['juke', 'GT-R', 'sentra'], // - this is a secon example is for the model with a multiple value using array.
  year: '2015',
  getPrice: function () {
    return 1000000;
  },
  printDescription: function () {
    console.log(this.make + ' ' + this.model);
  }
}

car.printDescription()
console.log(car.getPrice());
console.log(carOne[0]); // - this is referring for the line 6.
console.log(car['year']);
console.log(car['make']);
console.log(car['getPrice']);
console.log(car.model[0]); // - we call the car object and access the model property and access the array element 2 that has a value of sntra.
// console.log(car[0]); - do not do this, this is the car object
/* 
change the attribute model to array
*/

// var car = {}