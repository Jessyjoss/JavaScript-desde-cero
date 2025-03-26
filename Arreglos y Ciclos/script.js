// Arreglo de frutas
const frutas = ['manzana', 'plátano', 'naranja', 'manzana', 'pera', 'plátano', 'naranja', 'manzana', 'kiwi', 'pera'];

// Objeto para almacenar la cantidad de cada tipo de fruta usando FOR
const conteoFrutasFor = {};

for (let i = 0; i < frutas.length; i++) {
    let fruta = frutas[i];
    if (conteoFrutasFor[fruta]) {
        conteoFrutasFor[fruta]++;
    } else {
        conteoFrutasFor[fruta] = 1;
    }
}

console.log('🍎 Conteo de frutas con FOR:', conteoFrutasFor);

// Objeto para almacenar la cantidad de cada tipo de fruta usando WHILE
const conteoFrutasWhile = {};

let i = 0;
while (i < frutas.length) {
    let fruta = frutas[i];
    if (conteoFrutasWhile[fruta]) {
        conteoFrutasWhile[fruta]++;
    } else {
        conteoFrutasWhile[fruta] = 1;
    }
    i++;
}

console.log('🍌 Conteo de frutas con WHILE:', conteoFrutasWhile);
