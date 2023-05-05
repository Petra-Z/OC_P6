function photographerFactory(data) {
    const { name, portrait, city, country, tagline, price, id } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute(`src`, picture)
        img.setAttribute(`alt`, `Photo de ${name}`)
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        const h3 = document.createElement( 'h3' );
        h3.textContent = `${city}, ${country} `;
        const h4 = document.createElement ( 'h4');
        h4.textContent = tagline;
        const p = document.createElement ('p');
        p.textContent = `${price}€/jour`;

        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(h3);
        article.appendChild(h4);
        article.appendChild(p);

        return (article);
    }
    return { name, picture, city, country, tagline, price, getUserCardDOM }
}