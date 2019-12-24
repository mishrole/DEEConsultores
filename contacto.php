<?php

    $to = "mitchell.rodriguez@deeconsultores.pe";
    $subject = "[deeconsultores.pe] Mensaje de Contacto";

    $name = $_POST["name"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $message = $_POST["message"];

    $body  = "Nombre: ".$name."<br>"."Email: ".$email."<br>"."Teléfono: ".$phone."<br>"."Mensaje:"."<br><br>".$message;
    $mail = $_POST['email'];
    $header = 'Content-Type: text/html; charset=UTF-8; From: ' . $mail;

    mail($to, $subject, $body, $header);
    //header("Location: contacto.html?enviado");

	//$EMAIL_CONTACTO = "manuel_chc@yahoo.com";
	//mail("contacto@deeconsultores.pe", "[Web site de DEE] Solicitud de Contacto", $EMailMensaje,"From: ".$HTTP_POST_VARS["email"]."\nReply-To: ".$HTTP_POST_VARS["email"]."\n");
	//mail("mitrodle@gmail.com", "[Web site de DEE] Solicitud de Contacto", $EMailMensaje,"From: ".$HTTP_POST_VARS["email"]."\nReply-To: ".$HTTP_POST_VARS["email"]."\n");
?>