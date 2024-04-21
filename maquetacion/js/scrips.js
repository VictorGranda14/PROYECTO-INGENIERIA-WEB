
document.getElementById('formR').addEventListener('submit', function (event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var rut = document.getElementById('rut').value;
    var email = document.getElementById('email').value;
    var region = document.getElementById('region').value;
    var rutObj = document.getElementById('rut');
    var rut = rutObj.value
    var comuna = document.getElementById('comuna').value;
    var passwordObj = document.getElementById('password');
    var password = passwordObj.value;
    var passwordVerifyObj = document.getElementById('password-verify');
    var passwordVerify = passwordVerifyObj.value;
    const mensajeError = document.getElementById('mensajeError');

    if (validarRUT(rut)) {
        mensajeError.textContent = '';
        rutObj.style.border = ''
        if (validarContraseña(password)) {
            mensajeError.textContent = '';
            passwordObj.style.border = ''
            if (verificadorContraseña(password, passwordVerify)) {
                mensajeError.textContent = '';
                passwordVerifyObj.style.border = ''
                document.getElementById('formR').reset();
            }
            else {
                mensajeError.textContent = 'La contraseña no coincide';
                limpiarImput("password-verify");
                passwordVerifyObj.style.border = '2px solid red';
            }

        }
        else {
            mensajeError.textContent = 'La contraseña debe tener al menos 6 caracteres y 1 numero';
            limpiarImput("password");
            passwordObj.style.border = '2px solid red';

        }
    } else {
        mensajeError.textContent = 'RUT inválido. Por favor, intenta nuevamente.';

        limpiarImput("rut");
        rutObj.style.border = '2px solid red';
    }






});



function validarRUT(rut) {
    // Separar el cuerpo y el dígito verificador si es posible
    if (rut.includes('-')) {
        const partes = rut.split('-');
        if (partes.length === 2) {
            const cuerpo = partes[0].replace(/\./g, ''); // Limpiar puntos
            const cod = partes[1];

            let suma = 0;
            let multiplo = 2;

            // Asumir que el cuerpo solo tiene dígitos
            for (let i = cuerpo.length - 1; i >= 0; i--) {
                suma += multiplo * parseInt(cuerpo.charAt(i), 10);
                multiplo = multiplo < 7 ? multiplo + 1 : 2;
            }

            const codEsperado = 11 - (suma % 11);
            const codCalculado = codEsperado === 11 ? 0 : codEsperado === 10 ? 'K' : codEsperado;

            // Convertir el dígito verificador a mayúsculas para la comparación
            if (cod.toUpperCase() === codCalculado.toString()) {
                return true
            }
        }
    }
    return false; // Retornar falso si el formato no incluye '-' o tiene más partes
}
function limpiarImput(input) {
    document.getElementById(input).value = '';
}
function validarContraseña(password) {
    var conNumero = /\d/
    if (password.length < 6 || !conNumero.test(password)) {
        return false
    }
    return true
}
function validarContraseña(password) {
    var conNumero = /\d/
    if (password.length < 6 || !conNumero.test(password)) {
        return false
    }
    return true
}
function verificadorContraseña(password, passwordVerify) {
    if (passwordVerify == password) {
        return true
    }
    return false
}
