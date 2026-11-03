//Referències als elements del formulari
const formulari = document.querySelector("#formulari-contacte");
const campNom = document.querySelector("#nom");
const campMail = document.querySelector("#mail");
const campTelefon = document.querySelector("#telefon");
const campAssumpte = document.querySelector("#assumpte");
const campMissatge = document.querySelector("#missatge");
const campAcceptacio = document.querySelector("#acceptacio");
const seccioFormulari = document.querySelector("#seccio-formulari");

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

//Validació del nom (mínim 3 caràcters esborrant espais)
function validaNom() {
    if (campNom.value.trim().length < 3) {
        mostraError(campNom, "El nom ha de tenir com a mínim 3 caràcters.");
        return false;
    }
    netejaError(campNom);
    return true;
}

//Validació del mail (@ i . amb posicionament)
function validaMail () {
    const valor = campMail.value.trim();
    if (valor.length === 0) {
        mostraError (campMail, "El correu és obligatori.");
        return false;
    }
    const posArrova = valor.indexOf("@");
    const posPunt = valor.lastIndexOf(".");
    if (posArrova < 1 || posPunt < posArrova + 2 || posPunt === valor.length - 1) {
        mostraError(campMail, "El correu no té un format vàlid.");
        return false;
    }
    netejaError(campMail);
    return true;
}

//Validació del telèfon (rang entre 100000000 i 999999999 (9 digits, format espanyol))
function validaTelefon () {
    const valor = campTelefon.value.trim().replaceAll(" ", "");
    if (valor.length === 0) {
        netejaError(campTelefon);
        return true;
    }
    const numero = Number(valor);
    if (isNaN(numero) || numero < 100000000 || numero > 999999999) {
        mostraError(campTelefon, "El telèfon ha de ser un número de 9 xifres.");
        return false;
    }
    netejaError(campTelefon);
    return true;
}

//Validació del assumpte (ha de ser una diferent a la default)
function validaAssumpte(){
    if (campAssumpte.value === ""){
        mostraError(campAssumpte, "Cal triar un assumpte.");
        return false;
    }
    netejaError (campAssumpte);
    return true;
}

//Validació del missatge (20 - 300 caràcters)
function validaMissatge(){
    const longitud = campMissatge.value.trim().length;
    if (longitud < 20 || longitud > 300) {
        mostraError(campMissatge, "El missatge ha de tenir entre 20 i 300 caràcters.");
        return false;
    }
    netejaError(campMissatge);
    return true;
}

//Crear comptador de caràcters sota del textarea
function creaComptador (){
    const p = document.createElement("p");
    p.id = "comptador-caracters";
    p.textContent = "0 / 300 caràcters";
    campMissatge.closest (".form-group").appendChild(p);
    return p;
}

const comptadorCaracters = creaComptador();

//Actualitzar comptador amb missatge actual. Vermell si sobrepassa el límit
function actualitzaComptador (){
    const longitud = campMissatge.value.length;
    comptadorCaracters.textContent = longitud + " / 300 caràcters";
    if (longitud > 300) {
        comptadorCaracters.classList.add("excedit");
    }
    else{
        comptadorCaracters.classList.remove("excedit");
    }
}

campMissatge.addEventListener("input", actualitzaComptador);

//Validació de la casella de política (ha d'estar marcada)
function validaAcceptacio(){
    if (!campAcceptacio.checked) {
        mostraError (campAcceptacio, "Has d'acceptar la política de privacitat.");
        return false;
    }
    netejaError(campAcceptacio);
    return true;
}

//Crea <p> amb etiqueta i valor corresponent
function creaFilaResum(etiqueta, valor) {
    const p = document.createElement ("p");
    const strong = document.createElement("strong");
    strong.textContent = etiqueta + ": ";
    p.appendChild(strong);
    p.appendChild(document.createTextNode(valor));
    return p;
}

//Crea targeta de resum i agraiment agafant els valors introduits
function mostraResum(){
    const resumAnterior = document.querySelector("#resum-confirmacio");
    if (resumAnterior){
        resumAnterior.remove();
    }

    const resum = document.createElement("article");
    resum.id = "resum-confirmacio";

    const agraiment = document.createElement("h3");
    agraiment.textContent = "Gràcies, " + campNom.value.trim() + "! Hem rebut el teu missatge.";
    resum.appendChild(agraiment);

    resum.appendChild(creaFilaResum("Nom", campNom.value.trim()));
    resum.appendChild(creaFilaResum("Correu", campMail.value.trim()));
    if (campTelefon.value.trim() !== "") {
        resum.appendChild(creaFilaResum("Telèfon", campTelefon.value.trim()));
    }
    resum.appendChild(creaFilaResum("Assumpte", campAssumpte.options[campAssumpte.selectedIndex].text));
    resum.appendChild(creaFilaResum("Missatge", campMissatge.value.trim()));

    seccioFormulari.appendChild(resum);
}

//No enviament i validació de camps
formulari.addEventListener("submit", event => {
    event.preventDefault();
    const nomCorrecte = validaNom();
    const mailCorrecte = validaMail();
    const telefonCorrecte = validaTelefon();
    const assumpteCorrecte = validaAssumpte();
    const missatgeCorrecte = validaMissatge();
    const acceptacioCorrecta = validaAcceptacio();

    const tot = nomCorrecte && mailCorrecte && telefonCorrecte && assumpteCorrecte && missatgeCorrecte && acceptacioCorrecta;
    if (tot) {
        mostraResum ();
        formulari.reset();
        actualitzaComptador();
    }
});