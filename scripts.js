//Get an imput from a user for Celcius degree
const celsius = prompt("Enter the Celsius value") * 1;

//Calculate Kelvin Degree based on the Celsius  given
let kelvin = celsius + 273.15;

//Round the result to the nearest integer number
// kelvin = Math.round(kelvin);

//Round the result to the nearest number with two decimal points
kelvin = kelvin.toFixed(2);

//Print the result (calculated Kelvin) to user on console
alert(`${celsius} Celsius degree aquals ${kelvin} Kelvin`);
