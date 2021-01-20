<?php

require "Connection.php";


class Comentarios

{
    public $id;
    public $nome;
    public $msg;
    public $data;

    public static function getAll()
    {
        $connection = Connection::getDb();

        $stmt = $connection->query("SELECT * FROM comentarios");
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
    public function registerComentarios(){
        $connection = Connection::getDb();

        $sql = $connection -> query("insert into comentarios (nome,msg) values('$this->nome','$this->msg')");

        if ($sql -> rowCount()>0){
            return true;
        }else{
            return false;
        }
    }


}