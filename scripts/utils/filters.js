function sortMedia(medias, triValue) {
    // console.log( medias);
    // console.log(triValue);
    switch (triValue.toString().toLowerCase()) {
        case "popularité": {
            const sortedByLikes = medias.sort((a, b) => b.likes - a.likes);
            return sortedByLikes;
        }
        case "date": {
            const sortedByDate = medias.sort((a, b) => new Date(b.date) - new Date(a.date));
            return sortedByDate;
        }
        case "titre": {
            const sortedByTitle = medias.sort((a, b) => a.title.localeCompare(b.title));
            return sortedByTitle;
        }
    }
}

// eslint-disable-next-line no-unused-vars
function selectData(medias) {
    // console.log(medias)
    const select = document.getElementById("select");
    select.addEventListener('change', (e) => {
        const sortedMedia = sortMedia(medias, e.target.value);
        // console.log(medias);
        // console.log(e.target.value);
        // console.log(sortedMedia)
        // eslint-disable-next-line no-undef
        displayMedias(sortedMedia);
        // eslint-disable-next-line no-undef
        lightboxAddEventListener(sortedMedia);
        // eslint-disable-next-line no-undef
        modalLightboxEvents(sortedMedia);
    })
}

