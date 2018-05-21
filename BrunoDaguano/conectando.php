<?php

include("conecta.php");

$nome = $_POST['nome'];
$email = $_POST['email'];
$assunto = $_POST['assunto'];
$mensagem = $_POST['message'];

$sql = "INSERT INTO mensagem (nome, email, assunto, mensagem) VALUES";
$sql .= "('$nome', '$email', '$assunto', '$mensagem')";

	if($conexao->query($sql) == TRUE){
		$redirencionar = "index.html";
		header("location: $redirencionar");
	}
	else{
		echo "Erro: " .$sql . "<br>" . $conexao->error;
	}

echo "<p id = 'mensagem'>" .$mensagem. "</p>";

$conexao->close();

?> 

