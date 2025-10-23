interface Employe {
  nom: string;
  poste: string;
}

interface Client {
  nom: string;
  entreprise: string;
}

// --- Type union ---
type PersonnePro = Employe | Client;


function afficherInfoProfessionnelle(personne: PersonnePro): void {
  // On vérifie si la propriété "poste" existe → donc c'est un Employe
  if ("poste" in personne) {
    console.log(`Employé: ${personne.nom} travaille comme ${personne.poste}.`);
  }
  // Sinon, c’est un Client
  else if ("entreprise" in personne) {
    console.log(`Client: ${personne.nom} est associé à l'entreprise ${personne.entreprise}.`);
  }
}

// --- Tests ---

const employe1: Employe = {
  nom: "Sophie Durand",
  poste: "Développeuse Web",
};

const client1: Client = {
  nom: "Marc Petit",
  entreprise: "TechCorp",
};

// Appels de la fonction
afficherInfoProfessionnelle(employe1);
afficherInfoProfessionnelle(client1);
