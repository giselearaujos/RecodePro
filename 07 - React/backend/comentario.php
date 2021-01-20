<?php

require"./Models/Contato.php";


$comentarios = new Comentarios;

$comentarios -> nome = $_POST['nome'];
$comentarios -> msg = $_POST['msg'];

$validate = $comentarios->registerComentarios();

if ($validate == true){
    echo json_encode(true);    
}else{
    echo json_encode(false);
}