<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = htmlspecialchars($_POST['nombre']);
    $correo = htmlspecialchars($_POST['correo']);
    $telefono = htmlspecialchars($_POST['telefono']);
    $asunto = htmlspecialchars($_POST['asunto']);
    $descripcion = htmlspecialchars($_POST['descripcion']);

    // Mensaje para el cliente
    $mensaje_cliente = "Hola $nombre,\n\nHemos recibido tu petición con el asunto: $asunto.\n\nNos pondremos en contacto contigo a la brevedad posible.\n\nGracias,\nEl equipo de Smoke Unlimited.";

    // Mensaje para ti
    $mensaje_ti = "Nombre: $nombre\nCorreo: $correo\nTeléfono: $telefono\nAsunto: $asunto\nDescripción:\n$descripcion";

    // Títulos de los correos
    $titulo_cliente = "Hemos recibido tu petición";
    $titulo_ti = "Nueva petición de contacto";

    // Encabezados para el correo al cliente
    $headers_cliente = "From: smokeunlimited@gmail.com";

    // Encabezados para el correo a ti
    $headers_ti = "From: $correo";

    // Enviar correo al cliente
    mail($correo, $titulo_cliente, $mensaje_cliente, $headers_cliente);

    // Enviar correo a ti
    mail("smokeunlimited@gmail.com", $titulo_ti, $mensaje_ti, $headers_ti);

    // Redirigir a una página de agradecimiento
    header("Location: gracias.html");
    exit();
}
?>