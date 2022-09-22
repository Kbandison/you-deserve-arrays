'use strict';

const prompt = require('prompt-sync')();

let item = JSON.parse(prompt('Enter an array: '));


if (item[3] != undefined){
console.log(item[3]);
} else{
  console.log(item[item.length - 1]);
}