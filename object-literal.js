/* 
  array will contain many data elements
  objects will be one data that will attribute  
*/

// let car = ['year' , 'make' , 'model']

let car = {
  make: 'nissan',
  model: 'juke',
  year: '2015',
  getPrice: function () {
    return 1,000,000;
  },
  printDescription: function () {
    console.log(this.make + ' ' + this.model);
  }
}

car.printDescription()
console.log(car.year);