<?php
include '../php/db_connect.php';  // Asegúrate de que la ruta sea correcta

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $usuario = $_POST['usuario'];
    $password = $_POST['password'];

    // Consulta para obtener los datos del usuario
    $sql = "SELECT * FROM usuarios WHERE usuario = '$usuario'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $user = $result->fetch_assoc();

        // Verificar la contraseña
        if (password_verify($password, $user['password'])) {
            // Redirigir al usuario a ia.html en caso de inicio de sesión exitoso
            header("Location: ../index_login.html"); // Redirigir a la página ia.html en la carpeta html
            exit(); // Asegurarse de que el script se detenga después de la redirección
        } else {
            // Si la contraseña es incorrecta
            echo "Contraseña incorrecta.";
        }
    } else {
        // Si el usuario no está registrado
        echo "Usuario no registrado.";
    }

    // Cerrar la conexión a la base de datos
    $conn->close();
}
?>
