<?php

$host = "localhost";
$user = "root";
$pass = "";
$banco = "unect";
$conexao = mysqli_connect($host, $user, $pass, $banco);

mysqli_set_charset($conexao, 'utf8');

if($conexao->connect_error){
	die("Falha ao realizar a conexão: ". $conexao->connect_error);
}

?>