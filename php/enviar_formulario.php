<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST['nombre'];
    $telefono = $_POST['telefono'];
    $email = $_POST['email'];
    $asunto = $_POST['asunto'];
    $descripcion = $_POST['descripcion'];
    
    $to = "smokeunlimited@gmail.com";
    $subject = "Formulario de Contacto: $asunto";
    $message = "
    Nombre: $nombre\n
    Teléfono: $telefono\n
    Correo Electrónico: $email\n
    Asunto: $asunto\n
    Descripción:\n$descripcion
    ";
    $headers = "From: $email";

    if (mail($to, $subject, $message, $headers)) {
        echo "Correo enviado con éxito.";
    } else {
        echo "Hubo un error al enviar el correo.";
    }
}
?>
