// Interface Adresse
interface Adresse {
  rue: string;
  ville: string;
}

// Interface Personne (avec propriétés avancées)
interface Personne {
  readonly id: number; // propriété en lecture seule
  nom: string;
  age: number;
  adresse?: Adresse; // propriété optionnelle et imbriquée
}

// --- Fonction d'affichage avancée ---
function afficherPersonneAvancee(personne: Personne): void {
  if (personne.adresse) {
    console.log(
      `Bonjour, je m'appelle ${personne.nom} (ID: ${personne.id}), j'ai ${personne.age} ans et j'habite au ${personne.adresse.rue}, ${personne.adresse.ville}.`
    );
  } else {
    console.log(
      `Bonjour, je m'appelle ${personne.nom} (ID: ${personne.id}) et j'ai ${personne.age} ans.`
    );
  }
}

// --- Tests ---

// Objet avec adresse
const personne2: Personne = {
  id: 1,
  nom: "Alice Dupont",
  age: 30,
  adresse: {
    rue: "12 rue des Fleurs",
    ville: "Paris",
  },
};

// Objet sans adresse
const personne3: Personne = {
  id: 2,
  nom: "Jean Martin",
  age: 45,
};

// Appels de la fonction
afficherPersonneAvancee(personne2);
afficherPersonneAvancee(personne3);
