const express = require('express');
const path = require('path');
const app = express();

// Middleware para archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

// Definir rutas para las páginas HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/index.html'));
});
app.get('/nosotros', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/nosotros.html'));
});
// Rutas para las demás páginas...

// Ruta para manejar el formulario de contacto
app.post('/contacto', (req, res) => {
    const { nombre, telefono, correo, asunto, mensaje } = req.body;
    console.log(`Mensaje de: ${nombre}, Teléfono: ${telefono}, Correo: ${correo}, Asunto: ${asunto}, Mensaje: ${mensaje}`);
    res.send('Mensaje recibido. Gracias por contactarnos.');
});

// Iniciar el servidor
app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});
