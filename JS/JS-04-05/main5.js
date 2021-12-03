
let resultado = document.getElementById("div_resultado");

let nombres = ["Dann", "Pat", "Armando", "Pablo", "Adri", "Carlos"];

resultado.innerHTML="Nombres:<div class='card'> <ul class='list-group'>";

nombres.forEach(function (item){
        resultado.innerHTML += "<li class='list-group-item'>"+ item + "</li>" ;
});
resultado.innerHTML +="</ul></div>";



// valor de inicio // condición  // incremento


/*  for(let cont= 1; cont <= 100; cont += 2 ){
        if(cont % 2 == 1){
        console.log(cont)
        }
}//for cont
  */

/* let fibonacci

for(a=1; a <=100; a++){
        for(b=1; b; b++){
                console.log(a + b)
        }
} */

//fibonacci
/* 
let x=0;
let y=1;
let z=0;
console.log(z);
console.log(y);
for(let cont=0; cont <=10; cont++){
        z= x+y;
        console.log(z);
        x=y;
        y=z;

} */ 

//while

/* let cont = 5;
while(cont <=100 ){
        console.log(cont);
        cont +=5;
} */

/* cont =0;
do{
        console.log(cont);
        cont ++;

}while(cont<=10); */


for(i=1; i<10; i++){
        if(i==7)
        break;
        console.log(i);       
}



for(i=1; i<10; i++){
        if(i==7)
        continue;
        console.log(i);       
}