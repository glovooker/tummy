<?php
     $servername = "localhost";
    $username = "id11226213_root";
    $password = "admin";
    $dbname = "id11226213_tummy";

    $entry=$_POST['entry'];
    // Create connection
    $conn = mysqli_connect($servername, $username, $password, $dbname);

    // Check connection
    if (mysqli_connect_errno()) {
        die("Connection failed: " . $conn->connect_error);
    }


            mysqli_set_charset($conn,"utf8");

            $q="INSERT INTO tummy(entry) VALUES ('$entry')";

            $sql= mysqli_query($conn,$q);

 ?>
