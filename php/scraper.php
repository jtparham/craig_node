<?php
/**
 * Purpose:Scrape the page query.php and display those names in a select box 
 * 
 * Date: 2/17/2018
 * Author: Judah Parham
 * Credits: Stack overflow
 */
include_once('db_con.php');
$url = 'http://localhost/assignment/php/query.php';
 
$curl = curl($url);
$scrapedData = scrape_between($curl, "<select name=\"target\">", "</select>");
$list = explode("\n", $scrapedData, 5);
echo "<select>";

foreach($list as $opt){
    echo "<option>" .$opt. "</option";
}
echo "</select>";

?>

