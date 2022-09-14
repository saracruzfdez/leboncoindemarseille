// RECUPERE DATA DE MA BD ET CREE MES ANNONCES POUR AFFICHAGE SUR PAGE ANNONCES
const cardElem = document.getElementById('card')

fetch('http://localhost:3000/annonces')
    .then(res => res.json())
    .then(function (annonces) {

        for (let i = 0; i < annonces.length; i++) {
            let heart;
            // SI MON OBJET A LA PROPRIETE ISLIKED A TRUE ALORS AFFICHE LANNONCE COMME LIKé (DEBUT LIGNE 25)
            if (annonces[i].isLiked == true) {
                heart = "fa-solid"
            }
            else {
                heart = "fa-regular"
            }
            // CREE MON ANNONCES A PARTIR DE LA BD.
            cardElem.innerHTML +=
                `<div class="d-flex">
                    <img class="photo" src ="${annonces[i].image}" width="300" height ="300">
                    <div class="text col-8">
                        <h5>${annonces[i].titre}</h5>
                        <p>${annonces[i].descriptif}</p>
                        <span class="prix">Prix : ${annonces[i].prix} euros</span>
                        <div id="like">
                        <i class="${heart} fa-heart mt-3" onclick="change(this); changeValueDatabase(${annonces[i].id}, this)"></i>
                        </div>
                    </div>
                </div>
                <hr></hr>`
        }
    })

// AU CLICK SUR LE COEUR AFFICHE LE PLEIN SIL EST CREUX ET A LINVERS DS LE CAS CONTRAIRE
function change(e) {
    if ((e.classList.value) == "fa-regular fa-heart mt-3") {
        e.classList.value = "fa-solid fa-heart mt-3"
    } else if ((e.classList.value) == "fa-solid fa-heart mt-3") {
        e.classList.value = "fa-regular fa-heart mt-3"
    }
}

// AU CLICK SUR LE COEUR SIL EST PLEIN CHANGE LA VALEUR A TRUE SUR MA BD ET LE CAS CONTRAIRE
function changeValueDatabase(id, e) {
    fav = (e.classList.value === "fa-regular fa-heart mt-3") ? false : true;
    fetch('http://localhost:3000/annonces/' + id, {
        method: 'PATCH',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({ isLiked: fav })
    })
}