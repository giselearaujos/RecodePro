<?php

    require "./Models/Usuarios.php";
    

    header("Access-Control-Allow-Origin:*");
    header("Content-Type: application/json");

    $usuario = Usuarios :: getAll();

    echo json_encode($usuario);
?>