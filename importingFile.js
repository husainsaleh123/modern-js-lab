//Exercise 7 - Follow the steps below for some practice with import and export. 
// Updates the values for default, age, and job accordingly:

//After initalizing a node project "npm init -y"

//Imports the values from exportFile.js
import name, { computer, age, job } from './exportingFile.js';

// Prints the values from exportFiles.js after importing
console.log(name, computer, age, job);
