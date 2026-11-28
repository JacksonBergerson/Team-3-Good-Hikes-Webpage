<?php
// Tell the browser/JavaScript that the data coming back is formatted as JSON
header('Content-Type: application/json');

// Database connection details from your cPanel MySQL settings
$host = 'localhost'; // Almost always 'localhost' on cPanel
$db   = 'teamgree_goodhikes';          // Replace with your cPanel database name
$user = 'teamgree';          // Replace with your cPanel database username
$pass = 'bP78:IMr3aR]8q';          // Replace with your database password

// Create the connection to your MySQL database using PDO
$pdo = new PDO("mysql:host=$host;dbname=$db;charset=utf8mb4", $user, $pass);

// Check if JavaScript sent any rating numbers in the URL (e.g., get_data.php?ratings=3,4)
// Option A (For text/string values, ignores "0" — commented out):
// if (!empty($_GET['ratings'])) {

// Option B (Active — for TINYINT numbers, safely allows "0" as a valid rating):
if (isset($_GET['ratings']) && $_GET['ratings'] !== '') {

    // Split the comma-separated text "3,4,7" into a list: ["3", "4", "7"]
    $rawRatings = explode(',', $_GET['ratings']);

    // Convert every item in that list into a true integer (whole number) for TINYINT
    $ratingsArray = array_map('intval', $rawRatings);

    // Count how many numbers were sent and create matching '?' placeholders (e.g., "?,?,?")
    $placeholders = implode(',', array_fill(0, count($ratingsArray), '?'));

    // Prepare the SQL query with '?' placeholders so user input cannot break the SQL
    $stmt = $pdo->prepare("SELECT * FROM hikes WHERE rating IN ($placeholders)");

    // Plug the actual numbers into the '?' placeholders and run the query
    $stmt->execute($ratingsArray);

} else {
    // If no ratings were selected, run a simple query to get every hike in the table
    $stmt = $pdo->query("SELECT * FROM hikes");
}

// Grab all matching rows and all columns from the database as an associative array
$results = $stmt->fetchAll(PDO::FETCH_ASSOC);

// Convert the PHP array into a JSON string and send it back to your JavaScript fetch()
echo json_encode($results);
?>
