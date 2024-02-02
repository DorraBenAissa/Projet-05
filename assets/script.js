

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
]; // Déclaration d'une structure de données (JSON)(le tableau “slides”) comme étant une constante ==> des textes + les noms des images

const bannerImg = document.querySelector('.banner-img'); // Pour les bannières
const arrowLeft = document.querySelector('.arrow_left'); // Pour les flèches
const arrowRight = document.querySelector('.arrow_right'); // Pour les flèches
const dotsContainer = document.querySelector('.dots'); // Pour les flèches

let currentIndex = 0;

// Afficher le premier slide au chargement de la page
updateCarousel(currentIndex);


//// Étape 2 : Ajouter des Event Listeners sur les flèches

// Mettre un event listener sur la flèche gauche pour le clic
arrowLeft.addEventListener('click', function () {
    currentIndex = currentIndex - 1 < 0 ? slides.length - 1 : currentIndex - 1;
    updateCarousel();
    updateDots();
});

// Mettre un event listener sur la flèche droite pour le clic
arrowRight.addEventListener('click', function () {
    currentIndex = currentIndex + 1 >= slides.length ? 0 : currentIndex + 1;
    updateCarousel();
    updateDots();
});

// Fonction pour mettre à jour les points indicateurs
function updateDots() {
    const dots = document.querySelectorAll('.dot'); // Sélection de tous les points (Les bullet points)

    if (document.querySelector('.dot_selected') !== null) {
        document.querySelector('.dot_selected').classList.remove('dot_selected');
    }
    dots[currentIndex].classList.add('dot_selected');
}

// Fonction pour mettre en place le défilement infini sur le carrousel
function updateCarousel() {
    // Mettre à jour l'image
    bannerImg.src = `assets/images/slideshow/${slides[currentIndex].image}`;
    bannerImg.alt = slides[currentIndex].tagLine;

    // Dans tous les cas, le texte change en accord avec l’image montrée.
    document.querySelector('p').innerHTML = slides[currentIndex].tagLine;
}



// Fonction pour générer les points indicateurs dynamiquement
function createDots() {
    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        dotsContainer.appendChild(dot);
    }
}

// Appeler la fonction pour créer les points indicateurs
createDots();


updateDots(currentIndex);