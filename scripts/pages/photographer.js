//Mettre le code JavaScript lié à la page photographer.html*

// création lien entre l'ID des photographes et l'URL
const getParam = () => {
    let search = window.location.search
    let result = new URLSearchParams(search).get('id')
    if (result != null) {
        return result
    }
    return false
}

const getData = async (url) => {
    const data = await fetch(`${url}`)
        .then((res) => res.json())
        .then((data) => data)
    return data;
}

let photographerById = getParam();

console.log(photographerById)


const getPhotographerById = async (id) => {
    const response = await fetch("/data/photographers.json");
    const data = await response.json();
    const photographersList = data.photographers
    //on boucle sur la liste des photographes et on retrouve le photographe par son id
    // console.log(data.photographers);
    let p = {};
    p = photographersList.filter(element => element.id == id )
    // console.log(p)
    return p[0];
}
const photographer = getPhotographerById(photographerById).then(result => {
    console.log(result)
    displayPhotographer(result)
    // displayMedias(photographerById)
}).catch(error => console.log(error))

async function getMedias(photographerId) {
    const response = await fetch("/data/photographers.json");
    const data = await response.json();
    console.log(data);
    
    const mediaPhotographer = [];
    const medias = data['media'];
    console.log(medias);
  
    medias.forEach(function(media) {
    //   console.log(media);
      if (media.photographerId == photographerId) {
        mediaPhotographer.push(media);
      }
    //   console.log(mediaPhotographer);
    });
  
    return mediaPhotographer;
  }

const medias = getMedias(photographerById).then(result => {
    console.log(result)
    displayMedias(result)
}).catch(error => console.log(error))


async function displayPhotographer(photographer) {
    const photographerHeader = document.querySelector(".photograph-header");
    // console.log(photographer)
    const contactButton = document.querySelector(".contact-button");
    const photographerDetails = photographerPageFactory(photographer);
    const photographerPageDOM = photographerDetails.getPhotographerPageDOM();
    const photographerAvatar = photographerDetails.getPhotographerPageAvatarDOM();
    photographerHeader.insertBefore(photographerPageDOM, contactButton );
    photographerHeader.appendChild(photographerAvatar);
}


async function displayMedias(medias) {
    // console.log(medias)
    const gallerySection = document.querySelector(".gallery")
    medias.forEach((media) => {
        console.log(media)
        const mediaElement = mediaPhotographerFactory(media);
        const mediaCardDOM = mediaElement.getMediaCardDOM();
        gallerySection.appendChild(mediaCardDOM)
    })
    lightboxAddEventListener();
    modalLightboxEvents();
};



