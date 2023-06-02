//Mettre le code JavaScript lié à la page photographer.html*

// création lien entre l'ID des photographes et l'URL
const getParam = () => {
    let search = window.location.search
    let result = new URLSearchParams(search).get('id')
    console.log(result)

    if (result != null) {
        return result
    }

    return false
}

// getParam();

const photographerId = getParam();

console.log(photographerId)


const getPhotographerById = async (id) => {
    const response = await fetch("/data/photographers.json");
    const data = await response.json();
    const photographersList = data.photographers
    //on boucle sur la liste des photographes et on retrouve le photographe par son id
    // console.log(data.photographers);

    let p = {};
    p = photographersList.filter(element => element.id == id )
    console.log(p)
    return p[0];
}
const photographer = getPhotographerById(photographerId).then(result => {
    console.log(result)
    displayPhotographer(result)
}).catch(error => console.log(error))




async function displayPhotographer(photographer) {
    const photographerHeader = document.querySelector(".photograph_header");
    console.log(photographer)
    const contactButton = document.querySelector(".contact_button");
    const photographerDetails = photographerPageFactory(photographer);
    const photographerPageDOM = photographerDetails.getPhotographerPageDOM();
    const photographerAvatar = photographerDetails.getPhotographerPageAvatarDOM();
    photographerHeader.insertBefore(photographerPageDOM, contactButton );
    photographerHeader.appendChild(photographerAvatar);
}


