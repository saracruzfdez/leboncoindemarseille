// AFFICHE ANNONCES DANS LA PAGE FAVORIS SI LIKES SUR LA PAGE ANNONCES
const cardElem = document.getElementById('card')

fetch('http://localhost:3000/annonces')
    .then(res => res.json())
    .then(function (annonces) {

        for (let i = 0; i < annonces.length; i++) {

            if (annonces[i].isLiked === true) {

                cardElem.innerHTML +=
                    `<div class="d-flex">
    <img class="photo" src ="${annonces[i].image}" width="300" height ="300">
    <div class="text col-8">
    <h5>${annonces[i].titre}</h5>
    <p>${annonces[i].descriptif}</p>
    <span class="prix">Prix : ${annonces[i].prix} euros</span>
    <div id="like">
    </div>
    </div>
    </div>
    <hr></hr>`
            }
        }
    })