enum Direction {
  Nord,
  Sud,
  Est,
  Ouest,
}

function vecteurDirection(direction: Direction): [number, number] {

    switch(direction){

        case Direction.Nord:
            return[0,1];
        case Direction.Sud:
             return[0,-1];
        case Direction.Est:
             return[1,0];
        case Direction.Ouest:
             return[-1,0];
    }
}

function deplacer(
  point: [number, number],
  direction: Direction
): [number, number] {
  const [dx, dy] = vecteurDirection(direction);
  return [point[0] + dx, point[1] + dy];
}

let point: [number, number] = [5,5];

point = deplacer(point, Direction.Nord);
console.log("Après déplacement vers le Nord :", point);
point = deplacer(point, Direction.Sud);
console.log("Après déplacement vers le Sud :", point);
point = deplacer(point, Direction.Est);
console.log("Après déplacement vers l'Est :", point);
point = deplacer(point,Direction.Ouest);
console.log("Après déplacement vers l'Ouest :", point);
