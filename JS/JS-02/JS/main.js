/* 
    Sentencias de control de flujo
*/

//Operadores Lógicos

// Y -  AND  // &&
// O -  OR   // || Alt + 124
// NO - NOT  //  !

let num1 =10;//parseInt(prompt("¿Cuál es el primer número?"),10);
let num2 =20; //parseInt(prompt("¿Cuál es el segundo número?"),10);

function greather2Numbers(num1, num2) {    
    if ((num1 > num2) && (!isNaN(num1))){
        console.log("El número uno es mayor");
        return num1;
    } else if ((num2 > num1) && (!isNaN(num2))){
        console.log("El número dos es mayor");
        return num2;
    }else{
            if(num1===b){
                console.log("Son iguales");
                return num1;
            }else{
                console.log("Problemas de entrada");
            }
            if (isNaN(num1) || isNaN(num2)){
                console.log("a || b no son números");
             //Is NaN
            }    
    }// else
    
}//greather2Numbers

console.log(greather2Numbers(num1,num2));


//let num1 =10;//parseInt(prompt("¿Cuál es el primer número?"),10);
//let num2 =20; //parseInt(prompt("¿Cuál es el segundo número?"),10);



/* 
function greather2Numbers(num1, num2) {
    let max;
    if (num1 > num2){
        console.log("El número uno es mayor");
        max =num1;
    } else if (num2 > num1){
        console.log("El número dos es mayor");
        max = num2;
    }else{
        console.log("Son iguales");
        max = num1;
    }// else
    return max;
}//greather2Numbers

console.log(greather2Numbers(num1,num2));

*/

/* 
function greather2Numbers(num1, num2) {
    let max;
    if (num1 > num2){
        console.log("El número uno es mayor");
        return num1;
    } else if (num2 > num1){
        console.log("El número dos es mayor");
        return num2;
    }else{
        console.log("Son iguales");
        return num1;
    }// else
    
}//greather2Numbers

console.log(greather2Numbers(num1,num2));*/



