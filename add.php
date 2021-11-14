<?php

    $name = $_POST['name'];
    if($name==""){
        header('Location: /index.php?error=Ошибка, пустая строка');
        die();
    }
    $text = $_POST['text'];
    

   
    
    $dsn ='mysql:host=localhost;dbname=to-doo';
    $pdo= new PDO($dsn, 'easeaxd', '12151728');


    $sql= 'INSERT INTO boos(name, text) VALUES(:name, :text)';
    $query = $pdo->prepare($sql);
    $query->execute(['name' => $name, 'text' => $text]);

   header('Location: /');
    
    
        
       

    
    ?>