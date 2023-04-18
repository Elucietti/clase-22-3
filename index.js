let arreglo=[33,34,45,53,52,34,54];

for(let index=0;index<arreglo.length;index++){
    let elemento=arreglo[index];
    console.log(elemento);
}

console.log("for each"); //una forma de recorrer el arreglo

arreglo.forEach(element => {
    console.log(element)
});

console.log("arreglo filtro pares");

let pares=arreglo.filter(
    par=>par/2==0
)
console.log(pares);

console.log("arreglo map");


let multiplo=arreglo.map(numero=>numero*2);
console.log(multiplo);
