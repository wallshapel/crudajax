<table>
	<thead>
		<tr>
			<th>Usuario</th>
			<th>Contraseña</th>
			<th>Editar</th>
			<th>Eliminar</th>
		</tr>
	</thead>
	<tbody>	
		<?php foreach ($usuarios as $usuario) { ?>
		<tr>
			<td><?=$usuario['usuario'];?></td>
			<td><?=$usuario['pass'];?></td>
			<td><button id="editar<?=$usuario['id'];?>">Editar</button></td>
			<td><button id="eliminar<?=$usuario['id'];?>">Eliminar</button></td>
		</tr>
		<?php } ?>
	</tbody>
</table>