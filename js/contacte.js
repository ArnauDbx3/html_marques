//Referències als elements del formulari
const formulari = document.querySelector("#formulari-contacte");
const campNom = document.querySelector("#nom");

//Treu marca i missatge d'error d'un camp si ja tenia
function netejaError(camp) {
    camp.classList.remove("error");
    const grup = camp.closest(".form-group");
    const error = grup.querySelector(".missatge-error");
    if (error) {
        error.remove();
    }
}

//Marcar camp com incorrecte i mostrar missatge a sota sense repetir
function mostraError(camp, missatge) {
    netejaError(camp);
    camp.classList.add("error");
    const p = document.createElement("p");
    p.classList.add("missatge-error");
    p.textContent = missatge;
    camp.closest(".form-group").appendChild(p);
}

function validaNom() {
    if (campNom.value.trim().length < 3) {
        mostraError(campNom, "El nom ha de tenir com a mínim 3 caràcters");
        return false;
    }
    netejaError(campNom);
    return true;
}

//No enviament i validació de camps
formulari.addEventListener("submit", event => {
    event.preventDefault();
    const nomCorrecte = validaNom();
    console.log("Nom correcte:", nomCorrecte);
});