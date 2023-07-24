/* eslint-disable no-undef */
// on ajoute des écouteurs d'(e)s de clic aux liens media pour ouvrir la lightbox
// eslint-disable-next-line no-unused-vars
function lightboxAddEventListener() {
    let allItemsLightboxLink = document.querySelectorAll(".itemLightboxLink");
    // console.log(allItemsLightboxLink)

    // on boucle sur chanque élément média
    allItemsLightboxLink.forEach((itemLigthboxLink) => {
        itemLigthboxLink.addEventListener("click", (e) => {
            e.preventDefault();

            // const type = e.target.tagName === "IMG" ? "picture" : "video";
            // const title = type === "picture" ? e.target.getAttribute("alt") : null
            
            let type = "video";
            let title = e.target.getAttribute("aria-label");

            if (e.target.tagName === "IMG") {
                type = "picture";
                title = e.target.getAttribute("alt")
            }

            openLightbox(title, {
                type,
                src: e.target.getAttribute("src"),
                id: e.target.dataset.id,
            });
        });
    });
}

// ouverture de la lightbox en fonction du type de média
function openLightbox(title, media) {
    // console.log(title, media);
    const modal = document.getElementById("lightbox-modal");
    // console.log(modal)

    //on vérifie si la lightbox est déjà ouverte
    const lightbox = modal.querySelector(".lightbox-item");
    if (lightbox) {
        lightbox.innerHTML = "";
        lightbox.remove();
    }
    modal.style.display = "block";

    //on déclare des élémente du DOM et attribution des valeurs
    const div = document.createElement("div");
    const p = document.createElement("p");
    p.textContent = title;
    div.setAttribute("class", "lightbox-item");
    div.setAttribute("role", "dialog");
    div.dataset.id = media.id;
    div.dataset.title = title;

    // création des nouveaux éléments en fonction du type de média
    if (media.type === "picture") {
        const imgModal = document.createElement("img");
        imgModal.setAttribute("src", media.src);
        // imgModal.setAttribute("class", "imgLightbox");
        imgModal.setAttribute("alt", title);
        div.appendChild(imgModal)
    } else if (media.type === "video") {
        const video = document.createElement("video");
        video.src = media.src;
        video.setAttribute("controls", true);
        video.setAttribute("aria-label", title);
        div.appendChild(video);
    }

    // construction de la lightbox
    // p.setAttribute("class", "title");
    modal.appendChild(div);
    div.appendChild(p);
}

// eslint-disable-next-line no-unused-vars
function modalLightboxEvents() {
    const prevButton = document.querySelectorAll(".lightbox-prev");
    const nextButton = document.querySelectorAll(".lightbox-next");
    const gallery = document.querySelectorAll(".itemLightboxLink")
    

    const findCurrentIndex = (itemId) => {
        console.log("find Index itemId ", itemId, " in ", medias);
        return medias.findIndex((media) => media.id.toString() === itemId);
      };
    
    // on boucle sur chaque nextArrow et on ajoute un écouteur d'événement
    nextButton.forEach((nextArrow) => {
        nextArrow.addEventListener("click", (e) => {
            e.preventDefault();
            let lightbox = document.querySelector(".lightbox-item");
            let currentIndex = findCurrentIndex(lightbox.dataset.id);
            console.log(currentIndex);
            if(lightbox) {
                lightbox.innerHTML = "";
            }
            currentIndex++;
            if (currentIndex >= medias.length) {
                currentIndex = 0;
            }

            const nextImage = medias[currentIndex];
            lightbox.dataset.id = nextImage.id;
            lightbox.dataset.title = nextImage.title;
            console.log("nextImage", nextImage)
            const nextImgSrc = nextImage.image
                ? `/assets/media/` + photographerById + "/" + nextImage.image
                : `/assets/media/` + photographerById + "/" + nextImage.video
            const isVideo = nextImgSrc.endsWith(".mp4");
            const title = nextImage.title;
            const p = document.createElement("p");
            p.textContent = title;
            p.setAttribute("class", "title");
            if (isVideo) {
                const video = document.createElement("video");
                video.src = nextImgSrc;
                video.setAttribute("controls", true);
                video.setAttribute("aria-label", title);
                lightbox.appendChild(video);
                lightbox.appendChild(p);
            } else {
                const img = document.createElement("img");
                img.src = ("src", nextImgSrc);
                img.setAttribute("class", "imgLightbox");
                img.setAttribute("alt", title);
                lightbox.appendChild(img);
                lightbox.appendChild(p)
            }
        })
    })

    // on boucle sur chaque prevArrow et on ajoute un écouteur d'événement
    prevButton.forEach((prevButton) => {
        prevButton.addEventListener("click", (e) => {
            e.preventDefault();
            let lightbox = document.querySelector(".lightbox-item");
            let currentIndex = findCurrentIndex(lightbox.dataset.id);

            if (lightbox) {
                lightbox.innerHTML = "";
            }
            currentIndex--;
            if (currentIndex < 0) {
                currentIndex = gallery.length - 1;
            }
            const prevImage = medias[currentIndex];
            lightbox.dataset.id = prevImage.id;
            lightbox.dataset.title = prevImage.title;
            console.log("prevImage", prevImage);
            const prevImgSrc = prevImage.image
                ? `/assets/media/` + photographerById + "/" + prevImage.image
                : `/assets/media/` + photographerById + "/" + prevImage.video
            const isVideo = prevImgSrc.endsWith(".mp4");
            let title = prevImage.title;
            const p = document.createElement("p");
            p.textContent = title;
            p.setAttribute("class", "title");

            if(isVideo) {
                const video = document.createElement("video");
                video.src = prevImgSrc;
                video.setAttribute("controles", true);
                video.setAttribute("aria-label", title);
                lightbox.appendChild(video);
                lightbox.appendChild(p);
            } else {
                const img = document.createElement("img");
                img.src = ("src", prevImgSrc);
                img.setAttribute("class", "imgLightbox");
                img.setAttribute("alt", title);
                lightbox.appendChild(img);
                lightbox.appendChild(p);
            }
        });
    });

    // naviguer la lightbox avec les touches du clavier
     window.addEventListener("keydown", (e) => {
                if (e.defaultPrevented) {
                    return;
                }
                switch (e.key) {
                    case "ArrowLeft":
                        prevButton[0].click();
                        break;
                    case "ArrowRight":
                        nextButton[0].click();
                        break;
                    default:
                        return;
                }
                e.preventDefault();
            })
        true;    
}

// fermer la lightbox quand on click sur le bouton x
// eslint-disable-next-line no-unused-vars
function closeLightbox() {
    const modal = document.getElementById("lightbox-modal");
    modal.style.display = "none";
}

// fermer la lightbox avec la touche ESC
window.addEventListener("keydown", (e) => {
    const modal = document.getElementById("lightbox-modal");
    if(e.key === "Escape") {
        modal.style.display = "none";
    }
})

/* eslint-enable no-undef */