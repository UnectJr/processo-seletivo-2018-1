<?php

$assunto = $_POST['assunto'];
$corpo	= "
	Assunto:" .$_POST['assunto']."
	Nome:"	.$_POST['nome']".
	Email:"	.$_POST['email']."
	Mensagem: ".$_POST['mensagem']."
	";

mail('bruno_daguano@hotmail.com', $assunto, $corpo, 'From: Unect');
echo"Seus Dados Foram Enviados";
?>