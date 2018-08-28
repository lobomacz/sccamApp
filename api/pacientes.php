<?php 
	include 'funciones.php';

	$opcion = $_GET["opcion"];
	switch ($opcion) {
		case '1':
			$sql = "SELECT * FROM paciente";
			echo getSQL($sql);
			break;

		

		default:
			# code...
			break;
	}
?>