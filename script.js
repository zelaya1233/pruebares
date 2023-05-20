// Función para realizar la conversión
function convertir() {
    var monto = parseFloat(document.getElementById('monto').value);
    var divisaOrigen = document.getElementById('divisaOrigen').value;
    var divisaDestino = document.getElementById('divisaDestino').value;
    var resultado = 0;

    if (divisaOrigen === 'USD' && divisaDestino === 'NIO') {
        resultado = monto * 36.8; // Tasa de cambio aproximada
        document.getElementById('resultado').innerText = 'Resultado: ' + resultado.toFixed(2) + ' C$';//copiar
    } else if (divisaOrigen === 'USD' && divisaDestino === 'EUR') {
        resultado = monto / 1.138; // Tasa de cambio aproximada
        document.getElementById('resultado').innerText = 'Resultado: ' + resultado.toFixed(2) + ' €';
    } else if (divisaOrigen === 'EUR' && divisaDestino === 'NIO') {
        resultado = monto * 41.46; // Tasa de cambio aproximada
        document.getElementById('resultado').innerText = 'Resultado: ' + resultado.toFixed(2) + ' C$';
    } else if (divisaOrigen === 'EUR' && divisaDestino === 'USD') {
        resultado = monto * 1.138; // Tasa de cambio aproximada
        document.getElementById('resultado').innerText = 'Resultado: ' + resultado.toFixed(2) + ' $';
    } else if (divisaOrigen === 'NIO' && divisaDestino === 'EUR') {
        resultado = monto / 41.46; // Tasa de cambio aproximada
        document.getElementById('resultado').innerText = 'Resultado: ' + resultado.toFixed(2) + ' €';
    } else if (divisaOrigen === 'NIO' && divisaDestino === 'USD') {
        resultado = monto / 36.8; // Tasa de cambio aproximada
        document.getElementById('resultado').innerText = 'Resultado: ' + resultado.toFixed(2) + ' $';
    }
    else if (divisaOrigen === 'NIO' && divisaDestino === 'NIO') {
        resultado = monto; // Tasa de cambio aproximada
        document.getElementById('resultado').innerText = 'Resultado: ' + resultado.toFixed(2) + ' C$';
    }
    else if (divisaOrigen === 'EUR' && divisaDestino === 'EUR') {
        resultado = monto; // Tasa de cambio aproximada
        document.getElementById('resultado').innerText = 'Resultado: ' + resultado.toFixed(2) + ' €';
    }
    else if (divisaOrigen === 'USD' && divisaDestino === 'USD') {
        resultado = monto; // Tasa de cambio aproximada
        document.getElementById('resultado').innerText = 'Resultado: ' + resultado.toFixed(2) + ' $';
    }


}