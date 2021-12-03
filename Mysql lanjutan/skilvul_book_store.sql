CREATE DATABASE skilvulbookstore;
USE skilvulbookstore;
CREATE TABLE penerbit(
id INT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
nama VARCHAR(50) NULL,
kota VARCHAR(50) NULL
);

INSERT INTO penerbit(id,nama,kota)
VALUES
(001, 'Qimora','Tarutung'),
(002, 'Ronika','Balige'),
(003, 'Delima','Makasar'),
(004, 'Silvany','Medan');
SELECT * FROM penerbit;

CREATE TABLE penulis(
id INT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
nama VARCHAR(50) NULL,
kota VARCHAR(50) NULL
);

INSERT INTO penulis(id,nama,kota)
VALUES
(4, 'Desi','Bandung'),
(2, 'Mita','Pematangsiantar'),
(3, 'Sinta','Makasar'),
(4, 'Sandra','Medan');
SELECT * FROM penulis;


CREATE TABLE buku(
id INT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
ISBN VARCHAR(50) NULL,
judul VARCHAR(50) NULL,
penulis INT(50) NULL,
penerbit INT(10) NULL,
harga INT(10) NULL,
stock INT(10) NULL,
CONSTRAINT FK_Penerbit FOREIGN KEY(penerbit) REFERENCES penerbit(id) ON UPDATE CASCADE ON DELETE CASCADE,
CONSTRAINT FK_Penulis FOREIGN KEY(penulis) REFERENCES penulis(id) ON UPDATE CASCADE ON DELETE CASCADE
);
INSERT INTO buku(id,ISBN,judul,penulis,penerbit,harga,stock)
VALUES
(1, 123465,'Belajar HTML',1,3,35000,20),
(2, 448468,'Belajar CSS',2,2,5000,15),
(3, 165886,'Belajar Javascript',3,1,100000,4);
SELECT * FROM buku;

SELECT * FROM buku INNER JOIN penerbit ON buku.penerbit = penerbit.id;
SELECT * FROM buku LEFT JOIN penerbit ON buku.penerbit = penerbit.id;
SELECT * FROM buku RIGHT JOIN penerbit ON buku.penerbit = penerbit.id;
SELECT MAX(harga) FROM buku WHERE stock < 10;
SELECT MIN(harga) FROM buku;
SELECT COUNT(id) FROM buku WHERE harga < 10000;


SHOW TABLES;
DESC buku;

DROP TABLE buku;
SHOW DATABASES;