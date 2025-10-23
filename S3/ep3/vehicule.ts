interface Vehicule {
  marque: string;
  annee: number;
}

function isVehicule(obj: any): obj is Vehicule {
    return(
        typeof obj === "object" && obj !== null 
            && typeof obj.marque === "string" 
            && typeof obj.annee === "number" 
    );


}

function afficherVehicule(obj: any ):void {

    if(isVehicule(obj)){
         console.log(`Le véhicule ${obj.marque} de l'année ${obj.annee} est valide.`);
    } else {
        console.log("Objet invalide pour un véhicule.");
    }
}

///TEST

const vehiculeValide = { marque: "Toyota", annee: 2021 };
const vehiculeInvalide = { marque: "Tesla", annee: "2023" }; // année incorrecte (string au lieu de number)
const objetInconnu = { nom: "Ordinateur", prix: 1200 };

afficherVehicule(vehiculeValide);
afficherVehicule(vehiculeInvalide);
afficherVehicule(objetInconnu);