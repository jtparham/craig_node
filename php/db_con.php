<?php
/**
 * Purpose: Handle all the database connections and build out the select
 * html containing the names from the database calls. Also does the scraping 
 * of the initial page (query.php). 
 * 
 * Date: 2/17/2018
 * Author: Judah Parham
 * Credits: Stack overflow
 */


//Open a connection to the database
function openConnection(){

    // Connection variables 
    $host = "localhost";
    $_SESSION['dbun'] = "root";
    $_SESSION['dbpw'] = "";
    $_SESSION['db_name'] = "people";

    //SQL Varables for MySQLi connection 
    $connection = new mysqli($host, $_SESSION['dbun'], $_SESSION['dbpw'], $_SESSION['db_name']);
    return $connection;
}

//close connection to the database
function closeConnection($connection){
    $connection -> close();
    
}

//Add name to the database
function addName($con){
    $newName = mysqli_escape_string($con, $_POST['newName']);

    $insert = "INSERT INTO `names` (`usernames`) VALUES ('$newName')";
    if(mysqli_query($con, $insert)){
        echo "After Add: ";
        getNames($con);
    }
    else{
       echo $con->error;
    }

}


//Update a name in the database
function updateName($con){
    $currentName = mysqli_escape_string($con, $_POST['from']);
    $updatedName = mysqli_escape_string($con, $_POST['to']);

    $update = "UPDATE `names` SET `usernames`=('$updatedName') WHERE usernames=('$currentName')";
    if(mysqli_query($con, $update)){
        echo "After Update: ";
        getNames($con);
    }
    else{
       echo $con->error;
    }

}


//Remove a name from the database
function delName($con){
    $target = mysqli_escape_string($con, $_POST['target']);
    $delete = "DELETE FROM `names` WHERE usernames=('$target')";
    if(mysqli_query($con, $delete)){
        echo "After Delete: ";
        getNames($con);
    }
    else{
        echo $con->error;
    }
}

//get first 5 names in the database
function getNames($con){

    $db_query = "SELECT * from names ORDER BY usernames";
    $query = mysqli_query($con, $db_query);

    echo "<select name=\"target\">";

    while($row = mysqli_fetch_array($query)){
        echo "<option>".$row['usernames']."</option>";
    }
    echo "</select>";

    closeConnection($con);
return 0;
}

//curl funciton to scrape the url that is passed in
function curl($url) {
    $ch = curl_init();  // Initialising cURL
    curl_setopt($ch, CURLOPT_URL, $url);    // Setting cURL's URL option with the $url variable passed into the function
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE); // Setting cURL's option to return the webpage data
    $data = curl_exec($ch); // Executing the cURL request and assigning the returned data to the $data variable
    curl_close($ch);    // Closing cURL
    return $data;   // Returning the data from the function
}

//scrape a specific location
function scrape_between($data, $start, $end){
    $data = stristr($data, $start); // Stripping all data from before $start
    $data = substr($data, strlen($start));  // Stripping $start
    $stop = stripos($data, $end);   // Getting the position of the $end of the data to scrape
    $data = substr($data, 0, $stop);    // Stripping all data from after and including the $end of the data to scrape
    return $data;   // Returning the scraped data from the function
}
?>