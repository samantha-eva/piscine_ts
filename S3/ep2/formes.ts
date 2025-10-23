class Rectangle {
    largeur: number;
    hauteur: number;


    constructor(largeur: number, hauteur: number){
        this.largeur = largeur;
        this.hauteur = hauteur;
    }

    calculerSurface(): number{
        return this.largeur * this.hauteur;
    }
}

class Cercle {
    rayon: number;

    constructor(rayon: number){
        this.rayon = rayon;

    }

    calculerSurface(): number{
        return Math.PI * this.rayon * this.rayon;
    }
}

function afficherSurface(forme: Rectangle | Cercle): void {
    if (forme instanceof Rectangle) {
        console.log(`Ceci est un rectangle de surface ${forme.calculerSurface().toFixed(2)}.`);
    } else if (forme instanceof Cercle) {
        console.log(`Ceci est un cercle de surface ${forme.calculerSurface().toFixed(2)}.`);
    } else {
        console.log("Forme inconnue.");
    }
}

// test
const monRectangle = new Rectangle(10, 5);
const monCercle = new Cercle(4);

afficherSurface(monRectangle); // Ceci est un rectangle de surface 50.00.
afficherSurface(monCercle);  