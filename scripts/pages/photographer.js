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

getParam();

const photographerId = getParam();
const photographer = async (id) => {
    await getPhotographerById(id);
}

const getPhotographerById = async (id) => {
    const response = await fetch("/data/photographers.json");
    const data = await response.json();
    const photographersList = data.photographers
    //on boucle sur la liste des photographes et on retrouve le photographe par son id
    console.log(data.photographers);

    let p = {};
    photographersList.map(element => {
        if(element.id == id) {
            p = element
        }
    })

    displayPhotographerDol(p);
}

const displayPhotographerDom = (photographer) => {
    
}

