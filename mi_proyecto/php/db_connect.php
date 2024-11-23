<?php
$servername = "localhost";
$username = "root";
$password = "";
$database = "mi_proyecto_db"; // Nombre de la base de datos

// Crear conexión
$conn = new mysqli($servername, $username, $password, $database);

// Verificar conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}
?>
