<?php
// Configuración de la base de datos
$servername = "localhost";
$username = "root";  // En XAMPP, el usuario por defecto es 'root'.
$password = "";      // En XAMPP, la contraseña por defecto está vacía.
$dbname = "mi_proyecto_db";  // Nombre de la base de datos

// Crear la conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Comprobar si hay un error en la conexión
if ($conn->connect_error) {
    die(json_encode(['message' => 'Conexión fallida: ' . $conn->connect_error]));
}

// Recibir los datos del formulario
$edad = $_POST['edad'];
$genero = $_POST['genero'];
$hipertenso = $_POST['hipertenso'];
$corazon = $_POST['corazon'];
$casado = $_POST['casado'];
$trabajo = $_POST['trabajo'];
$residencia = $_POST['residencia'];
$glucosa = $_POST['glucosa'];
$imc = $_POST['imc'];
$fumador = $_POST['fumador'];

// Insertar los datos en la base de datos
$sql = "INSERT INTO salud (edad, genero, hipertenso, corazon, casado, trabajo, residencia, glucosa, imc, fumador) 
        VALUES ('$edad', '$genero', '$hipertenso', '$corazon', '$casado', '$trabajo', '$residencia', '$glucosa', '$imc', '$fumador')";

if ($conn->query($sql) === TRUE) {
    echo json_encode(['message' => 'Datos guardados exitosamente.']);
} else {
    echo json_encode(['message' => 'Error al guardar los datos: ' . $conn->error]);
}

// Cerrar la conexión
$conn->close();
?>
