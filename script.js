// let card = ` <div class="card m2 m1 rounded "><div class="play-button"><img src="play.svg" alt=""></div><img class="rounded" src="IMG-20250418-WA0001.jpg" alt=""><h4>Pal Pal</h4><p>afsun , Alimrk</p></div>`

function createCard(img, tittle, artist) {
    let card = ` <div class="card m2 m1 rounded clickable "><div class="play-button clickable"><img src="play.svg" alt=""></div><img class="rounded" src="${img}" alt=""><h4>${tittle}</h4><p>${artist}</p></div>`
    let container = document.querySelector(".card-container").innerHTML += card;
}
createCard("IMG-20250418-WA0001.jpg", "pal pal", "afsun");
createCard("201017.png", "jo tum mere ho", "anuv jain");
createCard("IMG_20240323_062149.jpg", "dil me karar aya", "lata mangeskar");
createCard("IMG-20250418-WA0001.jpg", "main hu giyan", "giayn");
createCard("201017.png", "tabahi", "badshah");
createCard("IMG-20250418-WA0001.jpg", "dheere dheere ", "yo yo honey singh");
createCard("201024.png", "gitar sikhda", "hardy siddu");
createCard("IMG-20250418-WA0001.jpg", "mombatiya", "diljit singh"); 
createCard("201024.png", "come through", "talha anjum , umair");
createCard("IMG_20240323_062149.jpg", "do it all for you", "taimur baig");