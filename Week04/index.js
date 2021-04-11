//1.	Using template literals instead of concatenation, write a function that takes firstName and lastName and returns ‘fistName lastName’

function fullName (firstName, lastName){
    return `${firstName} ${lastName}`;
}
console.log ("Step 1");
console.log (fullName ('Bob', 'Brennan'));


//2.	Write the same function as above as an arrow function with a different name.
//
//  These are evil and messy and inconsistent in terms of syntax.  My new least favorite thing in JS.

const otherName = (firstName, lastName) => `${firstName} ${lastName}`
console.log ("Step 2");
console.log (otherName('Fred','Flintstone'));


/*
3.	Look up the JavaScript functions setTimeout() and setInterval(). Notice how they each take a callback.
a.	Using setTimeout, write an anonymous (has no name assigned to it) arrow function in the callback parameter position. 
     The function should alert ‘Time is up!’. Choose whatever length of time you want for the timeout.
*/

console.log ("Step 3a 2 Second Delay for Alert - Times Up");
setTimeout( () => {alert('Time is Up!');}, 2000 );

/*
b.	Write an arrow function named askAreWeThereYet that alerts ‘Are we there yet?’. 
     Using setInterval, pass askAreWeThereYet into the callback parameter position. 
	 Choose whatever length of time you want for the interval.
*/


{
console.log ("Step 3b - 1 second Delay for Alert, (We there Yet) Kill it after 5 seconds");
let askAreWeThereYet = () => {alert('Are we there yet? ');};  // Annoying kid in car
let runLimit = setInterval (askAreWeThereYet, 1000);          // Fire interval at 1 second
setTimeout( () => {clearInterval(runLimit);}, 5000 );         // Make sure to kill the infinite loop
}

/*
4.	In this step you are going to write a function that takes a callback to better understand how callbacks work.
a.	Write a new function named processSplicedValue that takes 3 parameters – an array, the index of the element to be spliced 
     from the array, and a callback function that will process the sliced element. 

Inside the function, use the first two parameters to splice an element from the array.

Inside the function, call the callback function and pass the spliced value into it.

Outside of the function, create an array of strings, call processSplicedValue, and pass in the array you just created, 
     an index number, and console.log into it. 

For example: processSplicedValue(arrayName, 2, console.log);
b.	Call the processSplicedValue function again but this time pass in the alert method instead of console.log.
c.	Call the processSplicedValue function again, but this time pass in an anonymous arrow function that alerts the spliced value.
d.	Call the processSplicedValue function one more time, but this time, pass in a custom function of your choice that you should 
        create and name.
*/

var names = ["Tom", "Harry", "Mavis", "Bufford", "Tyler"];

function processSplicedValue4(inputArray, spliceIndex, cbFunction){
     // console.log (cbFunction)
     let delValue = inputArray.splice(spliceIndex, 1);

     let runLimit2 = setTimeout (function() {
          eval(cbFunction (delValue))}, 1000); 

}
console.log ("Step 4a - Splice an Array and console log the spliced array value");
processSplicedValue4(names, 0, console.log);

console.log ("Step 4b - Splice an Array and alert the spliced array value");
processSplicedValue4(names, 0, alert);

console.log ("Step 4c - Splice an Array and alert with anonymous arrow function");
const processSplicedValue4c = (inputArray, spliceIndex, cbFunction) => {
     let delValue = inputArray.splice(spliceIndex, 1);
     cbFunction(delValue) };

processSplicedValue4c(names, 1, alert);

console.log ("Step 4d - Splice an Array and alert length of entry selected");
const processSplicedValue4d = (inputArray, spliceIndex, cbFunction) => {
     let delValue = inputArray.splice(spliceIndex, 1);
     cbFunction(delValue + " is " + delValue.toString().length +" characters long"); };

processSplicedValue4d(names, 1, console.log);