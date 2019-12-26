<?php

    $to = "contacto@deeconsultores.pe";
    $subject = "[deeconsultores.pe] Mensaje de Contacto";

    $name = $_POST["name"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $message = $_POST["message"];

    $body  = "Nombre: ".$name."<br>"."Email: ".$email."<br>"."Teléfono: ".$phone."<br>"."Mensaje:"."<br><br>".$message;
    $mail = $_POST['email'];
    $header = 'Content-Type: text/html; charset=UTF-8; From: ' . $mail;

    mail($to, $subject, $body, $header);
    
?>