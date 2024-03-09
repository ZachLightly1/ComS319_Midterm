/*
*   Zach Lightly
*   Kush Pamnani
*   zachl@iastate.edu
*   kushp@iastate.edu
*   March 9 2024
*/

fetch('data.json')
.then(response => response.json())
.then(data => appendData(data))
.catch(error => console.log(error));

function appendData(data) {
    
    let container = document.getElementsByClassName('container')[0];
    let entrees = data.entrees;

    for (let i = 0; i < entrees.length; i++){
        let entree = entrees[i];
        let name = entree.name;
        let date = entree.date;
        let location = entree.location;
        let food = entree.food;
        let service = entree.service;
        let pricing = entree.pricing;
        let price = entree.price;
        let desc = entree.description;
        let imgURL = entree.URL;

        let card = document.createElement('div');
        card.setAttribute('class', 'restaurant-card');

        let ratingNum = (food + service + pricing) / 3;
        ratingNum = Math.round(ratingNum * 10) / 10;
        let rating = "" + ratingNum;
        if (ratingNum === Math.floor(ratingNum)) rating = rating + ".0";

        card.innerHTML = `
                <div class="image-bigtext">
                    <div class="image-border">
                        <img src="${imgURL}" alt="${name}" class="rest-card-img">
                    </div>
                    <div class="bigtext">
                        <h1>${name}</h1>
                        <h2>${rating}</h2>
                    </div> 
                </div>
                <div class=card-bottom>
                    <p>${desc}</p>
                    <button class="info-btn" onclick="toggleView(${i})">View</button>
                </div>
                <div class="additional-info" style="display: none;">
                    <p><strong>Date: </strong>${date}</p>
                    <p>&#x2022;</p>
                    <p><strong>Location: </strong>${location}</p>
                    <p>&#x2022;</p>
                    <p><strong>Price: </strong>$${price}</p>
                </div>
        `;
        container.appendChild(card);
     }
}

function toggleView(i) {
    let infoCard = document.getElementsByClassName('additional-info')[i];
    let button = document.getElementsByClassName('info-btn')[i];

    if (infoCard.style.display === "none") {
        infoCard.style.display = "flex"; // Show the additional info
        button.textContent = "Hide"; // Change the button text to "Hide"
    } else {
        infoCard.style.display = "none"; // Hide the additional info
        button.textContent = "View"; // Change the button text back to "View"
    }
}