
//// Étape 1 : Ajouter les constantes et les variables: 

const slides = [
    {
        "image": "slide1.jpg",
        "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image": "slide2.jpg",
        "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image": "slide3.jpg",
        "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image": "slide4.png",
        "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
    }
]// Déclaration d'une structure de données (JSON) comme étant une constantes ==> des textes + les noms des images 


const bannerImg = document.querySelector('.banner-img'); // Pour les bannieres 
const arrowLeft = document.querySelector('.arrow_left'); // Pour les fléches
const arrowRight = document.querySelector('.arrow_right'); // Pour les fléches
const dots = document.querySelectorAll('.dot'); // Sélection tous les points (Les bullet points)




let currentIndex = 0;

// Afficher le premier slide au chargement de la page
updateCarousel(currentIndex, 'démarrage');
updateDots(currentIndex); // Mettez à jour les bullet points pour le premier slide


//// Étape 2 : Ajouter des Event Listeners sur les flèches 

// Mettre un event listener sur la flèche gauche pour le clic 
arrowLeft.addEventListener('click', function () {
    currentIndex = (currentIndex - 1);
    updateCarousel(currentIndex, 'left');
    updateDots(currentIndex); // Mettre à jour les bullet points
});

// Mettre un event listener sur la flèche droite pour le clic 
arrowRight.addEventListener('click', function () {
    currentIndex = (currentIndex + 1);
    updateCarousel(currentIndex, 'right');
    updateDots(currentIndex); // Mettre à jour Les bullet points
}); 
