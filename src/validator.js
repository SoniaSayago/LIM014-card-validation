// isValid = algoritmo de Luhn
const isValid = (numberCard) => {
  // convert into array
  let numberArray = numberCard.split('').reverse(); //Separe un número de 2 digitos y sume cada digito
console.log(numberArray);
  // first loop
  let i;
  for(i=0; i < numberArray.length; i++) {   //Tome en cuenta los que son pares desde el cero, 2, ... (las posiciones)
  
    if ((i+1) % 2 == 0) { // multiply second digit
    
    let multipliedNumber = numberArray[i] * 2; //Si eso pasa dejalo multiplicar *2
    numberArray[i] = multipliedNumber.toString(); // lo convierte en string

    if (multipliedNumber > 9) { // si es mayor que 9
      let newNumber = numberArray[i].split (''); // se va separar los nùmeros con split

      let sum = parseInt(newNumber[0]) + parseInt(newNumber[1]); //Sumar digito x digito desde la posicion 0 a posicion 1
      numberArray[1] = sum.toString(); // ver el resultado de esa suma
    }
  }
}

// 
let total = 0;
let index = 0;

for (index; index < numberArray.length; index++) { // Index comienza desde 0
  total = total + parseInt(numberArray[index]); // esta recorriendo un array
}

  console.log(total)
  if (total % 10 == 0){
    return true
  }else{
    return false
  }
}


// Ahora maskify: debe mostrar los · y los ùltimos 4 dígitos

const maskify = (numberCard) => {
  //ocultar los digitos menos los 4 ultimos
  if(numberCard.length > 4) {
      let cardNumberArray = numberCard.split('');
      let newNumberString = '';

      for (let i = 0;i <cardNumberArray.length; i++) {  // Se le va sumar 1 al i ==> ++ se significa aumentarle 1 más
          if (i < (cardNumberArray.length - 4)) {
              newNumberString += '#';
          } else {
            newNumberString += cardNumberArray[i];// Si no cumple con la condicional entonces ocultar con #
          }
      }

      return newNumberString;
    } else {
        return numberCard;
    }
}

const validator = { isValid, maskify}

export default validator 
