
        // Formatear automáticamente el número de tarjeta a 16 dígitos con espacios
        const cardNumberInput = document.getElementById('card-number');
        cardNumberInput.addEventListener('input', function(e) {
            let cardNumber = e.target.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
            let formattedCardNumber = cardNumber.match(/.{1,4}/g)?.join(' ') || '';
            e.target.value = formattedCardNumber;
        });

        // Limitar la entrada del número de tarjeta a 16 dígitos
        cardNumberInput.addEventListener('keydown', function(e) {
            const key = e.key;
            const cardNumber = e.target.value.replace(/\s+/g, '');

            if ((key === 'Backspace' || key === 'Delete') && cardNumber.length <= 16) {
                return;
            }
            if (cardNumber.length >= 16 && !['Backspace', 'ArrowLeft', 'ArrowRight', 'Delete'].includes(key)) {
                e.preventDefault();
            }
        });

        // Agregar el slash automáticamente en la fecha de expiración después de MM
        const expiryDateInput = document.getElementById('expiry-date');
        expiryDateInput.addEventListener('input', function(e) {
            let expiryDate = e.target.value.replace(/\D/g, '');
            if (expiryDate.length > 2) {
                expiryDate = expiryDate.substring(0, 2) + '/' + expiryDate.substring(2, 4);
            }
            e.target.value = expiryDate;
        });

        // Validaciones con expresiones regulares al enviar el formulario
        document.getElementById('payment-form').addEventListener('submit', function(event) {
            event.preventDefault();

            // Obtener los valores de los campos
            const cardNumber = document.getElementById('card-number').value.replace(/\s+/g, '');
            const expiryDate = document.getElementById('expiry-date').value;
            const cvv = document.getElementById('cvv').value;

            // Expresiones regulares para validar
            const cardNumberRegex = /^[0-9]{16}$/;
            const expiryDateRegex = /^(0[1-9]|1[0-2])\/\d{2}$/; // Formato MM/AA
            const cvvRegex = /^[0-9]{3,4}$/;

            // Validación del número de tarjeta
            if (!cardNumberRegex.test(cardNumber)) {
                alert('Por favor, ingrese un número de tarjeta válido (16 dígitos).');
                return;
            }

            // Validación de la fecha de expiración
            if (!expiryDateRegex.test(expiryDate)) {
                alert('Por favor, ingrese una fecha de expiración válida en formato MM/AA.');
                return;
            }

            // Validación del CVV
            if (!cvvRegex.test(cvv)) {
                alert('Por favor, ingrese un CVV válido (3 o 4 dígitos).');
                return;
            }

            // Si todo es válido, procesar el pago
            alert('Pago confirmado. ¡Gracias por tu compra!');
            window.location.href = 'aboutUs.html';
        });
