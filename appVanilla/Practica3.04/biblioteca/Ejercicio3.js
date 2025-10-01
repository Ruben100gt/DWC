const usuarios = [
	{
		nombre: 'Luis',
		preferencias: { tema: 'oscuro', idioma: 'español', edad: 25 },
		contacto: {
			direccion: {
				calle: 'Calle falsa, 666',
				localidad: 'Elda',
				pais: 'España',
			},
			correoelectronico: 'correofalso@yahoo.com',
			telefono: '123456789',
		},
	},
	{
		nombre: 'Marta',
		preferencias: { tema: 'claro', idioma: 'catalán', edad: 15 },
		contacto: {
			direccion: {
				calle: 'Calle también falsa, 123',
				localidad: 'Andorra la Vella',
				pais: 'Andorra',
			},
			correoelectronico: 'correoandorrano@gmail.com',
			telefono: '',
		},
	},
	{
		nombre: 'Alberto',
		preferencias: { tema: 'oscuro', idioma: 'español', edad: 56 },
		contacto: {
			direccion: {
				calle: 'Elm Street, 666',
				localidad: 'Petrer',
				pais: 'España',
			},
			correoelectronico: 'correonulo@yahoo.com',
			telefono: '548632478',
		},
	},
	{
		nombre: 'Jacinto',
		preferencias: { tema: 'claro', idioma: 'inglés', edad: 17 },
		contacto: {
			direccion: {
				calle: 'Elm Street, 667',
				localidad: 'Elda',
				pais: 'España',
			},
			correoelectronico: 'correofalso@gmail.com',
			telefono: '',
		},
	},
	{
		nombre: 'Rigoberta',
		preferencias: { tema: 'claro', idioma: 'francés', edad: 34 },
		contacto: {
			direccion: {
				calle: 'Calle inexistente, 6',
				localidad: 'Burdeos',
				pais: 'Francia',
			},
			correoelectronico: 'correofalso@gmail.com',
			telefono: '232547859',
		},
	},
	{
		nombre: 'Sandra',
		preferencias: { tema: 'oscuro', idioma: 'español', edad: 18 },
		contacto: {
			direccion: {
				calle: 'Calle de mentira, s/n',
				localidad: 'Petrer',
				pais: 'España',
			},
			correoelectronico: 'estecorreonoexiste@gmail.com',
			telefono: '452158697',
		},
	},
	{
		nombre: 'Sandra',
		preferencias: { tema: 'oscuro', idioma: 'español', edad: 18 },
		contacto: {
			direccion: {
				calle: 'Calle existente, 34',
				localidad: 'Petrer',
				pais: 'España',
			},
			correoelectronico: 'correoinexistente@yahoo.com',
			telefono: '',
		},
	},
];

const insertarUsuario = (array, nuevoUsuario) => {
	return [...array, nuevoUsuario];
};

const arrayMayoresEdad = (array) => {
	return array.filter((usuario) => usuario.preferencias.edad > 17);
};

const arrayCorreoYahoo = (array) => {
	return array.filter((usuario) => usuario.contacto.correoelectronico.includes('@yahoo.com'));
};

const arrayClaroMayoresEspanya = (array) => {
	return array.filter(
		(usuario) =>
			usuario.preferencias.tema === 'claro' &&
			usuario.preferencias.edad > 17 &&
			usuario.contacto.direccion.pais === 'España'
	);
};

//Comprobamos solo el teléfono ya que será el único dato opcional, el cual el usuario no puede tener
const arrayFaltaDato = (array) => {
	return array.filter((usuario) => usuario.contacto.telefono === '');
};

const arrayConApellidos = (array) => {
	return array.map((usuario) => ({
		...usuario,
		apellidos: 'No indicado',
	}));
};

const arrayConCodigo = (array) => {
	return array.map((usuario) => ({
		...usuario,
		contacto: {
			...usuario.contacto, //Añadimos el spread operator dentro de contacto porque para también añadir las claves, ya que si no se borran todas
			direccion: {
				...usuario.contacto.direccion, //Lo mismo que en contacto, si no lo ponemos se borran todas las claves anteriores
				codigo: '00000',
			},
		},
	}));
};

export {
	usuarios,
	insertarUsuario,
	arrayMayoresEdad,
	arrayCorreoYahoo,
	arrayClaroMayoresEspanya,
	arrayFaltaDato,
	arrayConApellidos,
	arrayConCodigo,
};
