# promises-practice
Practice your asynchronous Nodejs code with Promises

An outline repo that gives you a place to solidify your concept and syntax understanding of promises. Designed for using Promises and Promise chains first. After you can refactor to use the newer async/await syntax.

When doing Promise chaining don't nest your promises. Keep everything on the same 'level'. Each function is called inside a console.log. There will not be data returned in these console.logs, only promises if you write your code correctly. These are for helping you to see what has run, what is being returned and to hopefully drive home the point that you have to use promises in async code (your code must 'wait' for the promise to resolve before moving on). To see the data add console.logs in your promises and look at the files you are reading from and writing to.