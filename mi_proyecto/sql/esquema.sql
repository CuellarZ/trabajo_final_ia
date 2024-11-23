CREATE DATABASE mi_proyecto_db;

USE mi_proyecto_db;

CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    primer_nombre VARCHAR(50) NOT NULL,
    segundo_nombre VARCHAR(50),
    primer_apellido VARCHAR(50) NOT NULL,
    segundo_apellido VARCHAR(50) NOT NULL,
    correo VARCHAR(100) NOT NULL UNIQUE,
    telefono VARCHAR(15) NOT NULL,
    edad INT NOT NULL,
    agrupacion ENUM('Juvenil', 'Socorrista', 'Voluntario de Apoyo', 'Administrativo', 'Invitado', 'Dama Gris', 'Edad Dorada') NOT NULL,
    tipo_documento ENUM('Cédula de Ciudadanía', 'Tarjeta de Identidad', 'Cédula de Extranjería', 'Pasaporte') NOT NULL,
    numero_documento VARCHAR(20) NOT NULL UNIQUE,
    departamento VARCHAR(50) NOT NULL,
    municipio VARCHAR(50) NOT NULL,
    numero_carnet VARCHAR(20) NOT NULL UNIQUE,
    usuario VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);
