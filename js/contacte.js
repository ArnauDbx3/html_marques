//Referències als elements del formulari
const formulari = document.querySelector("#formulari-contacte");
const campNom = document.querySelector("#nom");
const campMail = document.querySelector("#mail");
const valor = campMail.value.trim();
const posArrova = valor.indexOf("@");
const posPunt = valor.lastIndexOf(".");
const campTelefon = document.querySelector("#telefon");
const campAssumpte = document.querySelector("#assumpte");
const campMissatge = document.querySelector("missatge");


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

//Validació del nom
function validaNom() {
    if (campNom.value.trim().length < 3) {
        mostraError(campNom, "El nom ha de tenir com a mínim 3 caràcters");
        return false;
    }
    netejaError(campNom);
    return true;
}

//Validació del mail
function validaMail () {
    const valor = campMail.value.trim();
}

function validaTelefon () {
    if (campTelefon.value.trim().length < 9) {
        mostraError(campTelefon, "El telèfon ha de tenir com a mínim 9 dígits");
        return false;
    }
    netejaError(campTelefon);
    return true;
}

function validaMissatge(){
    const longitud = campMissatge.value.trim().length;
    if (longitud < 20 || longitud > 300) {
        mostraError(campMissatge, "El missatge ha de tenir entre 20 i 300 caràcters");
        return false;
    }
    netejaError(campMissatge);
    return true;
}

//No enviament i validació de camps
formulari.addEventListener("submit", event => {
    event.preventDefault();
    const nomCorrecte = validaNom();
    console.log("Nom", nomCorrecte);
    const mailCorrecte = validaMail();
    console.log("Mail", mailCorrecte)
    const telefonCorrecte = validaTelefon();
    console.log("Telèfon correcte:", telefonCorrecte);
    
    
    
    const missatgeCorrecte = validaMissatge();
    console.log("Missatge correcte:", missatgeCorrecte); 
});