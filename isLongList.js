'use strict';

const prompt = require('prompt-sync')();

let item = JSON.parse(prompt('Enter an array: '));

if(item.length == 10){
  console.log(true);
}else{
  console.log(false);
}