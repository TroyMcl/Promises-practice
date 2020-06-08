const axios = require('axios');
const path = require('path');
const Promise = require('bluebird');
//Bluebird docs for promisfying Libraries http://bluebirdjs.com/docs/features.html#promisification-on-steroids
const fs = Promise.promisifyAll(require("fs"));
const numberFile = path.join(__dirname, 'numberFile.txt');
const numberFact = path.join(__dirname, 'numberFact.txt');

const apiCall = (num) => {
  return axios.get(`http://numbersapi.com/${num}/trivia`);
};

/*
Fill out this function to read our file in 2 steps
1) return only the fs.Promise() = what do you see? Why does that matter?
2) remove the return, what do you get? Why? How can this help you debug promises?
3) finish filling out your promise chain to return a value as a data type of number
*/
const readFilePromise = (filePath) => {

};
// console.log(readFilePromise(numberFile));
// let fileContents = readFilePromise(numberFile);
// console.log(fileContents)

/*
Fill out this function to make an API call to get a trivia fact about a random number
There is one console.log where the function is invoked, when you make your API call console.log your results.data
Notice the order of your console.logs = what does this mean for writing your code?
 */
const makeNumApiCall = (num) => {

};
//console.log('function call',makeNumApiCall(10))
// let numFact = makeNumApiCall(10)
// console.log('function call', numFact)

/*
Write a function that will write a number to your numberFile.txt
  you should be able to see a change in your numberFile.txt
  inside of your promise what is returned by this promise successfully writing to your file? Why does that matter?
*/
const writeNumPromise = (filePath, num) => {

};
// console.log(writeNumPromise(numberFile, 10));
//let fileContents = writeNumPromise(numberFile, 15);
//console.log(fileContents)


/* Promise Chaining */

/*
 Write a function that reads a number from a file and then makes an api call to get a trivia fact about that number
 -do this the long hand way- don't use your previously written helper functions
 */
const readNumandGetFact = (filePath, ) => {

};
// console.log(readNumandGetFact(numberFile))
// let numTrivia = readNumandGetFact(numberFile)
// console.log(numTrivia)

/*
Accomplish the same functionality but now only using your using your helper functions
*/
const readNumandGetFactHelpers = (filePath, ) => {

};
// console.log(readNumandGetFactHelpers(numberFile))
// let numTrivia = readNumandGetFactHelpers(numberFile)
// console.log(numTrivia)

/**
 Write a function that:
 -gets a number from the numberFile:
 -makes an api call for that number to get a fact
 -writes that fact to the numberfact file
 Do this with out using your helper functions
  -bonus: generate a new random number between 1-250 and write it to the numberFile
 */
const multiplePromises = () => {

};
// console.log(multiplePromises());
// let write = multiplePromises();
// console.log(write)

/**
 Write a function that:
 -gets a number from the numberFile:
 -makes an api call for that number to get a fact
 -writes that fact to the numberfact file
 Do this using your helper functions (write any new helper functions that you need)
  -bonus: generate a new random number between 1-250 an write it to the numberFile
  -bonus: write to your numberFact file without overwriting previous facts
 */
const multiplePromisesHelpers = () => {

};
// console.log(multiplePromises());
// let write = multiplePromises();
// console.log(write)