<?php
if (isset($_POST['name']) && isset($_POST['number'])){
$name = $_POST['name'];
$number = $_POST['number'];

$db_host = "localhost"; 
$db_user = "admin_228"; // Логин БД
$db_password = "12151728"; // Пароль БД
$db_base = 'boos'; // Имя БД
$db_table = "boos"; // Имя Таблицы БД

try {
    // Подключение к базе данных
    $db = new PDO("mysql:host=$db_host;dbname=$db_base", $db_user, $db_password);
    // Устанавливаем корректную кодировку
    $db->exec("set names utf8");
} catch (PDOException $e) {
    // Если есть ошибка соединения, выводим её
    print "Ошибка!: " . $e->getMessage() . "<br/>";
}

$data = array( 'name' => $name, 'number' => $number ); 
// Подготавливаем SQL-запрос
$query = $db->prepare("INSERT INTO $db_table (name, number) values (:name, :number)");
// Выполняем запрос с данными
$query->execute($data);

if ($result) {
    echo "Информация занесена в базу данных";
  }
}
?>