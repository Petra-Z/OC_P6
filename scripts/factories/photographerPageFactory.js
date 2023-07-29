// eslint-disable-next-line no-unused-vars
function photographerPageFactory(data) {
  console.log(data);
  const { name, portrait, city, country, tagline } = data;
  const picture = `assets/photographers/${portrait}`;

  function getPhotographerPageDOM() {
    // déclaration des éléments du DOM
    const div = document.createElement("div");
    const h2 = document.createElement("h2");
    const h3 = document.createElement("h3");
    const h4 = document.createElement("h4");

    // attribution des valeurs
    div.classList.add("photograph_card");
    h2.textContent = name;
    h3.textContent = `${city}, ${country} `;
    h4.textContent = tagline;

    // construction de l'article de la page photographe
    div.appendChild(h2);
    div.appendChild(h3);
    div.appendChild(h4);

    return div;
  }

  // création de l'avatar du photographe
  function getPhotographerPageAvatarDOM() {
    const img = document.createElement("img");
    img.setAttribute("src", picture);
    img.setAttribute("alt", `portrait of ${name}`)
    img.classList.add("photograph_avatar");

    return img;
  }

  // afficher dans le footer de la page le prix par jour du photographe
  const pricePerDay = document.querySelector(".pricePerDay");
  pricePerDay.setAttribute(
    "aria-label",
    `Prix par jour: ${photographer.price}`
  );
  pricePerDay.innerHTML = `${photographer.price}€/jour`;

  return {
    name,
    picture,
    getPhotographerPageDOM,
    getPhotographerPageAvatarDOM,
  };
}

let totalLikes = 0;

// eslint-disable-next-line no-unused-vars
function mediaPhotographerFactory(data) {
  // console.log(data)
  const { title, image, video, photographerId, likes, price, id } = data;

  console.log(data);

  const picture = `assets/media/${photographerId}/${image}`;
  // console.log(picture)
  const vid = `assets/media/${photographerId}/${video}`;

  function getMediaCardDOM() {
    // déclaration des éléments du DOM
    const article = document.createElement("article");
    const link = document.createElement("a");
    const text = document.createElement("div");
    const like = document.createElement("span");
    const heart = document.createElement("img");
    const h3 = document.createElement("h3");
    const h4 = document.createElement("h4");

    // attribution des valeurs
    article.setAttribute("tabindex", "0")

    link.setAttribute("title", title);
    link.setAttribute("aria-label", title);
    link.setAttribute("class", "itemLightboxLink");
    link.setAttribute("tabindex", "0")

    heart.setAttribute("src", "assets/icons/heart.svg");
    heart.setAttribute("alt", "heart");
    heart.setAttribute("aria-label", "like");
    heart.setAttribute("role", "button");
    heart.setAttribute("aria-pressed", false);
    heart.setAttribute("tabindex", "0")

    h4.setAttribute("aria-label", `aimé ${likes} fois`);
    h4.setAttribute("tabindex", "0")
    h3.setAttribute("tabindex", "0")
    h3.textContent = title;
    h4.textContent = likes;

    // création et configuration des articles pour les médias du photographe
    if (image) {
      const img = document.createElement("img");
      img.setAttribute("src", picture);
      img.setAttribute("alt", title);
      img.setAttribute("data-id", id);
      img.setAttribute("tabindex", "0")
      link.appendChild(img);
      link.setAttribute("href", "#");
    } else if (video) {
      const videoEl = document.createElement("video");
      videoEl.setAttribute("src", vid);
      videoEl.setAttribute("aria-label", title);
      videoEl.setAttribute("data-id", id);
      videoEl.setAttribute("controls", true);
      videoEl.setAttribute("type", "video/mp4");
      videoEl.setAttribute("tabindex", "0")
      link.appendChild(videoEl);
      link.setAttribute("href", "#");
    }

    article.appendChild(link);
    article.appendChild(text);
    article.appendChild(heart);
    text.appendChild(h3);
    text.appendChild(like);
    like.appendChild(h4);
    like.appendChild(heart);

    // fonction pour afficher et gestionner le nombre total de likes du photographe
    // affichage du nombre initial des likes
    totalLikes += likes;
    const footer = document.querySelector(".totalLikes");
    footer.innerHTML = `${totalLikes}`;

    // calcul du nombre total des likes si l'utilisateur like une media item
    heart.addEventListener("click", () => {
      const isPressed = heart.getAttribute("aria-pressed") === "true";
      const newLikes = isPressed ? totalLikes - 1 : totalLikes + 1;
      totalLikes = newLikes;
      heart.setAttribute("aria-pressed", !isPressed);
      heart.setAttribute("aria-label", isPressed ? "je n'aime plus" : "j'aime");
      h4.textContent = newLikes;
      h4.setAttribute("aria-label", `aimé ${newLikes} fois`);
      footer.innerHTML = `${newLikes}`;
    });

    return article;
  }
  return {
    title,
    image,
    video,
    photographerId,
    likes,
    totalLikes,
    id,
    price,
    getMediaCardDOM,
  };
}
