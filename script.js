//Problema 1

const imagen = document.querySelector('.problema1');

imagen.addEventListener('click', addborder);

function addborder(){
    if (!imagen.style.border  || imagen.style.border == 'none') {
        imagen.style.border = '2px solid red';
    }else{
        imagen.style.border = 'none';
    }
}

// FIN PROBLEMA 1

//Problema 2


const boton = document.querySelector('.button2');

boton.addEventListener('click', verificar);

function verificar(){
const cantidad1 = Number(document.querySelector('#input1').value);
const cantidad2 = Number(document.querySelector('#input2').value);
const cantidad3 = Number(document.querySelector('#input3').value);

const total = cantidad1 + cantidad2 + cantidad3;

const p2Element = document.querySelector('.p2');
const span2Element = document.querySelector('.span2');
   
if (total <= 10){
    p2Element.style.display = "block";
    span2Element.innerHTML = total;
} else {
    p2Element.innerHTML = "Llevas demasiados stickers.";
    span2Element.innerHTML = "";
    p2Element.style.display = "block";
}
}


