'use strict';

const prompt = require('prompt-sync')();

let item = JSON.parse(prompt('Enter an array: '));

console.log(item[item.length - 1]);