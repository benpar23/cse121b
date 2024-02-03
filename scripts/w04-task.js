/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: 'Ben Parada',
    photo: 'images/profilepicture.jpg',
    favoriteFoods: ["Flat Breaded Chicken", "Pizza Hut", "Fried Chicken"],  
    hobbies: ["Playing videogames", "Watching Marvel movies", "Reading"],
    placesLived: []
};

/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push(
    {
    place: 'Newmarket, ON',
    length: '7 years'
    }
)

myProfile.placesLived.push(
    {
        place: 'Keswick, ON',
        length: '5 years'
    }
)

myProfile.placesLived.push(
    {
        place: 'Markham, ON',
        length: '6 years'
    }
)

/* DOM Manipulation - Output */

/* Name */
let nameElement = document.querySelector('#name');

nameElement.textContent = myProfile.name;

/* Photo with attributes */
let photoElement = document.querySelector('#photo');

photoElement.setAttribute("src", myProfile.photo);
photoElement.setAttribute("alt", myProfile.name);

/* Favorite Foods List*/

myProfile.favoriteFoods.forEach(function (food) {
    const newListItem = document.createElement("li");
    newListItem.textContent = food;
    const list = document.querySelector("#favorite-foods")
    list.appendChild(newListItem); 
})

/* Hobbies List */
myProfile.hobbies.forEach(function (hobby) {
    const newListItem = document.createElement("li");
    newListItem.textContent = hobby;
    const list = document.querySelector("#hobbies")
    list.appendChild(newListItem);
})

/* Places Lived DataList */
myProfile.placesLived.forEach(function (item) {
    const newDt = document.createElement('dt');
    const newDd = document.createElement('dd');
    newDt.textContent = item.place;
    newDd.textContent = item.length;

    const list = document.querySelector('#places-lived');
    list.appendChild(newDt);
    list.appendChild(newDd);
})

