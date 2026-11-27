<?php
// Allow your JavaScript to read this response as JSON
header('Content-Type: application/json');

$host = 'localhost';
$db   = 'teamgree_goodhikes';     // Replace with your cPanel database name
$user = 'teamgree';    // Replace with your cPanel database user
$pass = 'bP78:IMr3aR]8q';    // Replace with your database password

try {
    // Connect to the database
    $pdo = new PDO("mysql:host=$host;dbname=$db;charset=utf8mb4", $user, $pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Run the query 
    $stmt = $pdo->query("SELECT * FROM hikes");
    $results = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Send data back to JavaScript
    echo json_encode($results);

} catch (PDOException $e) {
    // Return an error message if connection fails
    http_response_code(500);
    echo json_encode(['error' => 'Database connection failed']);
}
?>