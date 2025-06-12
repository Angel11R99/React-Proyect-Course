// Condicionales

const disponible = 4000
const retirar = 500

if (disponible >= retirar) {
    console.log(`Si puedes retirar la monica cantidad de $${retirar} pesos, porque tu cuenta tiene $${disponible} pesos.`);
} else {
    console.log(`No puedes retirar la monica cantidad de $${retirar} pesos, porque tu cuenta tiene $${disponible} pesos.`);
}

/*
Operadores logicos
> Mayor que
< Menor que
>= Mayor o igual
<= Menor o igual
== Igual
=== Igual estricto
!== Diferente a
*/

// Diferencia entre `Igual == e Igual estricto ===`, uno compara el valor y el otro el valor mas el tipo de dato