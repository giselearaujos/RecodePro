<?php

require "./Models/Contato.php";

header("Access-Control-Allow-Origin:*");  // Permite que outras aplicações consumam a api
header("Content-type: application/json");  //Indicação de arquivo JSON

$comentarios = Comentarios::getAll();

print_r(json_encode($comentarios));


