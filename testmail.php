<?php

$destinatario = "lepandr94@live.com";
$soggetto = "Informazioni Contatti";
$messaggio = " ";

 $first_name = $_POST['inputNome'];
 $email_from = $_POST['inputEmail']; 
 $object = $_POST['inputObject']; 
 $comments = $_POST['textMessaggio']; 

$headers = 'From: '.$email_from."\r \n";
$headers .= "MIME-Version: 1.0\n";
$headers .= "Content-Type: text/html; charset=\"utf-8\"\n";
$headers .= "Content-Transfer-Encoding: 7bit\n\n";

$messaggio = "<html><body><p><b>Nome:</b> $first_name <br><b>Oggetto:</b> $object <br> <b>Richiesta:</b> $comments <br> 
					</p></body></html>";

mail($destinatario, $soggetto, $messaggio, $headers);
?>


<!DOCTYPE html>
<!--[if lt IE 7 ]> <html class="ie ie6 no-js" lang="it"> <![endif]-->
<!--[if IE 7 ]>    <html class="ie ie7 no-js" lang="it"> <![endif]-->
<!--[if IE 8 ]>    <html class="ie ie8 no-js" lang="it"> <![endif]-->
<!--[if IE 9 ]>    <html class="ie ie9 no-js" lang="it"> <![endif]-->
<!--[if gt IE 9]><!--><html class="no-js" lang="it"><!--<![endif]-->
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"> 
        <title>DeQuadra Conferma Email</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
        <meta name="description" content="email" />
        <meta name="keywords" content="email" />
        <meta name="author" content="MIchele Ruta" />
        <link rel="shortcut icon" href="../favicon.ico"> 
        <link rel="stylesheet" type="text/css" href="css/style_mail.css" />
       
    </head>
    
    <body id="page">
    
      <div id="risposta">
       <a href="index.html"><img id="logo-home" src="images/logo.jpg"></a>
       <p>La vostra e-mail e' stata inviata correttamente.<br>Grazie per averci contattato, vi risponderemo al piu' presto.</p>
       <img id="mail" src="images/Red-Mail-Icon.png">
       <br>  
       <button id="bottone" name="indietro" onclick="location.href='http://dequadra.it/index.html'">Indietro</button>   
      </div>
  
    </body>
</html> 


 



 
