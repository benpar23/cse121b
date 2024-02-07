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
function sortBy(temples) {
    reset();

    let filter = document.querySelector("#filtered").value;

    switch (filter) {
        case "utah":
            const utah = temples.filter((temple) => temple['location'].includes('Utah'));
            displayTemples(utah);
            break;
        case 'notutah':
            const notUtah = temples.filter((temple) => !temple.location.includes('Utah'));
            displayTemples(notUtah);
            break;
        case 'older':
            const older = temples.filter((temple) => (new Date(temple.dedicated) < new Date(1950,0,1)));
            displayTemples(older);
            break;
        case 'all':
            displayTemples(temples);
    }
}

/* Event Listener */
document.querySelector("#filtered").addEventListener("change", () => {sortBy(templesList)});

getTemples();