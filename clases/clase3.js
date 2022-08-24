//----SUGAR SINTAX--//

//--Valores FALSY "", 0, NaN, undefined, null
let number1 = 40;
/*;
if (number1 < 30) {
  console.log("el numero es menor a 30");
} else {
  console.log("el numero es mayor");
}
*/
//Operador ternario: 1) condicion 2) lo que devuelve si la condicion es verdaderara 3) lo que devuelve si la condicion es falsa

const stringDevuelto =
  number1 < 30 ? "el numero es menor a 30" : "El numero es mayor o igual a 30";

console.log(stringDevuelto);
