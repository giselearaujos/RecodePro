<?php

require "Connection.php";


class Produto
{   
    public $idproduto; 
    public $nomeProduto;
    public $descricao;
    public $preco;
    public $preco_venda;
    public $imagem;

    public static function getAll()
    {
        $connection = Connection::getDb();

        $stmt = $connection->query("SELECT * FROM produto");
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
}