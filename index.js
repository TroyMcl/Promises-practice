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

//HELPER FUNCTIONS

/*
Fill out this function to read our file in 2 steps
1) return only the the promisifed fs.writeFileAsync promise
      - what do you see in your console, a value or a promise?
      - Now add a .then and .catch to your fs promise, console.log inside your .then
          When you run the function again, note the order of your console.logs
          Why are the logs in that order?
2) remove the return statement, what do you get? Why? How can this help you debug promises?
*/
const readFilePromise = (filePath) => {
  // step 1)
  return fs.readFileAsync(filePath, 'utf-8')

  // step 2)
  return fs.readFileAsync(filePath, 'utf-8')
        .then(data => {
          console.log('print out of data in promise: ', data);
          return data;
        })
        .catch(err => {
          return err;
        });
};
// let fileContents = readFilePromise(numberFile);
// console.log('print out of what calling funcition returns', fileContents)

/*
Fill out this function to make an API call to get a trivia fact about a random number
  You will need to ultimatley send the API response.data property as the final value for when your pormise chain resolves. How do you do that? How do you know the final value sent from your promise chain?
 */
const makeNumApiCall = (num) => {
  return apiCall(num)
        .then(response => {
          console.log('print out of data in promise: ',response.data);
          return response.data;
        })
        .catch(err => {
          return err;
        });
};
// let numFact = makeNumApiCall(10)
// console.log('function call', numFact)

/*
Write a function that will write a number to your numberFile.txt
  You should be able to see a change in your numberFile.txt after running this function
  Also take note of what your fs promise is returning?
  When debugging a promises, why is important to check the documentation of library promises that your are going to use?
*/
const writeNumPromise = (filePath, num) => {
  num = num.toString()
  return fs.writeFileAsync(filePath, num, 'utf-8')
        .then(data => {
          console.log('print out of data in promise: ', data);
          return data;
        })
        .catch(err => {
          return err;
        });
};
// let fileContents = writeNumPromise(numberFile, 15);
// console.log('function call ',fileContents)
// hint if written correclty the only change you will see will be in your numberFile.txt

/* Promise Chaining */

/*
 Write a function that reads a number from a file and then makes an api call to get a trivia fact about that number
 -do this the long hand way- don't use your previously written helper functions, but use the apiCall function
 */
const readNumandGetFact = (filePath) => {
  return fs.readFileAsync(filePath, 'utf-8')
    .then(number => {
      return apiCall(number);
    })
    .then(response => {
      console.log('Inside the promise: ', response.data);
      return response.data;
    })
    .catch(err => {
      return err;
    });
};
// let numTrivia = readNumandGetFact(numberFile)
// console.log('function call: ', numTrivia)

/*
Now focus on how to use functions that return promises in your promise chains. Accomplish the same functionality only using your using your helper functions
*/
const readNumandGetFactHelpers = (filePath) => {
  return readFilePromise(filePath)
        .then(num => {
          return apiCall(num);
        })
        .then(response => {
          console.log('Inside the promise: ', response.data);
          return response.data;
        })
        .catch(err => {
          return err;
        });
};
// let numTrivia = readNumandGetFactHelpers(numberFile)
// console.log('function call: ', numTrivia)

/**
 Write a function that:
  - gets a number from the numberFile:
  - makes an api call for that number to get a fact
  - writes that fact to the numberfact file
 Do this with out using your helper functions
  -bonus: generate a new random number between 1-250 and write it to the numberFile
 */
const multiplePromises = (numberFilePath, numberFactPath) => {
  return fs.readFileAsync(numberFilePath, 'utf-8')
        .then(num => {
          return apiCall(num);
        })
        .then(response => {
          return fs.writeFileAsync(numberFactPath, response.data, 'utf-8');
        })
        .catch(err => {
          return err;
        });
};
// let write = multiplePromises(numberFile, numberFact);
// console.log(write)

/**
 Write a function that:
  - gets a number from the numberFile:
  - makes an api call for that number to get a fact
  - writes that fact to the numberfact file
 Do this using your helper functions (write any new helper functions that you need)
  -bonus: generate a new random number between 1-250 an write it to the numberFile
  -bonus: write to your numberFact file without overwriting previous facts
 */
const multiplePromisesHelpers = (numberFilePath, numberFactPath) => {
  return readFilePromise(numberFilePath, 'utf-8')
        .then(num => {
          return apiCall(num);
        })
        .then(response => {
          return writeNumPromise(numberFactPath, response.data, 'utf-8');
        })
        .catch(err => {
          return err;
        });
};
// let write = multiplePromises(numberFile, numberFact);
// console.log(write)

/*
After finishing making promise chains, go back and refactor with async/await
*/