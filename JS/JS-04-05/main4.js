let cant =  document.getElementById("txt_input");
let list = document.getElementById("list_country");
let btn_send = document.getElementById("btn_send");
let div_res = document.getElementById("div_result");
let divisas = [10.28115, 10.28115, 16.22982, 3.18757, 17.36897, 
    1.30776, 20.56230, 27.72209,  0.18428, 14.18490];

list.addEventListener("click", function(e) {
    console.log("Elemento Seleccionado: " + 
    list.options.selectedIndex);
    console.log("Dato: " + 
    list.options[list.options.selectedIndex].value) ;
    let valor = divisas[list.options.selectedIndex];
    console.log(valor);
    let c = list.options[list.options.selectedIndex].value;
    let  result  =  isNaN(parseFloat(cant.value)) ?  0 :  parseFloat(cant.value);
    document.getElementById("txt_input").value=result;
    result *= valor;

   /*  switch (c) {
        case "BBD": 
        case "BZD": 
            result *= valor;
            break;
        case "CAD":
            result *= valor;
            break;
        case "CNY":
             result *= valor;
             break;
        case "KRW":
             result *= valor;
             break;
        case "EGP":
             result *= valor;
             break;
        case "USD":
            result *= valor;
            break;          
        case "GBP":
             result *= valor;
             break;
        case "JPY":
             result *= valor;
             break;
        case "NZD":
            result *= valor;
            break;         
        default:
            break;
    } //switch */
    div_res.innerHTML = "Son " + result + " MXN pesos.";
});

