/*
*Arreglos
*Estructura de datos para almacenar información
*
*/
let nombres = new Array ("Ana" , "Brandon" , "Paulyna" , "Luis" , "Erik", "Paola","JC" );
//                        0         1          2          3    

/* let nombres = new Array ();
nombres[0] = "Ana";
nombres[1] = "Brandon";
nombres[2] = "Paulyna";
nombres[3] = "Luis"; */

console.log(nombres);

console.log(nombres.includes("Luis")); // validar si existe con true o false

console.log(nombres.indexOf("Luis")); // Existe 3
console.log(nombres.indexOf("Adri")); //  -1 no existe

    
    


console.log(nombres.length);
let n = nombres.pop();
console.log(n);
nombres.push("David", "Ariel");

console.log(nombres);

console.log(nombres.includes("Luis")); // validar si existe con true o false
console.log(nombres.indexOf("Luis")); // Existe 3
console.log(nombres.indexOf("Adri")); //  -1 no existe
nombres.forEach(function(item, i){
    console.log(item, i);
}

);//forEach



/* console.log(nombres[0]);
console.log(nombres[1]);
console.log(nombres[2]);
console.log(nombres[3]);
console.log(nombres[4]); */

/* let edades = [16, 20, 15, 21];

let things = ["Abi", 15, true, edades, nombres];

console.log(things.length);
console.log(things[0]);
console.log(things[1]);
console.log(things[2]);
console.log(things[3]);
console.log(things[4]); */
