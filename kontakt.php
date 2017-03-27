<?php


$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$odkogo = "muzyczniodkrywcy@atiart.pl";
$dokogo = "violin.atiart@gmail.com";
$tytul = "Formularz kontaktowy z atiart.pl";

$wiadomosc = "";
$wiadomosc .= "Imie i nazwisko: " . $name . "\n";
$wiadomosc .= "Email: " . $email . "\n";
$wiadomosc .= "Wiadomość: " . $message . "\n";

$naglowek = "";
$naglowek .= "Od:" . $odkogo . " \n";
$naglowek .= "Content-Type:text/plain;charset=utf-8";

$sukces = mail($dokogo, $tytul, $wiadomosc, $naglowek);

if ($sukces){
	print "<meta http-equiv=\"refresh\" content=\"0;URL=potwierdzenie.html\">";
}
else{
	print "<meta http-equiv=\"refresh\" content=\"0;URL=error.html\">";
}
?>