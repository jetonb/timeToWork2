<?php
if(isset($_POST['email']) && isset($_POST['time'])  && isset($_POST['date'])  && isset($_POST['art']))
{
    $user = $_POST['email'];
    $passwd = $_POST['password'];
    $date = $_POST['date'];
    $art = $_POST['art'];
    
    $dbconnection = mysqli_connect('160.153.153.4', 'testbenutzer', 'kokosnuss', 'dtimetowork');
    
    if ($art == "insert")
    {
        $sql = "INSERT INTO TArbeitszeiten (ArbeitDatum, ArbeitZeit, MitaEmail) VALUES ('$date', '$time', '$user')";
        if (mysqli_query($dbconnection, $sql)) {
            echo "Success";
        }
    }
    else
    {
        $sql = "DELETE TArbeitszeiten where 'ArbeitId' = select distinct 'ArbeitId' where 'ArbeitDatum' = '$date' and 'MitaEmail' = '$user' and 'ArbeitZeit' = 'ArbeitZeit'";
        if (mysqli_query($dbconnection, $sql)) {
            echo "Success";
        }
    }



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

}
//Abfrage Datensätze
else
{
    if (isset($_POST['email']) && !isset($_POST['art']))
    {
        $arr = array();
        $daten = mysqli_query($dbconnection, "select count * from TMitarbeiter where MitaEmail = '$user'");
        while($row = $daten->fetch_assoc()) {
        array_push($arr, $row["ArbeitDatum"], $row["ArbeitZeit"], $row["MitaEmail"]);
    }
        return $arr;
    }

}


