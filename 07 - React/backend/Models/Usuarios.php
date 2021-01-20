<?php
    require "Connection.php";
    

    class Usuarios 
    {
        public $idUsuario;
        public $idProduto;
        public $nome;
        public $sobrenome;
        public $cpf;
        public $cep;
        public $telefone;
        public $email;

        public static function getAll()
        {
            $conn = Connection :: getDB();

            $sql = "SELECT p.categoria, p.imagem, p.preco_venda,u.nome,u.sobrenome,u.email
                            FROM produto as p
                            JOIN usuario AS u
                             ON p.idproduto = u.idUsuario";
            
            $resp = $conn->query($sql);
            return $resp->fetchAll(PDO::FETCH_ASSOC);
        }

        public function registrarUsuario(){
            $conn = Connection::getDB();

            $sql = $conn->query("INSERT INTO usuario (idProduto, nome, sobrenome,cpf,cep, telefone, email)VALUES('$this->idProduto','$this->nome', '$this->sobrenome', '$this->cpf','$this->cep','$this->telefone','$this->email')");

            if($sql ==true ){
                return true;
            }else {
                return false;
            }
        }
    }
?>