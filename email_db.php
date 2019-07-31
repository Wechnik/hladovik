<?php
require_once "SendMailSmtpClass.php";

    $mailSMTP = new SendMailSmtpClass('deol.remont@yandex.ru', 'deol54998Qaz',
        'ssl://smtp.yandex.ru', 'Новая заявка', 465);

    $headers= "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/html; charset=utf-8\r\n";
    $headers .= "From: Новая заявка <support@diol.com>\r\n";

    if(empty($_POST['text']))
        $message = "Внимание, поступила заявка от: \n" . $_POST['name'] . ". \n" . "Номер телефона: \n". $_POST['phone'];
    else
        $message = "Внимание, от пользовтеля: \n" . $_POST['name'] . " поступило сообщение: \n" . $_POST['text'] . ". \n"  .
            "Номер телефона: \n". $_POST['phone'] . "";

    $message = wordwrap($message, 70, "\r\n");
    $mailSMTP->send('holodilniki54@gmail.com', 'gmail', $message, $headers);
    //$mailSMTP->send('vvechnik@gmail.com', 'gmail', $message, $headers);


?>