const BASE = 'http://localhost/crudajax/';
const guardarEditar = document.getElementById('guardarEditar');
	const guardar = document.getElementById('divGuardar');
	const resultadosValidacion = document.getElementById('resultadosValidacion');
const tabla = document.getElementById('tabla');
listar();
guardarEditar.addEventListener('click', (e) => {
	const click = e.target.id;
	if (click == 'nuevo') 
		ajax('GET', BASE + 'nuevo', guardar);	
	if (click == 'guardar') {
		e.preventDefault();
		if (!validarFormulario())
			return false;	
		const formularioG = document.getElementById('formularioG');	
		const fd = new FormData(formularioG);
		const xhr = new XMLHttpRequest();
		xhr.open('POST', BASE + 'guardar');
		xhr.send(fd);
		xhr.onload = () => {			
			const respuesta = xhr.responseText;
			if (respuesta.substring(0, 1) == '1') {
				resultadosCRU(1, formularioG);	
				resetInputs();
			} else 				
				resultadosCRU(0, null, respuesta);	
		};	
	}
	if (click == 'actualizar') {
		e.preventDefault();
		if (!validarFormulario())
			return false;	
		const formularioE = document.getElementById('formularioE');	
		const fd = new FormData(formularioE);
		const xhr = new XMLHttpRequest();
		xhr.open('POST', BASE + 'guardar');
		xhr.send(fd);
		xhr.onload = () => {
			const respuesta = xhr.responseText;
			if (respuesta.substring(0, 1) == '1') {
				resultadosCRU(1, formularioE);	
				resetInputs();
			} else 				
				resultadosCRU(0, null, respuesta);	
		};	
	}	
	function resultadosCRU(resultado, formulario = null, respuesta = null) {
		resultadosValidacion.style.display = 'block';
		if (resultado == 1) {
			resultadosValidacion.innerHTML = 'Cambios guardados.';	
			resultadosValidacion.classList.remove('resultadosValidacion1');
			resultadosValidacion.classList.add('resultadosValidacion0');
			formulario.reset();
			listar();
		} else {
			resultadosValidacion.innerHTML = respuesta;	
			resultadosValidacion.classList.remove('resultadosValidacion0');
			resultadosValidacion.classList.add('resultadosValidacion1');
		}
	}
	const tipoDeElemento = e.target.tagName;
	if (click == 'resultadosValidacion' || tipoDeElemento == 'UL' || tipoDeElemento == 'LI') {
		resultadosValidacion.innerHTML = '';
		resultadosValidacion.style.display = 'none';
	}
	function resetInputs() {
		document.getElementById('usuario').classList.remove('inputCorrecto');
		document.getElementById('pass').classList.remove('inputCorrecto');
	}
});
guardarEditar.addEventListener('keyup', (e) => {
	const input = e.target;
	validarCampos(input);
});
guardarEditar.addEventListener('focusout', (e) => {
	const input = e.target.id;
	validarCampos(input);
});
tabla.addEventListener('click', (e) => {
	const click = e.target.id;
	if (click.substring(0, 6) == 'editar') {
		const id = click.substring(6);
		ajax('GET',  BASE + 'editar/' + id, guardar);
	}
	if (click.substring(0, 8) == 'eliminar') {
		const id = click.substring(8);
		ajax('GET', BASE + 'eliminar/' + id, tabla);
		resultadosValidacion.style.display = 'block';
		resultadosValidacion.innerHTML = 'Usuario Eliminado.';	
		resultadosValidacion.classList.remove('resultadosValidacion1');
		resultadosValidacion.classList.add('resultadosValidacion0');
	}	
});
function listar() {
	ajax('GET', BASE + 'listar', tabla);
}