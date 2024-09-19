// Se realiza la respectiva creacion de las funciones que se van a utilizar

/*
Busca el elemento con id 'pantalla' y añade el valor al final.
*/
function agregar(valor) {
    document.getElementById('pantalla').value += valor;
}

function limpiar() {
    // Pone la pantalla en blanco.
    document.getElementById('pantalla').value = '';
}

function calcular() {
    try {
        // Evalúa la expresión en el cual optiene lo que tiene el id pantalla y con la funcion eval()
        // se puede realizar los calculos y muestra el resultado.
        document.getElementById('pantalla').value = eval(document.getElementById('pantalla').value);
    } catch (error) {
        // Si hay un error, muestra 'Error' en la pantalla.
        document.getElementById('pantalla').value = 'Error';
    }
}

function retroceder() {
    // Obtiene el valor actual de la pantalla.
    let valor = document.getElementById('pantalla').value;
    document.getElementById('pantalla').value = valor.substring(0, valor.length - 1);
    // Actualiza la pantalla sin el último carácter.
}