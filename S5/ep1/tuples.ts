function creerScore(): [string, number] {
  return ["Joueur1", 100];
}

function afficherScore(score: [string, number]): void {
  const [nom, points] = score;
  console.log(`Le joueur ${nom} a un score de ${points}`);
}

const score_joueur = creerScore();
afficherScore(score_joueur);
