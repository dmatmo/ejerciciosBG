let text= document.getElementById("text_input");
let result=document.getElementById("div_result");


btn_send.addEventListener("click", function(e){
    result.innerHTML= "Hello " + text.value + " !!! ";
});


greeting();

function greeting(){
    result.innerHTML="Hello World !!!";    
}//greeting

