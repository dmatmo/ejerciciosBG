let num1= document.getElementById("text_input_1");
let num2=document.getElementById("text_input_2");
let num3=document.getElementById("text_input_3");
let result=document.getElementById("div_result");


let btn_send= document.getElementById("btn_send");
btn_send.addEventListener("click", function(e){
    let n1 =parseInt(num1.value, 10);
    let n2 =parseInt(num2.value, 10);
    let n3 =parseInt(num3.value, 10);
    result.innerHTML= "El número mayor es " + greather2Numbers(n1,n2,n3) + " !!! ";
});

function greather2Numbers(num1, num2, num3) {    
    if ((num1 > num2) && (num1 > num3 ) && (!isNaN(num1))){
        console.log("El número uno es mayor");
        return num1;
    } else if ((num2 > num1) && (num2 > num3) && (!isNaN(num2))){
        console.log("El número dos es mayor");
        return num2;   
    }
    else if ((num3 > num1) && (num3 > num2) && (!isNaN(num3))){
    console.log("El número tres es mayor");
    return num3;   
    }
    else{
            if(num1==num2 && num2==num3){
                console.log("Son iguales");
                return num1;
            }else{
                console.log("Problemas de entrada");
            }
            if (isNaN(num1) || isNaN(num2)){
                console.log("a || b no son números");             
            }  //Is NaN  
    }// else
    }//greather2Numbers

  
