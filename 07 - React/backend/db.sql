create database fseletro;

use fseletro;

create table if not exists produto(
idproduto int not null auto_increment,
categoria VARCHAR(45) not null,
descricao VARCHAR(150) not null,
preco decimal (8,2),
preco_venda decimal(8,2),
imagem VARCHAR (100),
primary key (idproduto)
)default charset = utf8;



insert into produto (categoria,descricao,preco,preco_venda,imagem) values
('geladeira','Geladeira Frost Free Brastemp Side Inverse','3000.00','2000.00','img/gel_brastemp_frost.png'),
('geladeira','Geladeira Brastemp Frost Free Branca 350L','5000.00','4000.00','img/gel_brastemp_side.png'),
('geladeira','Geladeira Brastemp Frost Free Duplex 375 litros','6000.00','5500.00','img/gel_consul_prata.png'),
('fogao','Fogão 4 bocas Consul Inox com mesa de vidro','2000.00','1000.00','img/fog_consul_inox.png'),
('fogao','Fogão 4 bocas Atlas Monaco','2000.00','1000.00','img/fog_atlas_monaco.png'),
('microondas','Micro-ondas Consul Inox 32L 220v','2000.00','1300.00','img/micro_consul_inox.png'),
('microondas','Micro-ondas Philco Espelhado 25L 220v','2500.00','1000.00','img/micro_eletrolux_bco.jpg'),
('microondas','Micro-ondas Eletrolux Branco de 20L','1100.00','1000.00','img/micro_philco_espelhado.png'),
('lavadoura','Lavadoura de Roupas Brastemp 11kg','1500.00','1100.00','img/lavadora_brastemp.png'),
('lavadoura','Lavadoura de Roupas Philco Inverter 12kg','3000.00','2800.00','img/lavadora_philco_inverter.png'),
('lavaLouca','Lava-Louças Eletrolux Inox com 10 serviços','2890.00','2600.00','img/lava_louca_brastemp.png'),
('lavaLouca','Lava-Louças Brastemp compacta 8 serviços','3000.00','2800.00','img/lava_louca_eletrolux.jpg');


SELECT * FROM produto;

create table comentarios(
id int auto_increment,
nome VARCHAR(100),
msg VARCHAR(300),
data datetime default now(),
primary key (id)
);

TRUNCATE TABLE comentarios;
SELECT * FROM comentarios;

create TABLE usuario(
    idUsuario int auto_increment primary key,
    idProduto int NOT NULL,
    nome VARCHAR (25) NOT NULL,
    sobrenome VARCHAR(25) NOT NULL,
    cpf VARCHAR(25) NOT NULL,
    cep INT(50) NOT NULL,
    telefone BIGINT(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    FOREIGN KEY (idProduto) REFERENCES produto (idproduto)
);
INSERT INTO usuario (idProduto,nome,sobrenome,cpf,cep,telefone,email)
 VALUE
 (1,"Vitoria","VIVI","235.123.123-12",22236236,33333333,"vivi@vivi.com.br")
 (11,"Bruno","Santos","235.123.123-12",22236236,33333333,"brunosanot@sdf.com.br"),
(12,"Antonia","Pereiras","235.123.123-12",22236236,33333333,"antsanot@sdf.com.br"),
(6,"Cesar","Silva","235.123.123-12",22236236,33333333,"cesaosanot@sdf.com.br"),
(2,"Catia","Veronia","235.123.123-12",22236236,33333333,"catiasanot@sdf.com.br"),
(7,"Tomas","Barbara","235.123.123-12",22236236,33333333,"tomasosanot@sdf.com.br"),
(9,"Breno","Jamil","235.123.123-12",22236236,33333333,"brenoosanot@sdf.com.br"),
(8,"Daiane","Ferrareto","235.123.123-12",22236236,33333333,"daiaosanot@sdf.com.br"),
(3,"Fernanda","Leonelo","235.123.123-12",22236236,33333333,"fernansanot@sdf.com.br");


;

TRUNCATE TABLE usuario;
SELECT * FROM usuario;


SELECT p.categoria AS Categoria ,p.imagem AS Imagem,
       p.preco_venda AS Total, u.sobrenome AS Sobrenome,
       u.email AS Email
FROM produto AS p 
     JOIN usuario AS u
     On p.idproduto =u.idProduto
