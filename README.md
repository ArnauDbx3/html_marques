# RA 3 - Gamecamps Fase 2
- **Dades i targetes**<br>
Videojocs esborrats d'index.html i passats a `cataleg.js` com a constants, ja que les dades no es modificaràn (només s'afegiran nous jocs).
L'IVA s'aplica directament sobre el preu i es mostra el total final.
<br> **Funcions** (index.js): calculaPreuAmbIva, creaTargeta, creaEtiqueta <br>

- **Cerca i filtre**<br>
A `index.js` també es troba el cercador i els filtres per cercar videojocs. Als jocs amb baix estoc se'ls aplica una distinció amb la vora de color i els que tenen
estoc = 0 canvien el preu per "Esgotat". <br> **Funcions** (index.js): filtraJocs, actCataleg, actualitzacioCataleg

- **Formulari**<br>
A `contacte.js` validem cadascun dels camps creats al formulari de contacte.html cadascun amb els seus paràmetres marcats per l'activitat.
També creem una targeta resum amb les dades quan el formulari s'envia exitosament.  <br> **Funcions** (contacte.js): validaNom, validaMail,
 validaTelefon, validaAssumpte, validaMissatge, validaAcceptacio, actualitzaComptador, mostraResum

- **Mode fosc**<br>
Per `tema.js` s'ha creat un nou conjunt de regles per fer el canvi al pulsar un nou botó que s'ha afegit al nav del header de la web.
 Al clicar-hi, es canvia a colors més foscos. <br> **Funcions**: canviaTema

- **const / let**<br>
Per l'IVA he fet servir una constant, ja que el valor no canviarà mai. Si canvies l'IVA només caldria actualitzar el valor de la constant
per aplicar el canvi a tota la resta de codi implicat.

- **Callback**<br>
actualitzacioCataleg és el callback d'addEventListener. El navegador crida quan l'usuari canvia el select i/o escriu al cercador i repinta
 el catàleg de nou per coincidir amb els paràmetres dels jocs filtrats.
