
/* TARJETA DARLE DINAMIC */
const tarjeta = document.querySelector('#tarjeta'),
        btnAbrirFormulario = document.querySelector('#btn-abrir-formulario'),
        formulario = document.querySelector('#formulario-tarjeta'),
        numeroTarjeta = document.querySelector('#tarjeta .numero'),
        logoMarca = document.querySelector('#logo-marca'),
        firma = document.querySelector('#tarjeta .firma p'),
        nombreTarjeta = document.querySelector('#tarjeta .nombre'),
        mesExpiracion = document.querySelector('#tarjeta .mes'),
        yearExpiracion = document.querySelector('#tarjeta .year'),
        ccv = document.querySelector('#tarjeta .ccv');


//* Volteamos la tarjeta para mostrar el frente.
const mostrarFrente = () => {
    if(tarjeta.classList.contains('active')) {
        tarjeta.classList.remove('active');
    }
}

//* ROTACION DE LA TARJETA *//
tarjeta.addEventListener('click', () => {
    tarjeta.classList.toggle('active');
});

// * Boton de abrir formulario *//
btnAbrirFormulario.addEventListener('click', () => {
    btnAbrirFormulario.classList.toggle('active');
    formulario.classList.toggle('active');
});

//* Select del mes generado dinamicamente.
for (let i = 1; i<= 12; i++){
    let opcion = document.createElement('option');
    opcion.value = i;
    opcion.innerText = i;
    formulario.selectMes.appendChild(opcion);
}

//* select del año generado dinamicamente
const yearActual = new Date().getFullYear();
for(let i = yearActual; i <= yearActual + 8; i++){
    let opcion = document.createElement('option');
    opcion.value = i;
    opcion.innerText = i;
    formulario.selectYear.appendChild(opcion);
}

//* INPUT nÙMERO DE TARJETA 
formulario.inputNumero.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;
    
    formulario.inputNumero.value = valorInput
    // eliminamos espacios en blanco, letras
    .replace(/\s/g,'')
    // eliminar las letras
    .replace(/\D/g,'')
    // Espacio cada 4 nùmeros con expresiones regulares
    .replace(/([0-9]{4})/g,'$1 ')
    //Elimina el ùltimo espaciado
    .trim();

    numeroTarjeta.textContent = valorInput

    if(valorInput == ''){
        numeroTarjeta.textContent = '#### #### #### ####';
   
        logoMarca.innerHTML = '';
    }

    if(valorInput[0] == 4){
        logoMarca.innerHTML = '';
        const imagen = document.createElement('img');
        imagen.src = 'img/logos/visa.png';
        logoMarca.appendChild(imagen);
    }
     else if(valorInput[0] == 5){
        logoMarca.innerHTML = '';
        const imagen = document.createElement('img');
        imagen.src = 'img/logos/mastercard.png';
        logoMarca.appendChild(imagen);
    }

    // Volteamos la tarjeta para que el UX vea lo que escribe
    mostrarFrente()
});

//* INPUT nombre DE TARJETA 
formulario.inputNombre.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;

    formulario.inputNombre.value = valorInput
    .replace(/\d/g,'')
    nombreTarjeta.textContent = valorInput;
    firma.textContent = valorInput;

    if(valorInput == ''){
        nombreTarjeta.textContent = 'Sonia Sayago';
    }
    // Volteamos la tarjeta para que el UX vea lo que escribe
    mostrarFrente()
});

//* Select mes
formulario.selectMes.addEventListener('change', (e) => {
    mesExpiracion.textContent = e.target.value;
    // Volteamos la tarjeta para que el UX vea lo que escribe
    mostrarFrente()
});

//* Select year
formulario.selectYear.addEventListener('change', (e) => {
    yearExpiracion.textContent = e.target.value.slice(2);
    // Volteamos la tarjeta para que el UX vea lo que escribe
    mostrarFrente()
});

//* ccv
formulario.inputCCV.addEventListener('keyup', () => {
	if(!tarjeta.classList.contains('active')){
		tarjeta.classList.toggle('active');
	}

	formulario.inputCCV.value = formulario.inputCCV.value
	// Eliminar los espacios
	.replace(/\s/g, '')
	// Eliminar las letras
	.replace(/\D/g, '');

	ccv.textContent = formulario.inputCCV.value;
});

import validator from './validator.js';

//validate
document.getElementById('validarNumero').addEventListener('click', () => {
    let creditCardNumber = document.getElementById('inputNumero').value;
    let answer = document.getElementById('answer')
    if (validator.isValid(creditCardNumber) == true) {
        answer.innerHTML = validator.maskify(creditCardNumber) + " Tarjeta válida"
        answer.style = 'color:green';
    } else {
        answer.innerHTML = validator.maskify(creditCardNumber) + " Tarjeta no válida"
        answer.style = 'color:red';
    }
});