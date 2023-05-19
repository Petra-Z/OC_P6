
const modal = document.getElementById("contact_modal");

// launch modal
function displayModal() {
    // const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
        if(modal.hasAttribute("aria-hidden")&& main.hasAttribute("aria-hidden")){
            modal.setAttribute("aria-hidden", "false");
            main.setAttribute("aria-hidden", "true")
        }
        const prenom = document.getElementById("prenom");
        prenom.focus()
}

//closing modal 
function closeModal() {
    // const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
        if(modal.hasAttribute("aria-hidden") && main.hasAttribute("aria-hidden"))
            modal.setAttribute("aria-hidden", "true");
            modal.setAttribute("aria-hidden","false");
}

// closing modal with esc 
window.addEventListener("keyup", (e) => {
    if(modal.getAttribute("aria-hidden") === "false" && e.key === "Escape") {
        closeModal()
    }
});