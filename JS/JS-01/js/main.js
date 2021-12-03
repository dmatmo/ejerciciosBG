console.log("Hola JS !!!");

let numberOne =10;
let numberTwo =15;
/*  *
alert(numberOne + numberTwo);
numberOne = 125;
numberTwo = 230;
alert(numberOne + numberTwo);

numberOne = 521;
numberTwo = 768;
alert(numberOne + numberTwo);
*/

/*alert(addTwoNumbers(10,15));
console.log(addTwoNumbers(125,230));
console.log(addTwoNumbers(521,168));*/

/*console.log(addTwoNumbers(addTwoNumbers(5,6,),(addTwoNumbers(10,21))));

console.log(
  addTwoNumbers(
    addTwoNumbers(5,6),
    addTwoNumbers(10,21)
  )
); */

const PI=3.1415962;

console.log(comp2num(3,8))
console.log(sum(1,1));
console.log(rest(1,1));
console.log(mult(1,1));
console.log(div(10,6));
console.log(round(10,6));
console.log(ceil(10,6));
console.log(" floor: "+ floor(10,6));







function sum(num1, num2){
    return num1 + num2;
}//suma de dos numeros

function rest(num1, num2){
    return num1 - num2;
}//resta de dos numeros

function mult(num1, num2){
    return num1 * num2;
}//multiplicación de dos numeros

function div (num1, num2){
    return parseInt(num1,10) / parseInt(num2,10);
}//división de dos numeros

function round (num1, num2){
    return Math.round(num1 / num2);    
}    

function ceil (num1, num2){
    return Math.ceil(num1 / num2);    
}    

function floor (num1, num2){
    return Math.floor(num1 / num2);    
}    


const residuo = function (num1, num2){ // función anónima
    return num1 % num2;
};//Residuo de dos numeros

console.log("El residuo es:  " + residuo(10,3));


function comp2num(a,b){
    
     if(a>=b){
         alert("El num 1 es mayor o igual que num 2");
     }    
     else{
        alert("El num 2 es mayor que num 1"); 
     } 
     return 0;     
}


function addTwoNumbers(numberOne, numberTwo){
    return numberOne + numberTwo;
}//addTwoNumbers


//----------------------------------------------------------------------------------------------

// ES6 Arrow funtions  por su indicador en forma de flecha =>


let m = (a,b) => a*b;

console.log("m : " + m(20,50));

let r = (a,b) => a % b;
console.log("r : " + r(20,50));


const m1 = (a,b) => a*b;
console.log("m1 const: " + m(20,50));


const m2 = (a,b) =>{returna*b} ;
console.log("m2 const: " + m(20,50));


function exponetes(num,exp){
    let a1 =10;
    function multiplica (n){
        return n*n;

    }// multiplica

    return multiplica(multiplica(num)* multiplica(exp));
}

exponentes(25);

//multiplica (20): // marca error



