<?php
$name = $_POST['name'];
$visitor_email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$email_form = 'rzszgr@o2.pl';

$email_subject = 'New Form Submission';

$email_body = "User Name: $name.\n".
                "User Email: $visitor_email.\n".
                "Subject: $subject.\n".
                "User Message: $message.\n";

$to = 'rzszgr@o2.pl';

$headers = "From: $email_from \r\n";

$headers .= "Reply-To: $visitor_email \r\n"

mail($to,$email_subject,$email_bod,$headers);

header("Location: Kontakt.html");
?>