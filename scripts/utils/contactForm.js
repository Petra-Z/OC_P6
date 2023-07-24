const modal = document.getElementById("contact-modal");

// lancer la modale de contact
// eslint-disable-next-line no-unused-vars
function displayModal() {
	modal.style.display = "block";
    // eslint-disable-next-line no-undef
        if(modal.hasAttribute("aria-hidden")&& main.hasAttribute("aria-hidden")){
            modal.setAttribute("aria-hidden", "false");
            // eslint-disable-next-line no-undef
            main.setAttribute("aria-hidden", "true")
        }
        const prenom = document.getElementById("prenom");
        prenom.focus()
}

//fermer la modale de contact avec x
function closeModal() {
    modal.style.display = "none";
    // eslint-disable-next-line no-undef
        if(modal.hasAttribute("aria-hidden") && main.hasAttribute("aria-hidden"))
            modal.setAttribute("aria-hidden", "true");
            modal.setAttribute("aria-hidden","false");
}

// fermer la modale de contact avec la touche ESC
window.addEventListener("keyup", (e) => {
    if(modal.getAttribute("aria-hidden") === "false" && e.key === "Escape") {
        closeModal()
    }
});

// fermer la modale de contact quand on clique en dehore
window.onclick = function (event) {
    if (event.target === document.getElementById("contact-modal")) {
        closeModal();
    }
};

// validation formulaire de contact
modal.addEventListener('submit', (e) => {

    e.preventDefault();
        
    console.log(`Prénom: ${e.target.prenom.value}`)
    console.log(`Nom: ${e.target.nom.value}`)
    console.log(`Email: ${e.target.email.value}`)
    console.log(`Message: ${e.target.message.value}`)
    
    closeModal();
})