document.getElementById('facturacion-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let isValid = true;

    // Validación del nombre
    const nombre = document.getElementById('nombre').value;
    if (nombre.trim() === '') {
        isValid = false;
        showError('nombre-error', 'El nombre es obligatorio.');
    } else {
        hideError('nombre-error');
    }

    // Validación del correo electrónico
    const email = document.getElementById('email').value;
    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!emailPattern.test(email)) {
        isValid = false;
        showError('email-error', 'Ingrese un correo electrónico válido.');
    } else {
        hideError('email-error');
    }

    // Validación del teléfono
    const telefono = document.getElementById('telefono').value;
    const telefonoPattern = /^\d{10}$/; // Asegura que sean 10 dígitos
    if (!telefonoPattern.test(telefono)) {
        isValid = false;
        showError('telefono-error', 'Ingrese un número de teléfono válido (10 dígitos).');
    } else {
        hideError('telefono-error');
    }

    // Validación de la dirección
    const direccion = document.getElementById('direccion').value;
    if (direccion.trim() === '') {
        isValid = false;
        showError('direccion-error', 'La dirección es obligatoria.');
    } else {
        hideError('direccion-error');
    }

    // Validación del código postal
    const codigoPostal = document.getElementById('codigo-postal').value;
    const codigoPostalPattern = /^\d{5}$/; // Asegura que sean 5 dígitos
    if (!codigoPostalPattern.test(codigoPostal)) {
        isValid = false;
        showError('codigo-postal-error', 'Ingrese un código postal válido (5 dígitos).');
    } else {
        hideError('codigo-postal-error');
    }

    if (isValid) {
        alert('Formulario enviado correctamente.');
        // Aquí puedes agregar la lógica para enviar el formulario
    }
});

function showError(id, message) {
    const errorElement = document.getElementById(id);
    errorElement.textContent = message;
    errorElement.style.display = 'block';
}

function hideError(id) {
    const errorElement = document.getElementById(id);
    errorElement.style.display = 'none';
}
