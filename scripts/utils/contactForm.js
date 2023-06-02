
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

function afficherErreurs() {
    const prenomInput = document.getElementById('prenom');
    // const nomInput = document.getElementById('nom');
    // const emailInput = document.getElementById('email');
    const prenomError = document.getElementById('prenom-error');
    // const nomError = document.getElementById('nom-error');
    // const emailError = document.getElementById('email-error');

    prenomInput.addEventListener('input', function() {
        if (prenomInput === "") {
            prenomError.style.display = 'block';
        } else {
            prenomError.style.display = 'none';
        }
    });
}
afficherErreurs()


