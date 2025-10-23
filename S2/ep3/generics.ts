//  Fonction générique utilisant keyof ---
// K est un type qui doit correspondre à une clé de T
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

// Définition d'une interface
interface Voiture {
  marque: string;
  modele: string;
  annee: number;
}

// Création d'un objet conforme à l'interface
const maVoiture: Voiture = {
  marque: "Toyota",
  modele: "Corolla",
  annee: 2022,
};

//Tests avec getProperty
const marqueVoiture = getProperty(maVoiture, "marque");
console.log("Marque :", marqueVoiture);

const anneeVoiture = getProperty(maVoiture, "annee");
console.log("Année :", anneeVoiture);
