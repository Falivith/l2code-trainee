DROP DATABASE IF EXISTS Banco;

CREATE DATABASE Banco;

USE Banco;

CREATE TABLE PESSOAS (
	ID				INT					NOT NULL,
	NOME			VARCHAR(20)			NOT NULL, 
	CONTRATO_ID 	INT                 NOT NULL, 
	INADIMPLENTE 	char				NOT NULL,
	DT_COMPLETO 	date,
    PRIMARY KEY(ID)
);

CREATE TABLE CONTRATOS (
	ID 				INT 		NOT NULL,
	VALOR_PARCELA 	INT			NOT NULL, 
	PARCELAS 		INT 		NOT NULL,
	PRIMARY KEY (ID)
);

CREATE TABLE PAGAMENTOS (
	ID				INT			NOT NULL,
    PESSOA_ID		INT 		NOT NULL,
    DT_PAGAMENTO	date		NOT NULL,
    PRIMARY KEY(ID),
    FOREIGN KEY (PESSOA_ID) REFERENCES PESSOAS (ID)
);

ALTER TABLE PESSOAS ADD FOREIGN KEY (CONTRATO_ID) REFERENCES CONTRATOS (ID);

INSERT INTO CONTRATOS VALUES
	(1, 150, 100),
	(2, 300, 48),
	(3, 550, 24),
	(4, 1000, 12);

INSERT INTO PESSOAS VALUES
	(1, 'Cristian Ghyprievy', 2, 'S', null),
	(2, 'Joana Cabel', 1, 'S', null),
	(3, 'John Serial', 3, 'S', null),
    (4, 'Michael Seven', 2, 'N', '2021-09-25');

INSERT INTO PAGAMENTOS VALUES
	(1, 4, '2021-09-01'),
	(2, 3, '2021-09-05'),
	(3, 1, '2021-09-19'),
	(4, 2, '2021-09-25');
    
-- A estratégia da consulta baseou-se em partir 
-- da tabela pagamentos, pois ela contém a chave
-- estrangeira para Pessoas, que contém a chave
-- estrangeira para Contratos. Então são feitos
-- os respectivos joins a partir dela. A função 
-- day() também é importante para a coluna dia_mes
-- ficar no modelo que foi pedido.

SELECT PESSOAS.NOME,
DAY(PAGAMENTOS.DT_PAGAMENTO) AS DIA_MES,
CONTRATOS.VALOR_PARCELA AS VALOR_PARCELA
FROM PAGAMENTOS
INNER JOIN PESSOAS ON PAGAMENTOS.PESSOA_ID = PESSOAS.ID
INNER JOIN CONTRATOS ON PESSOAS.CONTRATO_ID = CONTRATOS.ID
WHERE PESSOAS.INADIMPLENTE = 'S';

-- A estratégia da consulta baseou-se em partir 
-- da tabela PESSOAS, pois dela temos a chave 
-- estrangeira para CONTRATOS, que contém os dados 
-- que precisamos. Utilizamos da multiplicação 
-- na definição da tupla no select para extrair 
-- o valor total desejado. A condição IS NOT NULL
-- também é fundamental.

SELECT NOME, 
VALOR_PARCELA * PARCELAS AS VALOR_TOTAL
FROM PESSOAS
INNER JOIN CONTRATOS ON PESSOAS.CONTRATO_ID = CONTRATOS.ID
WHERE PESSOAS.DT_COMPLETO IS NOT NULL;