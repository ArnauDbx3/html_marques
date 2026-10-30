//Percentatge d'IVA aplicat als preus del catàleg
const TIPUS_IVA = 21;

//Funció per calcular preu final amb IVA
function calculaPreuAmbIva(preu){
    return preu + preu * TIPUS_IVA / 100;
}

//Funció per crear i retornar els articles dels jocs amb la seva info
function creaTargeta(joc){
    const targeta = document.createElement("article");
    targeta.classList.add("joc");
    if (joc.estoc < 5) {
        targeta.classList.add("estoc-baix");
    }

    //Titol
    const titol = document.createElement("h3");
    titol.textContent = joc.titol;
    targeta.appendChild(titol);

    //Gèneres
    targeta.appendChild(creaEtiqueta("Gèneres"));
    const llista = document.createElement("ul");
    llista.classList.add("genere-llista");
    joc.genere.forEach(nomGenere => {
        const li = document.createElement("li");
        li.textContent = nomGenere;
        llista.appendChild(li);
    });
    targeta.appendChild(llista);

    //Plataforma
    targeta.appendChild(creaEtiqueta("Plataforma"));
    const plataforma = document.createElement("p");
    plataforma.classList.add("plataforma");
    plataforma.textContent = joc.plataforma;
    targeta.appendChild(plataforma);

    //Preu (amb IVA i dos decimals). Condicional per si no hi ha estoc
    targeta.appendChild(creaEtiqueta("Preu"));
    const preu = document.createElement("p");
    preu.classList.add("preu");
    if (joc.estoc === 0){
        preu.textContent = "Esgotat";
    } 
    else {
        preu.textContent = calculaPreuAmbIva(joc.preu).toFixed(2) + "€";
    }
    targeta.appendChild(preu);

    //Valoració
    targeta.appendChild(creaEtiqueta("Valoració"));
    const valoracio = document.createElement("p");
    valoracio.classList.add("valoracio");
    valoracio.textContent = joc.valoracio + "/5";
    targeta.appendChild(valoracio);

    //Descripció
    targeta.appendChild(creaEtiqueta("Descripció"));
    const descripcio = document.createElement("p");
    descripcio.textContent = joc.descripcio;
    targeta.appendChild(descripcio);   
    
    //Imatge
    const imatge = document.createElement("img");
    imatge.src = joc.imatge;
    imatge.alt = "Imatge de " + joc.titol;
    targeta.appendChild(imatge);

    //Footer amb enllaç a fitxa si en té
    if (joc.fitxa){
        const peu = document.createElement("footer");
        const enllac = document.createElement("a");
        enllac.href = joc.fitxa;
        enllac.textContent = "Veure més";
        peu.appendChild(enllac);
        targeta.appendChild(peu);
    }

    return targeta;
}

//Funció per crear <p> amb etiqueta negreta per encapçalar dades
function creaEtiqueta(text){
    const p = document.createElement("p");
    const strong = document.createElement("strong");
    strong.textContent = text;
    p.appendChild(strong);
    return p;
}

//Referències als elements de la pàgina
const contenidor = document.querySelector("#cataleg");
const campCerca = document.querySelector("#cerca-titol");
const selectPlataforma = document.querySelector("#filtre-plataforma");
const comptador = document.querySelector("#comptador-resultats");
const missatgeBuit = document.querySelector("#missatge-buit");

//Funció per retornar els jocs amb titol/plataforma acord a la cerca
function filtraJocs (text, plataforma){
    const textMinuscules = text.trim().toLowerCase();
    return jocs.filter(joc => {
        const coincideixTitol = joc.titol.toLowerCase().includes(textMinuscules);
        const coincideixPlataforma = joc.plataforma.includes(plataforma);
        return coincideixTitol && coincideixPlataforma;
    });
}

//Funció per actualitzar jocs mostrats al catàleg en vers a la cerca i comptador/missatge
function actCataleg(llista){
    contenidor.replaceChildren();
    llista.forEach(joc => {
        contenidor.appendChild(creaTargeta(joc));
    });
    comptador.textContent = "Mostrant " + llista.length + " de " + jocs.length + " jocs";
    if (llista.length === 0){
        missatgeBuit.classList.remove("ocult");
    }
    else{
        missatgeBuit.classList.add("ocult");
    }
}

//Funció per aplicar valors actuals del buscador i actualitzar catàleg
function actualitzacioCataleg(){
    actCataleg(filtraJocs(campCerca.value, selectPlataforma.value));
}

campCerca.addEventListener("input", actualitzacioCataleg);
selectPlataforma.addEventListener("change", actualitzacioCataleg);

actualitzacioCataleg();
