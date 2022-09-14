// EVENEMENT SUR SUBMIT POUR RECUPERER MA DATA DU FORMULAIRE ET LENVOYER A LA BD
const form = document.forms["annonce"]

form.addEventListener("submit", function (e) {
  e.preventDefault()
  let titre = form["titre"].value
  let descriptif = form["descriptif"].value
  let image = form["image"].value
  let prix = form["prix"].value
  let isLiked = false

  // ENVOIE DATA
  fetch("http://localhost:3000/annonces",
    {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify({ titre, descriptif, image, prix, isLiked })
    })
})