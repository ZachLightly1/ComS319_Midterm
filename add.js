/*
*   Zach Lightly
*   Kush Pamnani
*   zachl@iastate.edu
*   kushp@iastate.edu
*   March 9 2024
*/

function imgClicked(){
    document.getElementById("img-input").click();
}

function updateImg(event) {
    event.preventDefault();
    document.getElementById("img-btn").style.margin = "0px";
    document.getElementById("img-from-user").setAttribute('src', URL.createObjectURL(event.target.files[0]));
}

function calcDate() {
    let now = new Date();
    let month = now.getMonth() + 1;
    let day = now.getDate();
    if (month < 10) month = '0' + month;
    if (day < 10) day = '0' + day;
    let today = now.getFullYear() + '-' + month + '-' + day;
    document.getElementById("rest-date").setAttribute("value", today);
}

calcDate();

function getUserInput(event){
    event.preventDefault();

    let name = document.forms['information']['rest-name'].value;
    let date = document.forms['information']['rest-date'].value;
    let location = document.forms['information']['rest-location'].value;
    console.log(location);
    let food = document.forms['information']['rest-food'].value;
    let service = document.forms['information']['rest-service'].value;
    let pricing = document.forms['information']['rest-price-rating'].value;
    let price =  document.forms['information']['rest-price'].value;
    let desc =  document.forms['description']['rest-desc'].value;
    let imgURL = document.getElementById('img-from-user').src;

    if (name == '' || food == '' || service == '' || pricing == '' || desc == '' || imgURL == '') {
        alert("Please fill out all required fields");
        return;
    }

    document.getElementById('user-input').style.display = 'none';

    let card = document.createElement('div');
    card.setAttribute('class', 'restaurant-card');

    let ratingNum = (Number(food) + Number(service) + Number(pricing)) / 3;
    console.log(ratingNum);
    ratingNum = Math.round(ratingNum * 10) / 10;
    let rating = "" + ratingNum;
    if (ratingNum === Math.floor(ratingNum)) rating = rating + ".0";

    let yr = date.substring(0, 4);
    let mo = date.substring(5, 7);
    let dy = date.substring(8);
    date = mo + '/' + dy + '/' + yr;

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
                <button class="info-btn" onclick="toggleView(0)">View</button>
            </div>
            <div class="additional-info" style="display: none;">
                <p><strong>Date: </strong>${date}</p>
                <p>&#x2022;</p>
                <p><strong>Location: </strong>${location}</p>
                <p>&#x2022;</p>
                <p><strong>Price: </strong>$${price}</p>
            </div>
        `;
    document.getElementsByClassName('container')[0].appendChild(card);

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