function photographerPageFactory(data) {
    console.log(data)
    const {name, portrait, city, country, price, tagline} = data;
    const picture = `assets/photographers/${portrait}`;



    function getPhotographerPageDOM(){

        // déclaration des éléments du DOM
        const article =  document.createElement("article");
        const div = document.createElement("div");
        const img = document.createElement("img");
        const h2 = document.createElement("h2");
        const h3 = document.createElement("h3");
        const h4 = document.createElement("h4");

        // attribution des valeurs
        img.setAttribute("src", picture);
        h2.textContent = name;
        h3.textContent = `${city}, ${country} `;
        h4.textContent = tagline;

        // construction de l'article de la page photographe

        article.appendChild(div);
        article.appendChild(img);
        div.appendChild(h2);
        div.appendChild(h3);
        div.appendChild(h4);

        return (article);

    }

    return {name, picture, city, country, tagline, price, getPhotographerPageDOM}
}
