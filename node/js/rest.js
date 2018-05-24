function readFromDB(){
    $.ajax({
        type: "GET",
        url: 'http://localhost/assignment/php/query.php',
        data: {action:'get_names'},
        success: function(data){
            alert(data);
        }
    });
}