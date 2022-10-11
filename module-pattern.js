var counter = (function() {
  //this is going to be private stuff
  let count = 0;
  function print(message) {
    console.log(message + '---' + count);
  }
  return {
    // value: count,
    get: function (){
      return count;
    },
    set: function (value){
      count = value;
    },
    increment: function (){
      count += 1;
      print ('after increment')
    },
    reset: function() {
      print('before reset:');
      count = 0;
      print('after reset');
    }
  }
})();
console.log(counter.count);
// console.log(counter.value);
counter.increment();
counter.increment();
counter.increment();
counter.reset();
counter.set(5);
console.log(counter.get());
counter.reset();