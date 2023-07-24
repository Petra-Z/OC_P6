// eslint-disable-next-line no-unused-vars
function photographerFactory(data) {
    // console.log(data)
    const { name, portrait, city, country, tagline, price, id } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {

        //declaration des élémente du DOM
        const article = document.createElement( 'article' );
        const link = document.createElement('a');
        const img = document.createElement( 'img' );
        const h2 = document.createElement( 'h2' );
        const h3 = document.createElement( 'h3' );
        const h4 = document.createElement ( 'h4');
        const p = document.createElement ('p');

        //attribution des valeurs
        link.setAttribute('href', `photographer.html?id=${id}`);
        img.setAttribute(`src`, picture);
        img.setAttribute(`alt`, `Photo de ${name}`);
        h2.textContent = name;
        h3.textContent = `${city}, ${country} `;
        h4.textContent = tagline;
        p.textContent = `${price}€/jour`;

        //construction du profil photographe
        article.appendChild(link);
        link.appendChild(img);
        link.appendChild(h2);
        link.appendChild(h3);
        link.appendChild(h4);
        link.appendChild(p);

        return (article);
    }

      return {name, portrait, city, country, tagline, price, id, getUserCardDOM }
}