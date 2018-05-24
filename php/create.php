<?php
/**
 * Purpose: add a name the database. 
 * 
 * Date: 2/17/2018
 * Author: Judah Parham
 * Credits: Stack overflow
 */
include_once('db_con.php');


$con = openConnection();

if($con){
    addName($con);
}
else{
    echo "database error";
}

?>

