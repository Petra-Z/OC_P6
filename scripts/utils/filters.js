function sortMediaByLikes() {
    // totalLikes = 0;
    medias.sort((a, b) => b.likes - a.likes);
    const photographerGallery = document.querySelector(".gallery");
    photographerGallery.innerHTML = "";
    displayMedias(medias);
    document.querySelector(".fitlerPopular").setAttribute("aria-label", "true");
    document.querySelector("filterDate").setAttribute("aria-label", "false");
    document.querySelector(".filterTitle").setAttribute("aria-label", "false")
}

function sortMediaByDate() {
    // totalLikes = 0;
    medias.sort((a, b) => new Date(b.date) - new(a.date));
    const photographerGallery = document.querySelector(".gallery");
    photographerGallery.innerHTML="";
    displayMedias(medias);
    document.querySelector(".fitlerPopular").setAttribute("aria-label", "false");
    document.querySelector("filterDate").setAttribute("aria-label", "true");
    document.querySelector(".filterTitle").setAttribute("aria-label", "false")
}

function sortMediaByTitle() {
    // totalLikes = 0,
    medias.sort((a,b) => a.title.localeCompare(b.title));
    const photographerGallery = document.querySelector(".gallery");
    photographerGallery.innerHtml = "";
    displayMedias(medias);
    document.querySelector(".fitlerPopular").setAttribute("aria-label", "false");
    document.querySelector("filterDate").setAttribute("aria-label", "false");
    document.querySelector(".filterTitle").setAttribute("aria-label", "true")
}