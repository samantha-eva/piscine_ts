interface IAnimal{
    nom: string;
    seDeplacer(): void;
    
}

class Animal implements IAnimal {
    nom: string;

    constructor(nom: string ){
        this.nom = nom;

    }
    seDeplacer(): void {
        console.log(` L'animal ${this.nom} se deplace`);
    }
}

class Chien extends Animal {
    seDeplacer(): void {
        console.log(`le chien ${this.nom} court`)
    }
}

class Chat extends Animal {
    seDeplacer(): void {
        console.log(`le chat ${this.nom} saute`)
    }
}

function faireSeDeplacer(animaux: IAnimal[]): void{

 animaux.forEach(Animal => Animal.seDeplacer());
}


//test

const animaux: IAnimal[] = [
  new Chien("Rex"),
  new Chat("Miaou"),
  new Chien("Buddy"),
  new Chat("Luna")
];

faireSeDeplacer(animaux);