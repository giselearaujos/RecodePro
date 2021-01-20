<?php
    require "./Models/Usuarios.php";

    

    $usuario = new Usuarios;
    $usuario->idProduto = $_POST['idProduto'];
    $usuario->nome = $_POST['nome'];
    $usuario->sobrenome = $_POST['sobrenome'];
    $usuario->cpf = $_POST['cpf'];
    $usuario->cep = $_POST['cep'];
    $usuario->telefone = $_POST['telefone'];
    $usuario->email = $_POST['email'];

    $validate = $usuario->registrarUsuario();

    if($validate == true){
        echo json_encode(true);
    }else{
        echo json_encode(false);
    }
?>