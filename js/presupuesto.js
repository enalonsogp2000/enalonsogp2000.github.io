document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('presupuestoForm');
    const producto = document.getElementById('producto');
    const plazo = document.getElementById('plazo');
    const extras = document.querySelectorAll('input[type="checkbox"].extra'); // Selecciona solo los checkboxes con la clase 'extra'
    const totalPresupuesto = document.getElementById('totalPresupuesto');

    const calcularPresupuesto = () => {
        let total = parseFloat(producto.value);  // Obtiene el precio del producto seleccionado
        const descuento = parseFloat(plazo.value) * 0.02; // 2% de descuento por cada mes de plazo
        total -= total * descuento;  // Aplica el descuento

        // Recorre los checkboxes de extras y suma el valor de los seleccionados
        extras.forEach(extra => {
            if (extra.checked && !isNaN(extra.value)) {  // Solo suma si está seleccionado y es un valor numérico
                total += parseFloat(extra.value);
            }
        });

        totalPresupuesto.textContent = `$${total.toFixed(2)}`;  // Muestra el total con 2 decimales
    };

    // Agrega los eventos para recalcular el presupuesto cuando cambien los valores
    producto.addEventListener('change', calcularPresupuesto);
    plazo.addEventListener('input', calcularPresupuesto);
    extras.forEach(extra => extra.addEventListener('change', calcularPresupuesto));

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Validación de los campos del formulario
        const nombre = document.getElementById('nombre').value.trim();
        const apellidos = document.getElementById('apellidos').value.trim();
        const telefono = document.getElementById('telefono').value.trim();
        const email = document.getElementById('email').value.trim();

        const nombreValido = /^[a-zA-Z\s]{1,15}$/.test(nombre);
        const apellidosValido = /^[a-zA-Z\s]{1,40}$/.test(apellidos);
        const telefonoValido = /^\d{9}$/.test(telefono);
        const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

        // Muestra alertas si alguno de los campos no es válido
        if (!nombreValido) {
            alert("El nombre debe contener solo letras y tener un máximo de 15 caracteres.");
            return;
        }

        if (!apellidosValido) {
            alert("Los apellidos deben contener solo letras y tener un máximo de 40 caracteres.");
            return;
        }

        if (!telefonoValido) {
            alert("El teléfono debe contener solo números y tener 9 dígitos.");
            return;
        }

        if (!emailValido) {
            alert("El correo electrónico no es válido.");
            return;
        }

        alert("Formulario enviado con éxito.");
        form.reset();  // Resetea el formulario
        totalPresupuesto.textContent = '$0';  // Resetea el total del presupuesto
    });
});
