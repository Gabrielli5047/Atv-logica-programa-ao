function solucao(lista) {
    
    let media = 0;
     
   for (let num of lista) {
     media += num / lista.length;
   }
   console.log(media);  
 }
 
 function processData(input) {
       const strings = input.split(" ");
     const numeros = [];
     for(let i = 0; i < strings.length; i++) {
           numeros.push(parseInt(strings[i] ,10));
       }
     solucao(numeros);
 } 