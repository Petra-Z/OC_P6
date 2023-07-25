// Récuperer les data des photographes 

async function getPhotographers() {
  const photographers = photographersAndMedias.photographers
  return photographers;
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
