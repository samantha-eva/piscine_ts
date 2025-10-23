abstract class Forme{
    abstract calculerSurface(): number;

}

class Rectangle extends Forme {
    largeur : number;
    hauteur: number;

    constructor(largeur: number, hauteur: number){
        super();
        this.largeur = largeur;
        this.hauteur = hauteur;
    }

   

    calculerSurface(): number {
        return this.largeur * this.hauteur;
    }
}

class Cercle extends Forme{
     rayon : number;

    constructor(rayon: number){
        super();
        this.rayon = rayon;

    }


    calculerSurface(): number {
        return Math.PI * this.rayon * this.rayon;
    }
}

const monRectangle = new Rectangle(5, 10);
const monCercle = new Cercle(3);

console.log(`Surface du rectangle : ${monRectangle.calculerSurface()}`); 
console.log(`Surface du cercle : ${monCercle.calculerSurface().toFixed(2)}`);