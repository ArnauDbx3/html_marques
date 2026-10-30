// Dades del catàleg: objecte per joc i preu sense aplicar IVA.
const jocs = [
    {
        titol: "Super Mario World",
        genere: ["Acció", "Plataformes", "2D"],
        plataforma: "Super Nintendo",
        preu: 33.050,
        valoracio: 4.6,
        estoc: 12,
        imatge: "./img/SMWorld.jpg",
        descripcio: "Clàssic plataformes en 2D on Mario i Luigi exploren un món ple de monstres, secrets i aventures per salvar la princesa Peach."
    },
    {
        titol: "The Legend of Zelda: Ocarina of Time",
        genere: ["Aventura", "Acció", "Trencaclosques", "Fantasia", "3D"],
        plataforma: "Nintendo 64",
        preu: 41.314,
        valoracio: 5,
        estoc: 3,
        imatge: "./img/OOT.jpg",
        descripcio: "Una aventura revolucionària que va definir el gènere d'acció-aventura en 3D, on el seu protagonista viatja a través del temps per salvar el regne d'Hyrule i derrotar el malvat Ganondorf.",
        fitxa: "fitxa.html"
    },
    {
        titol:"Final Fantasy VII",
        genere:["Rol", "Aventura", "Fantasia", "JRPG", "3D"],
        plataforma: "PlayStation",
        preu: 41.314,
        valoracio: 4.9,
        estoc: 8,
        imatge: "./img/FFVII.jpg",
        descripcio: "Un JRPG històric protagonitzat per Cloud Strife i un grup ecoterrorista que lluiten per salvar el món d'una corporació malvada i un enemic antic."
    },
    {
        titol: "Lylat Wars",
        genere: ["Acció", "Ciència ficció", "Shoot'em up"],
        plataforma: "Nintendo 64",
        preu: 24.785,
        valoracio: 4.4,
        estoc: 0,
        imatge: "./img/Starfox.jpg",
        descripcio: "Un shooter espacial sobre raïls on en Fox McCloud i el seu equip piloten les naus per defensar el sistema Lylat de les forces d'Andross."
    },
    {
        titol: "The Legend of Zelda: Majora's Mask",
        genere: ["Aventura", "Acció", "Trencaclosques", "Fantasia", "3D"],
        plataforma: "Nintendo 64",
        preu: 41.314,
        valoracio: 4.8,
        estoc: 4,
        imatge: "./img/Majoras.jpg",
        descripcio: "Una continuació fosca i melancòlica d'Ocarina of Time on en Link disposa de 3 dies per evitar que la Lluna caigui sobre el regne de Termina, utilitzant màscares màgiques per transformar-se i resoldre trencaclosques."
    },
    {
        titol: "Super Mario 64",
        genere: ["Acció", "Plataformes", "3D", "Aventura"],
        plataforma: "Nintendo 64",
        preu: 41.314,
        valoracio: 5,
        estoc: 5,
        imatge: "./img/SM64.jpg",
        descripcio: "El joc que va establir les bases dels plataformes en 3D, destacant per la seva kinestètica i un disseny de nivells totalment innovador."
    },
    {
        titol: "Donkey Kong Country",
        genere: ["Acció", "Plataformes", "2D"],
        plataforma: "Super Nintendo, Game Boy Advance, Game Boy Color",
        preu: 33.050,
        valoracio: 4.7,
        estoc: 15,
        imatge: "./img/DKCountry.jpg",
        descripcio: "Plataformes 2D aclamat pels seus revolucionaris gràfics pre-renderitzats i una banda sonora memorable, on en Donkey Kong i en Diddy Kong lluiten per recuperar la seva reserva de plàtans."
    },
    {
        titol: "Castlevania: Symphony of the Night",
        genere: ["Acció", "Plataformes", "Rol", "Metroidvania"],
        plataforma: "PlayStation, Sega Saturn",
        preu: 41.314,
        valoracio: 4.9,
        estoc: 2,
        imatge: "./img/Castlevania.jpg",
        descripcio: "El joc que va definir i perfeccionar el gènere 'Metroidvania', amb un món interconnectat, exploració profunda i una combinació de plataformes i acció amb elements de rol."
    }
];