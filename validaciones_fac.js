document.addEventListener("DOMContentLoaded", function () {
    const billingType = document.getElementById("billing-type");
    const fisicaFields = document.getElementById("fisica-fields");
    const moralFields = document.getElementById("moral-fields");
    const organizacionFields = document.getElementById("organizacion-fields");
    const form = document.getElementById("billing-form");

    billingType.addEventListener("change", function () {
        fisicaFields.classList.add("hidden");
        moralFields.classList.add("hidden");
        organizacionFields.classList.add("hidden");

        if (billingType.value === "fisica") {
            fisicaFields.classList.remove("hidden");
        } else if (billingType.value === "moral") {
            moralFields.classList.remove("hidden");
        } else if (billingType.value === "organizacion") {
            organizacionFields.classList.remove("hidden");
        }
    });

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        let valid = true;
        let errorMessage = "";
        const errors = [];

        // Validar dirección
        const address = document.getElementById("address").value.trim();
        if (address === "") {
            valid = false;
            errors.push("La dirección es obligatoria.");
        }

        // Validaciones según tipo de facturación
        if (billingType.value === "fisica") {
            const name = document.getElementById("name").value.trim();
            const rfc = document.getElementById("rfc").value.trim();

            if (name === "") {
                valid = false;
                errors.push("El nombre completo es obligatorio.");
            }
            if (!/^[A-ZÑ&]{4}[0-9]{6}[A-Z0-9]{3}$/.test(rfc)) {
                valid = false;
                errors.push("El RFC para persona física debe tener el formato correcto (4 letras iniciales en mayúsculas, 6 dígitos y 3 caracteres alfanuméricos).");
            }
        } else if (billingType.value === "moral") {
            const companyName = document.getElementById("company-name").value.trim();
            const companyRfc = document.getElementById("company-rfc").value.trim();
            const representative = document.getElementById("representative").value.trim();

            if (companyName === "") {
                valid = false;
                errors.push("La razón social es obligatoria.");
            }
            if (!/^[A-ZÑ&]{3}[0-9]{6}[A-Z0-9]{3}$/.test(companyRfc)) {
                valid = false;
                errors.push("El RFC para persona moral debe tener el formato correcto (3 letras iniciales en mayúsculas, 6 dígitos y 3 caracteres alfanuméricos).");
            }
            if (representative === "") {
                valid = false;
                errors.push("El representante legal es obligatorio.");
            }
        } else if (billingType.value === "organizacion") {
            const orgName = document.getElementById("org-name").value.trim();
            const contactName = document.getElementById("contact-name").value.trim();
            const orgRfc = document.getElementById("org-rfc").value.trim();

            if (orgName === "") {
                valid = false;
                errors.push("El nombre de la organización es obligatorio.");
            }
            if (contactName === "") {
                valid = false;
                errors.push("El nombre del contacto es obligatorio.");
            }
            if (!/^[A-ZÑ&]{3}[0-9]{6}[A-Z0-9]{3}$/.test(orgRfc)) {
                valid = false;
                errors.push("El RFC para la organización debe tener el formato correcto (3 letras iniciales en mayúsculas, 6 dígitos y 3 caracteres alfanuméricos).");
            }
        }

        // Mostrar errores
        if (!valid) {
            alert(errors.join("\n"));
        } else {
            // Redirigir a la página de pago si todo está correcto
            alert("Formulario de facturación completado correctamente.");
            window.location.href = "pago.html"; // Cambia "pago.html" por la página de pago
        }
    });
});
    

function viewPago() {
    window.location.href = 'pago.html';}