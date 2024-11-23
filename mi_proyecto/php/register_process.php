<?php
include 'db_connect.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $primer_nombre = $_POST['primer_nombre'];
    $segundo_nombre = $_POST['segundo_nombre'];
    $primer_apellido = $_POST['primer_apellido'];
    $segundo_apellido = $_POST['segundo_apellido'];
    $correo = $_POST['correo'];
    $telefono = $_POST['telefono'];
    $edad = $_POST['edad'];
    $tipo_documento = $_POST['tipo_documento'];
    $numero_documento = $_POST['numero_documento'];
    $departamento = $_POST['departamento'];
    $municipio = $_POST['municipio'];
    $numero_carnet = $_POST['numero_carnet'];
    $usuario = $_POST['usuario'];
    $password = $_POST['password'];
    $confirm_password = $_POST['confirm_password'];

    // Verificar que las contraseñas coincidan
    if ($password !== $confirm_password) {
        die("Las contraseñas no coinciden.");
    }

    // Determinar agrupación según la edad
    if ($edad < 18) {
        $agrupacion = 'Juvenil';
    } elseif ($edad >= 18 && $edad < 60) {
        $agrupacion = 'Socorrista';
    } else {
        $agrupacion = 'Dama Gris';
    }

    // Hash de la contraseña
    $hashed_password = password_hash($password, PASSWORD_DEFAULT);

    // Verificar si ya existe un registro con el mismo correo, número de documento o nombre de usuario
    $sql_check = "SELECT * FROM usuarios WHERE correo = ? OR numero_documento = ? OR usuario = ?";
    $stmt_check = $conn->prepare($sql_check);
    $stmt_check->bind_param("sss", $correo, $numero_documento, $usuario);
    $stmt_check->execute();
    $result_check = $stmt_check->get_result();

    // Si hay resultados, significa que el usuario ya existe
    if ($result_check->num_rows > 0) {
        die("Error: Ya existe un usuario con ese correo, número de documento o nombre de usuario.");
    }

    // Si no existe, insertar el nuevo usuario
    $sql_insert = "INSERT INTO usuarios (primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, correo, telefono, edad, agrupacion, tipo_documento, numero_documento, departamento, municipio, numero_carnet, usuario, password) 
                    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    $stmt_insert = $conn->prepare($sql_insert);
    $stmt_insert->bind_param("ssssssisissssss", $primer_nombre, $segundo_nombre, $primer_apellido, $segundo_apellido, $correo, $telefono, $edad, $agrupacion, $tipo_documento, $numero_documento, $departamento, $municipio, $numero_carnet, $usuario, $hashed_password);

    if ($stmt_insert->execute()) {
        header("Location: ../html/login.html");
    } else {
        echo "Error: " . $stmt_insert->error;
    }

    $conn->close();
}
?>
