function photographerPageFactory(data) {
    // console.log(data)
    const {name, portrait, city, country, price, tagline} = data;
    const picture = `assets/photographers/${portrait}`;



    function getPhotographerPageDOM(){

        // déclaration des éléments du DOM
        // const article =  document.createElement("article");
        const div = document.createElement("div");
        const h2 = document.createElement("h2");
        const h3 = document.createElement("h3");
        const h4 = document.createElement("h4");
        // const img = document.createElement("img");

        // attribution des valeurs
        div.classList.add('photograph_card');
        // img.setAttribute("src", picture);
        h2.textContent = name;
        h3.textContent = `${city}, ${country} `;
        h4.textContent = tagline;

        // construction de l'article de la page photographe

        // article.appendChild(div);
        div.appendChild(h2);
        div.appendChild(h3);
        div.appendChild(h4);
        // div.appendChild(img);

        return (div);

    }

    function getPhotographerPageAvatarDOM() {
        const img = document.createElement("img");
        img.setAttribute("src", picture);
        img.classList.add("photograph_avatar")

        return img
    }

    return {name, picture, getPhotographerPageDOM, getPhotographerPageAvatarDOM}
}

function mediaPhotographerFactory(data) {
    console.log(data)
    // const {title, image, video, id} = data;
    const {image, video, photographerId} = data;
    // const photographerId = id;

    const picture = `assets/media/${photographerId}/${image}`;
    console.log(picture)
    const vid = `assets/media/${photographerId}/${video}`;
    
    function getMediaCardDOM() {
        const article = document.createElement("article");

        if (image) {
            const img = document.createElement("img");
            img.setAttribute("src", picture);
            article.appendChild(img)
        } else if (video) {
            const videoEl = document.createElement("video");
            videoEl.setAttribute("src", vid)
            article.appendChild(videoEl)
        }
        return article;
    }
    return { image, video, getMediaCardDOM}
}
