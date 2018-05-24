<?php
/**
 * Purpose: make a call to the database and retrieve the names stored there. 
 * 
 * Date: 2/17/2018
 * Author: Judah Parham
 * Credits: Stack overflow
 */
include_once('db_con.php');


$con = openConnection();

if($con){
    getNames($con);
}
else{
    echo "database error";
}

?>

