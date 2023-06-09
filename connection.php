<?php


$connect = mysqli_connect("localhost", "root", "", "transportation");

if(!$connect){
    print(error_get_last());
}



?>