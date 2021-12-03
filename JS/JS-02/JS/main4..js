let cant= document.getElementById("txt_input");
let list = document.getElementById("list_country");
let btn_send= document.getElementById("btn_send");
let result=document.getElementById("div_result");

btn_send.addEventListener("click", function(e){
    console.log("Elemento Seleccionado:" +
    list.options.selectedIndex);
    console.log("Dato: " +
    list.options[list.options.selectedIndex].value);

let c =  list.options[list.options.selectedIndex].value;


let result = isNaN(parseFloat(cant.value)) ? 0 : parseFloat(cant.value);


switch (c) {
    
        case "BBD": 
        case "BZD":       
             result *=  10.28115      
             break;       

        case "CAD":        
             result *=  16.22982        
             break;

        case "CNY":        
             result *=  3.18757       
             break;

        case "KRW":        
             result *=  17.36897      
             break;

        case "EGP":        
             result *=  1.30776      
             break;

        case "USA":        
              result *=  20.56230      
              break;

        case "JPY":        
             result *=  0.18428      
             break;

        case "NDZ":        
             result *=  14.18490     
            break;          
default:
        break;
}//Switch
div_result.innerHTML= "Son  $" + result + " MXN pesos."
});



