<form action="#" method="post" name="formularioE" id="formularioE">
	<input type="hidden" name="id" value="<?=$usuario['id'];?>">
	<div>
		<label for="usuario">Usuario: </label>
		<input type="text" name="usuario" id="usuario" value="<?=$usuario['usuario'];?>">
	</div>
	<div>
		<label for="pass">Contraseña: </label>
		<input type="text" name="pass" id="pass" value="<?=$usuario['pass'];?>">
	</div>
	<div>
		<input type="submit" value="Actualizar" id="actualizar">
	</div>	
</form>