let arreglo=[33,34,45,53,52,34,54];

for(let index=0;index<arreglo.length;index++){
    let elemento=arreglo[index];
    console.log(elemento);
}

console.log("for each"); //una forma de recorrer el arreglo

arreglo.forEach(element => {
    console.log(element)
});

