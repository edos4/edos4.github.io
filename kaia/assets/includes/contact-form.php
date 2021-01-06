<?php



$string = file_get_contents("config.json");

$option = json_decode($string);



define("MAIL_HOST", $option->MAIL_HOST);

$name = "";
$email= "";
$phone = "";
$mes = "";
$message = "";

define("MAIL_TITLE", $option->MAIL_TITLE);

if (isset($_POST['name'])) {
    $name = $_POST['name'];
    $message = "<h3>Name: " . $name . "</h3>";
}

if (isset($_POST['email'])) {
    $email = $_POST['email'];
    $message .= "<h3>Email: </h3><p>" . $email . "</p>";
}
if (isset($_POST['mes'])) {
    $mes = $_POST['mes'];
    $message .= "<h3>Comments: " . $mes . "</h3>";
}

if (isset($_POST['phone'])) {
    $phone = $_POST['phone'];
    $message .= "<h3>Phone Number: </h3><p>" . $phone . "</p>";
}

if( isset($_POST['name']) && isset($_POST['email']) && isset($_POST['phone']) && isset($_POST['mes']) ){


    if (MAIL_HOST != null) {

        $to = MAIL_HOST;

    } else {

        $to = "trieuau@gmail.com";

    }

    $from = $email;

    if (MAIL_TITLE != null) {

        $subject = MAIL_TITLE;

    } else {

        $subject = '[Edumat] Contact Form Message';

    }

    $headers = "From: $from\n";

    $headers .= "MIME-Version: 1.0\n";

    $headers .= "Content-type: text/html; charset=iso-8859-1\n";

    if( mail($to, $subject, $message, $headers) ) {

        $serialized_data = '{"type":"success", "message":"Contact form successfully submitted. Thank you, I will get back to you soon!"}';

        echo $serialized_data;

    } else {

        $serialized_data = '{"type":"danger", "message":"Contact form failed. Please send again later!"}';

        echo $serialized_data;

    }
}

