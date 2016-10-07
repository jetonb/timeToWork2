<?php
if(isset($_POST['email']) && isset($_POST['password']) )
{
    $user = $_POST['email'];
    $passwd = $_POST['password'];
    
    $dbconnection = mysqli_connect('160.153.153.4', 'testbenutzer', 'kokosnuss', 'dtimetowork');
    
    $daten = mysqli_query($dbconnection, "select * from TMitarbeiter where MitaEmail = '$user' AND MitaPasswort = '$passwd'");

    //$daten = mysqli_query($dbconnection, "select * from TMitarbeiter where MitaEmail = 'hallo' AND MitaPasswort = 'hallo'");
    if (mysqli_num_rows($daten) == 1)
    {
        echo 'success';
    }
    else 
    {
        echo 'failed';
    }
    //echo "select * from 'TMitarbeiter' where 'MitaEmail' = '$user' AND 'MitaPasswort' = '$passwd'";
}




