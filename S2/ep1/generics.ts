function premierElement<T>(tableau: T[]): T | undefined {
  return tableau[0];
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
