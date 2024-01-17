/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = "Ben Parada";
let currentYear = 2024;
let profilePicture = 'images/profilepicture.jpg';


/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');


/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = `${currentYear}`;

imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", `Profile image of ${fullName}`);


/* Step 5 - Array */

let foods = ["Flat Breaded Chicken", "Pizza Hut", "Fried Chicken"];

foodElement.innerHTML = foods;

let additionalFood = "Pupusas";

foods.push(additionalFood);

foodElement.innerHTML += `<br>${foods}`;

foods.shift();

foodElement.innerHTML += `<br>${foods}`;

foods.pop();

foodElement.innerHTML += `<br>${foods}`;





