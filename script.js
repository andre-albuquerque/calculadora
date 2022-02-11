function insert(num) {
    let numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}

function clean() {
    document.getElementById('resultado').innerHTML = '';
}

function erase() {
    let resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}

function conta() {

    try {
        if (document.getElementById('resultado').innerHTML != '') {
            let numeros = document.getElementById('resultado').innerHTML;
            document.getElementById('resultado').innerHTML =  eval(numeros)
        } 
        
    } catch (error) {
        document.getElementById('resultado').innerHTML = 'Syntax ERROR'
    }
}