// T doit être un type qui possède une propriété "length"
function premierElement<T extends { length: number }>(tableau: T): any {
  if (tableau.length > 0) {
    // Si le tableau n'est pas vide, on retourne le premier élément
    // Ici, on suppose que T est un tableau ou un objet similaire
    return (tableau as any)[0];
  } else {
    console.error("Erreur : le tableau est vide !");
    return undefined;
  }
}

// --- Tests ---

const nombres = [10, 20, 30];
const premierNombre = premierElement(nombres);
console.log("Premier nombre :", premierNombre);

const vide: number[] = [];
const premierVide = premierElement(vide);
console.log("Premier élément (vide) :", premierVide);

const utilisateurs = [
  { id: 1, nom: "Alice" },
  { id: 2, nom: "Bob" },
];
const premierUtilisateur = premierElement(utilisateurs);
console.log("Premier utilisateur :", premierUtilisateur);
