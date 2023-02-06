const expresiones = {
	usuario: /^[a-zA-Z][a-zA-Z0-9_-]{8,20}$/, // Letras, numeros, guión y guión_bajo. Como primer caracter solo permite letras.
	pass: /^.{6,20}$/ // 6 a 20 caracteres.
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
	if (campos.usuario)
		++cont;
	else {
		--cont;
		inputCorrectoIncorrecto(document.getElementById('usuario'), false);
	}
	if (campos.pass)
		++cont;
	else {
		--cont;
		inputCorrectoIncorrecto(document.getElementById('pass'), false);
	}
	if (cont == 2) {
		cont = 0;		
		return true;
	} else {
		console.log('Aún no puedes');
		return false;
	}
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
