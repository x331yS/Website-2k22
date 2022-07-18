<?php
$firstName = $_POST['firstName'];
$lastName = $_POST['lastName'];
$visitor_email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$email_form = 'florianlejosne@website.com';

$email_subject = 'Email from Your website';

$email_body = "User Name : $firstName , $lastName.\n".
                "User Email : $visitor_email.\n".
                    "Subject : $subject.\n".
                        "Message : $message.\n";

$to = 'florian.lejosne@ynov.com';

$headers = "From: $email_form \r\n";

$headers .= "Reply-To: $visitor_email \r\n";

mail($to,$email_subject,$email_body,$headers);

header("Location: send.html");

?>