/*function cargar(){
let cargar = document.getElementById("contenedor");
 let uno = document.documentElement.scrollHeight ;
let dos = document.documentElement.scrollTop  ;
let calcular  =  uno * dos;
}*/

window.onscroll = function() {
    let barra = document.getElementById("barra");
    
    let scrollTop = document.documentElement.scrollTop;
    let alturaTotal = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    
    let porcentaje = (scrollTop / alturaTotal) * 100;
    
    barra.style.width = porcentaje + "%";
};
