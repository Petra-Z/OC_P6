/* eslint-disable no-undef */

// Extraire les paramètres d'URL de la page
let params = new URL(document.location).searchParams;

// Récuperer la valeur du paramètre "id" pour identifier le photographe
let photographerById = params.get("id");
// console.log(photographerById)

let medias;
let photographer;

// Récupérer le photographe correspondant à l'id récupéré précédement
async function getPhotographer() {
  // Recuperation du fichier JSON en utilisant "fetch"
  return fetch("../data/photographers.json")
    .then(function (res) {
      return res.json();
    })
    .then(function (json) {
      return json["photographers"];
    })
    .then(function (photographers) {
      let result = null;
      photographers.forEach((element) => {
        if (element.id == photographerById) {
          result = element;
        }
      });

      return result;
    })
    .catch(function (err) {
      console.log(err);
    });
}

// Récupérer les médias du photographe
async function getMedias() {
  // Recuperation du fichier JSON en utilisant "fetch".
  return fetch("../data/photographers.json")
    .then(function (res) {
      return res.json();
    })
    .then(function (json) {
      const mediaPhotographer = [];
      medias = json["media"];
      // filtrer les médias en fonction de l'id du photographe
      medias.forEach(function (media) {
        if (media.photographerId == photographerById) {
          mediaPhotographer.push(media);
        }
      });
      return mediaPhotographer;
    })
    .catch(function (err) {
      console.log(err);
    });
}

// Récupérer les détails du photographe et son avatar à partir de l'objet crée dans la factory
async function displayPhotographer(photographer) {
  const photographerHeader = document.querySelector(".photograph-header");
  // console.log(photographer)
  const contactButton = document.querySelector(".contact-button");
  const photographerDetails = photographerPageFactory(photographer); 
  const photographerPageDOM = photographerDetails.getPhotographerPageDOM();  
  const photographerAvatar = photographerDetails.getPhotographerPageAvatarDOM();
  photographerHeader.insertBefore(photographerPageDOM, contactButton);
  photographerHeader.appendChild(photographerAvatar);
}

// Récupérer les medias et créer la gallery du photographe
async function displayMedias(medias) {
  // console.log(medias)
  const gallerySection = document.querySelector(".gallery");
  gallerySection.innerHTML = "";
  medias.forEach((media) => {
    console.log(media);
    const mediaElement = mediaPhotographerFactory(media);     
    const mediaCardDOM = mediaElement.getMediaCardDOM();
    gallerySection.appendChild(mediaCardDOM);
  });
}

// La fonction d'initialisation
async function init() {
  // Pour récupérer les données
  medias = await getMedias();
  photographer = await getPhotographer();

  // Afficher dans le footer de la page le prix par jour du photographe
  const pricePerDay = document.querySelector(".pricePerDay");
  pricePerDay.setAttribute(
    "aria-label",
    `Prix par jour: ${photographer.price}`
  );
  pricePerDay.innerHTML = `${photographer.price}€/jour`;

  // Pour afficher les informations
  displayPhotographer(photographer);
  displayMedias(medias);
  selectData(medias);   // le filtre
  lightboxAddEventListener(); // lightbox
  modalLightboxEvents(); 
}

init();

/* eslint-enable no-undef */
