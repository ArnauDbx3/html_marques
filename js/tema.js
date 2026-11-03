//Referència al botó de canvi de tema
const botoTema = document.querySelector("#boto-tema");

//Alterna el tema (css boto)
function canviaTema(){
    document.body.classList.toggle("mode-fosc");
    if(document.body.classList.contains("mode-fosc")){
        botoTema.textContent = "Mode clar";
    }
    else{
        botoTema.textContent = "Mode fosc";
    }
}

botoTema.addEventListener("click", canviaTema);