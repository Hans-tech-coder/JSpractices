




function task1 (){
  console.log ("This is the first instruction that will run once we run this callback.js");
}

function task2 (){
  console.log ("This is the second instruction that will run once we run this callback.js");
}

function task3 (){
  console.log ("This is the third instruction that will run once we run this callback.js");
}

/* task1();
task2();
task3(); */
setTimeout(task1,2000);
task2();