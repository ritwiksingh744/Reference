<?php

echo 'processing...';

//check GET variable
if(isset($_GET['name'])){
    echo 'GET: your name is '. $_GET['name'];
}

?>