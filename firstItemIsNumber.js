'use strict';

const prompt = require('prompt-sync')();

let item = JSON.parse(prompt('Enter an array: '));

if(typeof item[0] == 'number'){
  console.log(true);
}else{
  console.log(false);
}


// ["Kevin","Damian","Brandon","Andre","Johanna","Lauren","Darrick","Edna","Sharika","Keisha"]