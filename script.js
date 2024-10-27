//Problema 1//

const imagen = document.querySelector('.problema1');

function addborder(){
    if (!imagen.style.border  || imagen.style.border == 'none') {
        imagen.style.border = '2px solid red';
    }else{
        imagen.style.border = 'none';
    }
}

// FIN PROBLEMA 1//

//Problema 2//

const boton = document.querySelector('.button2');

function verificar(){
const cantidad1 = Number(document.querySelector('#input1').value);
const cantidad2 = Number(document.querySelector('#input2').value);
const cantidad3 = Number(document.querySelector('#input3').value);

const total = cantidad1 + cantidad2 + cantidad3;
   
if (total <= 10){
        document.querySelector('.p1').style.display = "block";
        document.querySelector('.p2').style.display = "none";
        document.querySelector('.span2').innerHTML = total;

} else if (total > 10){
    document.querySelector('.p1').style.display = "none";
    document.querySelector('.p2').style.display = "block";
    document.querySelector("#input1").value = "";
    document.querySelector("#input2").value = "";
    document.querySelector("#input3").value = "";
}
}

//FIN PROBLEMA 2//

//Problema 3//
const boton2 = document.querySelector('.button3');
function ingresar(){
const select1 = document.querySelector('#select1');
const select2 = document.querySelector('#select2');
const select3 = document.querySelector('#select3');

    if (select1.value == '9' && select2.value == '1' && select3.value == '1') {
        document.querySelector('.p3').innerHTML = "Pasword 1 correcto";
    } else if (select1.value == '7' && select2.value == '1' && select3.value == '4') {
        document.querySelector('.p3').innerHTML = "Pasword 2 correcto";
    } else { 
        document.querySelector('.p3').innerHTML = "Pasword incorrecto";
    }

}

//FIN PROBLEMA 3//