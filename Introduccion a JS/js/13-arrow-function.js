// Arrow Functions

/* 
Nota:
 - los  arrow fuction solo usan `=>` luego del parentesis
 - Se parece al fuction expresion ya que solo se puede llamar si la escribiste anteriormente
 - otra posibilidad es que si solo tienes una linea de codigo dentro de la funcion puedes eliminar las llaves, tal que asi:
 
 const sumar = (valor1 = 0, valor2 = 0) => console.log(valor1 + valor2);
*/

const sumar = (valor1 = 0, valor2 = 0) => {
    console.log(valor1 + valor2);
}

sumar(10, 12)