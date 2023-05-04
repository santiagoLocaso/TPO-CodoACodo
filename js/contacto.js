const formulario = document.getElementById('formulario-tarjeta');
const nombre = document.getElementById('nombre')
const email = document.getElementById('email')
const asunto = document.getElementById('asunto')
const mensaje = document.getElementById('mensaje')

formulario.addEventListener('submit', (e) => {
    e.preventDefault()
    if (nombre.value === '' || email.value === '' || asunto.value === '' || mensaje.value === '') {
        alert('Debe rellenar los campos obligatorios')
    } else {
        formulario.submit();
        alert('Consulta enviada, en instantes nos ponemos en contacto con vos!')
    }
})