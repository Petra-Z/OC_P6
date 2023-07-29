// Récuperer les datas des photographes
async function getPhotographers() {
  const photographers = photographersAndMedias.photographers;
  return photographers;

  //   // Recuperation les data du fichier JSON en utilisant "fetch".
  //   return fetch('/data/photographers.json')
  //   .then(response => response.json())
  //  //  .then(data => console.log(data))
  //   .catch(error => console.log(error));
}

// Afficher les photographes
async function displayData(photographers) {
  const photographersSection = document.querySelector(".photographer-section");

  photographers.forEach((photographer) => {
    // eslint-disable-next-line
    const photographerModel = photographerFactory(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);
  });
}

async function init() {
  const photographers = await getPhotographers();
  displayData(photographers);
}

init();
