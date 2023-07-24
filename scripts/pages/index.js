// import { photographerFactory } from 'scripts/factories/photographerFactory.js';

async function getPhotographers() {
  // Recuperation les data du fichier JSON en utilisant "fetch".
  return (
    fetch("/data/photographers.json")
      .then((response) => response.json())
      //  .then(data => console.log(data))
      .catch((error) => console.log(error))
  );
}

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
  // Récupère les datas des photographes
  const { photographers } = await getPhotographers();
  displayData(photographers);
}

init();
