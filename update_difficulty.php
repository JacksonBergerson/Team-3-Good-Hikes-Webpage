<?php
// Tell the browser/JavaScript that any response sent back from this file is JSON
header('Content-Type: application/json');

// Database connection details from your cPanel MySQL settings
$dbHost = 'localhost';
$dbName = 'teamgree_goodhikes';   // Your database name from phpMyAdmin
$dbUser = 'teamgree';             // Replace with your cPanel database username
$dbPass = 'bP78:IMr3aR]8q';       // Replace with your database password

// Connect to the MySQL database using PDO
$pdoConnection = new PDO("mysql:host=$dbHost;dbname=$dbName;charset=utf8mb4", $dbUser, $dbPass);

// Read the raw JSON text that JavaScript sent in the POST request body
$rawJsonInput = file_get_contents('php://input');

// Convert that JSON text into a PHP associative array so we can loop through it
$hikeUpdates = json_decode($rawJsonInput, true);

// Make sure JavaScript actually sent a non-empty list of hikes before running SQL
if (is_array($hikeUpdates) && count($hikeUpdates) > 0) {

    // Prepare the SQL UPDATE statement once using '?' placeholders for safety.
    // The final line (difficulty_rating IS NULL OR difficulty_rating != ?) tells MySQL
    // to skip rows whose saved rating already matches the newly calculated rating.
    $updateStatement = $pdoConnection->prepare("
        UPDATE hikes 
        SET difficulty_rating = ?, 
            difficulty_rating_description = ? 
        WHERE hike_id = ? 
          AND (difficulty_rating IS NULL OR difficulty_rating != ?)
    ");

    // Loop through each hike sent from renderHikes() in load-hike.js
    foreach ($hikeUpdates as $singleHike) {

        // Clean and convert each value to the exact data type your table expects
        $hikeId          = intval($singleHike['hike_id']);                     // INT primary key
        $calculatedScore = intval($singleHike['difficulty_rating']);           // TINYINT (1-10)
        $difficultyLabel = trim($singleHike['difficulty_rating_description']); // VARCHAR (e.g., "Moderate")

        // Plug the 4 values into the 4 '?' placeholders above and run the update for this hike
        $updateStatement->execute([
            $calculatedScore, // 1st '?': sets difficulty_rating
            $difficultyLabel, // 2nd '?': sets difficulty_rating_description
            $hikeId,          // 3rd '?': matches WHERE hike_id = ?
            $calculatedScore  // 4th '?': checks if difficulty_rating != ?
        ]);
    }
}

// Send a simple confirmation message back to JavaScript so fetch() knows it finished
echo json_encode(['status' => 'ok']);
?>
