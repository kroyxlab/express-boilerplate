const express = require('express'),
			path = require('path'),
			mongoose = require('mongoose');
	
// Realiza la conexion a la base de datos
mongoose.connect('mongodb://localhost/NombreDeLaBaseDeDatos', { useNewUrlParser: true });

const db = mongoose.connection;

db.once('open', ()=>{
	console.log('Conectado a MongoDB');
});

db.on('error', (err)=>{
	console.log(err);
});

// Inicializa Express
const app = express();

// Configura el motor de las vistas
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Establece la carpeta public
app.use(express.static(path.join(__dirname, 'public')));

// Home Route
app.get('/', (req, res)=>{
	res.render('index');
});

// Inicializa el servidor en el puerto 3000
app.listen(3000, ()=>{
	console.log('Inicalizado el servidor en el puerto 3000')
})