/* function print(callback){
   callback(); 
}

console.log(typeof print); */


/* function task1 (){
  console.log ("This is the first instruction that will run once we run this callback.js");
}

function task2 (){
  console.log ("This is the second instruction that will run once we run this callback.js");
}

function task3 (){
  console.log ("This is the third instruction that will run once we run this callback.js");
}

/*task1();
task2();
task3();
setTimeout(task1,2000);
task2(); */

const message = function(){
  console.log ("this message will be shown after 5s");
}

setTimeout(message,5000);