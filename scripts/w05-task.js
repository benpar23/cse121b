/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector("#temples");

let templesList = [];

/* async displayTemples Function */

const displayTemples = (temples) => {
    temples.forEach(function (temple) {
        const articleElement = document.createElement("article");
        
        const h3Element = document.createElement("h3");
        h3Element.innerText = temple.templeName;

        const imgElement = document.createElement("img");
        imgElement.setAttribute("src", temple.imageUrl);
        imgElement.setAttribute("alt", temple.location);

        articleElement.appendChild(h3Element);
        articleElement.appendChild(imgElement);

        templesElement.appendChild(articleElement);
    })
}

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");

    if (response.ok){
        const list = await response.json();

        templesList = await list;
    }

    displayTemples(templesList);
}


/* reset Function */
function reset() {
    templesElement.innerHTML = "";
}

/* filterTemples Function */
function filterTemples(temples) {
    reset();

    let filtered = document.querySelector("#filtered").value;

    
}

getTemples();

/* Event Listener */
