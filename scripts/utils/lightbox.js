function lightboxAddEventListener() {
    let allItemsLightboxLink = document.querySelectorAll(".itemLightboxLink");

    console.log(allItemsLightboxLink)

    allItemsLightboxLink.forEach((itemLigthboxLink) => {
        itemLigthboxLink.addEventListener("click", (e) => {
            e.preventDefault();

            let type = "video";
            let title = e.target.getAttribute("aria-label");

            if (e.target.tagName === "IMG") {
                type = "picture";
                title = e.target.getAttribute("alt");
            }
    
            openLightbox(title, {
                type,
                src: e.target.getAttribute("src"),
                id: e.target.dataset.id,
            });
        });
    });
}


function openLightbox(title, media) {
    // console.log(title, media);
    const modal = document.getElementById("lightbox-modal");
    console.log(modal)
    const lightbox = modal.querySelector(".lightbox-item");
    if (lightbox) {
        lightbox.innerHTML = "";
        lightbox.remove();
    }
    modal.style.display = "block";

    const div = document.createElement("div");
    const p = document.createElement("p");
    p.textContent = title;
    div.setAttribute("class", "lightbox-item");
    div.setAttribute("role", "dialog");
    div.dataset.id = media.id;
    div.dataset.title = title;

    if (media.type === "picture") {
        const imgModal = document.createElement("img");
        imgModal.setAttribute("src", media.src);
        imgModal.setAttribute("class", "imgLightbox");
        imgModal.setAttribute("alt", title);
        div.appendChild(imgModal)
    } else if (media.type === "video") {
        const video = document.createElement("video");
        video.src = media.src;
        video.setAttribute("controls", true);
        video.setAttribute("aria-label", title);
        div.appendChild(video);
    }
    p.setAttribute("class", "title");
    modal.appendChild(div);
    div.appendChild(p)

    console.log(lightbox)
}

// let lightboxItemId = 0;

function modalLightboxEvents() {
    const prevButton = document.querySelectorAll(".lightbox-prev");
    const nextButton = document.querySelectorAll(".lightbox-next");
    console.log(nextButton)
    // const lightboxMedias = document.querySelectorAll(".itemLightboxLink");
    const lightboxItem = document.querySelectorAll(".lightbox-item")
    console.log(lightboxItem)

    const findCurrentIndex = (mediaId) => {
        console.log("find", mediaId, " in ", medias)
        return medias.findIndex((media) => media.id.toString() === mediaId)
    }

    nextButton.forEach((nextArrow) => {
        nextArrow.addEventListener("click", (e) => {
            e.preventDefault();
            const lightboxItem = document.querySelectorAll(".lightbox-item")
            const currentIndex = findCurrentIndex(lightboxItem.dataset.id);
            console.log(currentIndex);
            if(lightbox) {
                lightbox.innerHTML = "";
            }
            currentIndex++;
            if (currentIndex >= medias.length) {
                currentIndex = 0;
            }

            const nextImage = medias[currentIndex];
            lightboxItem.dataset.id = nextImage.id;
            lightboxItem.dataset.title = nextImage.title;
          
        })
    })
}
