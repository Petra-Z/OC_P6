function photographerPageFactory(data) {
    // console.log(data)
    const {name, portrait, city, country, tagline} = data;
    const picture = `assets/photographers/${portrait}`;



    function getPhotographerPageDOM(){

        // déclaration des éléments du DOM
        const div = document.createElement("div");
        const h2 = document.createElement("h2");
        const h3 = document.createElement("h3");
        const h4 = document.createElement("h4");

        // attribution des valeurs
        div.classList.add('photograph_card');
        h2.textContent = name;
        h3.textContent = `${city}, ${country} `;
        h4.textContent = tagline;

        // construction de l'article de la page photographe
        div.appendChild(h2);
        div.appendChild(h3);
        div.appendChild(h4);

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

let totalLikes = 0;

function mediaPhotographerFactory(data) {
    // console.log(data)
    const {title, image, video, photographerId, likes} = data;

    const picture = `assets/media/${photographerId}/${image}`;
    // console.log(picture)
    const vid = `assets/media/${photographerId}/${video}`;
    
    function getMediaCardDOM() {
        const article = document.createElement("article");
        const link = document.createElement("a");
        const text = document.createElement("div");
        const like = document.createElement("span");
        const heart = document.createElement("img");

        text.setAttribute("class", "titleMedia");
        like.setAttribute("class", "like");
        heart.setAttribute("class", "heart");
        heart.setAttribute("src", "assets/icons/heart.svg");
        heart.setAttribute("alt", "heart");
        heart.setAttribute("aria-describedby", "likes");
        heart.setAttribute("aria-label", "je n'aime pas");
        heart.setAttribute("aria-pressed", false)

        if (image) {
            const img = document.createElement("img");
            img.setAttribute("src", picture);
            img.setAttribute("alt", title);
            img.setAttribute("data-id", photographerId)
            article.appendChild(img)
            link.setAttribute("href", "#")
        } else if (video) {
            const videoEl = document.createElement("video");
            videoEl.setAttribute("src", vid)
            videoEl.setAttribute("aria-label", title);
            videoEl.setAttribute("data-id", photographerId)
            videoEl.setAttribute("controls", true)
            videoEl.setAttribute("type", "video/mp4")
            article.appendChild(videoEl);
            link.setAttribute("href", "#");

        }

        link.setAttribute("title", title);
        link.setAttribute("aria-label", title);
        link.setAttribute("class", "mediaDisplayLink");

        const h3 = document.createElement("h3");
        const h4 = document.createElement("h4");
        h3.setAttribute("class", "mediaDisplayInfosTitle");
        h4.setAttribute("class", "mediaDispayLike");
        h4.setAttribute("aria-label", `aimé ${likes} fois`);
        h3.textContent = title;
        h4.textContent = likes;

        article.appendChild(link);
        article.appendChild(text);
        article.appendChild(heart);
        text.appendChild(h3);
        text.appendChild(like);
        like.appendChild(h4);
        like.appendChild(heart);

        totalLikes += likes;
        const footer = document.querySelector(".totalLike");
        footer.innerHTML = `${totalLikes}`;

        heart.addEventListener("click", () => {
            const pressed = heart.getAttribute("aria-pressed") === "true" ? "false" : "true";
            heart.setAttribute("aria-pressed", pressed);

            if (pressed === "true") {
                h4.textContent = parseInt(h4.textContent) + 1;
                totalLikes += 1;
                heart.setAttribute("aria-label", "j'aime");
                console.log("finalLikesPlus", totalLikes)
            } else {
                h4.textContent = parseInt(h4.textContent) - 1;
                totalLikes -= 1;
                heart.setAttribute ("aria-label", "je n'aime plus");
                console.log("finalLikesMinus")
            }
            h4.setAttribute("aria-label", `aimé ${h4.textContent} fois`);
            footer.innerHTML = `${totalLikes}`
        })
        return article;
    }
    return { title, image, video, photographerId, likes, totalLikes, getMediaCardDOM}
}
