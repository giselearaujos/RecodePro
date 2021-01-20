<?php

require "./Models/Produto.php";

header("Access-Control-Allow-Origin:*");  // Permite que outras aplicações consumam a api
header("Content-type: application/json");  //Indicação de arquivo JSON

$produto = Produto::getAll();

print_r(json_encode($produto));
