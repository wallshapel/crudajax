const expresiones = {
	usuario: /^[a-zA-Z][a-zA-Z0-9_-]{8,20}$/, // Letras, numeros, guión y guión_bajo. Como primer caracter solo permite letras.
	pass: /^.{6,20}$/ // 6 a 20 caracteres.
	//nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.	
	//correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	//telefono: /^\d{7,14}$/ // 7 a 14 números.
}
const campos = {
	usuario: false,
	pass: false
}
function validarCampos(input) {
	if (input.name == 'usuario') {
		if (expresiones.usuario.test(input.value)) {
			campos.usuario = true;
			inputCorrectoIncorrecto(input, true);
		} else {	
			campos.usuario = false;
			inputCorrectoIncorrecto(input, false);
		}
	}
	if (input.name == 'pass') {
		if (expresiones.pass.test(input.value)) {
			campos.pass = true;
			inputCorrectoIncorrecto(input, true);		
		} else {
			campos.pass = false;
			inputCorrectoIncorrecto(input, false);	
		}
	}
}
function validarFormulario() {
	let cont = 0;
	if (expresiones.name.test(document.getElementById('usuario').value))
		++cont;
	else {
		--cont;
		inputCorrectoIncorrecto(document.getElementById('usuario'), false);
	}
	if (expresiones.name.test(document.getElementById('pass').value))
		++cont;
	else {
		--cont;
		inputCorrectoIncorrecto(document.getElementById('pass'), false);
	}
	if (cont == 2) {
		cont = 0;		
		return true;
	} else
		return false;
}
function inputCorrectoIncorrecto(input, estado) {
	if (estado) {
		input.classList.remove('inputIncorrecto');
		input.classList.add('inputCorrecto');
	} else {
		input.classList.remove('inputCorrecto');
		input.classList.add('inputIncorrecto');	
	}
}
