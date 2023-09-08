<?php
    include 'conexion_be.php';

    $nombre_completo = $_POST["nombre"];
    $contrasena = $_POST["password"];
    $correo = $_POST["correo"];
    $telefono = $_POST["telefono"];
    $usuario = $_POST["usuario"];

    $query = "INSERT INTO usuario(Nombre_Completo, Contrasena, CorreoElectronico, Telefono, Usuario)
              VALUES ('$nombre_completo','$contrasena','$correo','$telefono','$usuario')";

    $ejecutar = mysqli_query($conexion, $query);
    
    if($ejecutar){
        echo '
            <script>
                alert("Usuario almacenado exitosamente");
                window.location = "../registro.html";
            </script>
        ';
    }else{ 
        echo '
            <script>
                alert("Intentalo de nuevo usuario NO almacenado");
                window.location = "../registro.html";
            </script>
        ';
    }
    mysquli_close($conexion);
?>