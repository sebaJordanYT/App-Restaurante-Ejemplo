<?php
//Conecto mi form con el server a traves de los name
$nombre = $_POST['name'];
$mail = $_POST['email'];
$mensaje = $_POST['message'];


//Como se envia el cuerpo del mail
$mensaje = "Este mensaje fue enviado por " . $nombre . ",\r\n";
$mensaje .= "Su email es: " . $mail . " \r\n";
$mensaje .= "Mensaje: " . $_POST['message'] . " \r\n";
$mensaje .= "Enviado el " . date('d/m/Y', time());

$para = 'sebastianjordanyt@gmail.com'; //El mail a donde llegan los mensajes
$asunto = "Mensaje del sitio web de pizzas"; //El asunto de los mail que llegan

//Funcion que envia correo, orden: a quien va, titulo, mensaje, header
mail($para, $asunto, utf8_decode($mensaje), $header);

//A este lugar se redirige al usuario al llenar el form, aca podria redirigir a otra pagina
header('Location:index.html');
?>