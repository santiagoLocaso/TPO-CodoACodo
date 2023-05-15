const formulario = document.getElementById('formulario');
const nombre = document.getElementById('nombre')
const email = document.getElementById('email')
const asunto = document.getElementById('asunto')
const mensaje = document.getElementById('mensaje')
const mensajeError = document.getElementById('formulario__mensaje')

formulario.addEventListener('submit', (e) => {
    e.preventDefault()
    if (nombre.value === '' || email.value === '' || asunto.value === '' || mensaje.value === '') {
        mensajeError.classList.add('formulario__mensaje-activo')
    } else {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Su consulta fue enviada con exito',
            showConfirmButton: false,
            timer: 1500
        }).then(() => {
            formulario.reset();
        })
    }
})

nombre.addEventListener('input', () => {
    mensajeError.classList.remove('formulario__mensaje-activo')
})

email.addEventListener('input', () => {
    mensajeError.classList.remove('formulario__mensaje-activo')
})

asunto.addEventListener('input', () => {
    mensajeError.classList.remove('formulario__mensaje-activo')
})

mensaje.addEventListener('input', () => {
    mensajeError.classList.remove('formulario__mensaje-activo')
})