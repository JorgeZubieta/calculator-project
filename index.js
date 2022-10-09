// 1 - obtenemos los datos de los clic que hizo el usuario y que operacion elijio

// 2 - identificar botones y tener rutas de acceso a cada elemento y acceso al displayq ue va a mostrar el resultado

// 3 - opero y pongo el resultado


// LOGICA :
    // 1 + 3 como accedo a este elemento
    // debemos cargar esto en un array el mismo es flexible ne java script obejtos de distintos tipos

    // Objetivo - Crear: 
    // - una funcion que compare con mi array de datos cual fue la operacion
    // - devolver ese dato como prametro a otra funcion que realice el proceso matematico y chquear si ese proceso es posible


// capturo el contenido del elemento
// const n1 = document.getElementById("1").textContent;
// console.log(n1);

// capturo el valor value y lo converitmos a entero
const n1 = parseInt(document.getElementById('1').value);
console.log(n1);

const n2 = parseInt(document.getElementById('2').value);
console.log(n2);

const op = document.getElementById('+').value;
console.log(op);

const display = document.getElementById("input").textContent;
console.log(display);

// DECLARACION : creo una funcion que reciba los parametros
// Aclarcion : importante declarar primero el parametro opera
const result = (opera, num2, num1) => {
    if (opera === "+"){
        return num1 + num2;
    }
};

// le tengo que pasar los dtos que esa funcion va analizar!
console.log(result(op, n1, n2));

// lo muestro en el input - pisando el contenido con textContent!
input.textContent = result(op, n1, n2);

