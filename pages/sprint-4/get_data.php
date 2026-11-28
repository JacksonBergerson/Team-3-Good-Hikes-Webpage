<?php
// Tell the browser/JavaScript that the data coming back is formatted as JSON
header('Content-Type: application/json');

// Database connection details from your cPanel MySQL settings
$dbHost = 'localhost';
$dbName = 'teamgree_goodhikes'; // Your database name from phpMyAdmin
$dbUser = 'teamgree';                   // Replace with your cPanel database username
$dbPass = 'bP78:IMr3aR]8q';                   // Replace with your database password

// Create the connection to your MySQL database using PDO
$pdoConnection = new PDO("mysql:host=$dbHost;dbname=$dbName;charset=utf8mb4", $dbUser, $dbPass);

// Start with a base query and empty arrays to hold active filter clauses and values
$sqlQuery = "SELECT * FROM hikes";
$whereClauses = []; // Holds SQL snippets like "hike_distance <= ?"
$queryValues  = []; // Holds the actual values to plug into the '?' placeholders

// --- 0. SINGLE HIKE BY ID (For hike-details.html?id=1) ---
if (isset($_GET['hike_id']) && $_GET['hike_id'] !== '') {
    $whereClauses[] = "hike_id = ?";
    $queryValues[]  = intval($_GET['hike_id']);
}

// --- 1. DIFFICULTY RATING (Multiple TINYINT numbers, e.g., ?difficulty_ratings=3,4) ---
if (isset($_GET['difficulty_ratings']) && $_GET['difficulty_ratings'] !== '') {
    $rawDifficultyRatings   = explode(',', $_GET['difficulty_ratings']);
    $cleanDifficultyRatings = array_map('intval', $rawDifficultyRatings);
    $ratingPlaceholders     = implode(',', array_fill(0, count($cleanDifficultyRatings), '?'));

    $whereClauses[] = "difficulty_rating IN ($ratingPlaceholders)";
    $queryValues    = array_merge($queryValues, $cleanDifficultyRatings);
}

// --- 2. PARK NAME (Exact match, e.g., ?park_name=Mount%20Rainier) ---
if (isset($_GET['park_name']) && trim($_GET['park_name']) !== '') {
    $whereClauses[] = "park_name = ?";
    $queryValues[]  = trim($_GET['park_name']);
}

// --- 3A. MINIMUM ELEVATION GAIN (e.g., ?min_elevation_gain=500) ---
if (isset($_GET['min_elevation_gain']) && $_GET['min_elevation_gain'] !== '') {
    $whereClauses[] = "elevation_gain >= ?";
    $queryValues[]  = intval($_GET['min_elevation_gain']);
}

// --- 3b. ELEVATION GAIN (Max feet as whole number, e.g., ?max_elevation_gain=1500) ---
if (isset($_GET['max_elevation_gain']) && $_GET['max_elevation_gain'] !== '') {
    $whereClauses[] = "elevation_gain <= ?";
    $queryValues[]  = intval($_GET['max_elevation_gain']);
}

// --- 4A. MINIMUM HIKE DISTANCE (e.g., ?min_hike_distance=1.5) ---
if (isset($_GET['min_hike_distance']) && $_GET['min_hike_distance'] !== '') {
    $whereClauses[] = "hike_distance >= ?";
    $queryValues[]  = floatval($_GET['min_hike_distance']);
}

// --- 4B. HIKE DISTANCE (Max distance as decimal, e.g., ?max_hike_distance=5.3) ---
if (isset($_GET['max_hike_distance']) && $_GET['max_hike_distance'] !== '') {
    $whereClauses[] = "hike_distance <= ?";
    $queryValues[]  = floatval($_GET['max_hike_distance']);
}

// --- 5. HIKE STYLE (Exact match like "Out and Back" or "Loop", e.g., ?hike_style=Loop) ---
if (isset($_GET['hike_style']) && trim($_GET['hike_style']) !== '') {
    $whereClauses[] = "hike_style = ?";
    $queryValues[]  = trim($_GET['hike_style']);
}

// --- 6. TERRAIN TYPE (Keyword search using LIKE, e.g., ?terrain_type=gravel) ---
if (isset($_GET['terrain_type']) && trim($_GET['terrain_type']) !== '') {
    $whereClauses[] = "terrain_type LIKE ?";
    $queryValues[]  = '%' . trim($_GET['terrain_type']) . '%';
}

// Attach WHERE and combine all active filters with AND
if (count($whereClauses) > 0) {
    $sqlQuery .= " WHERE " . implode(" AND ", $whereClauses);
}

// Keep results in a consistent order by hike_id
$sqlQuery .= " ORDER BY hike_id ASC";

// Prepare, execute, and return the matching records as JSON
$preparedStatement = $pdoConnection->prepare($sqlQuery);
$preparedStatement->execute($queryValues);
$matchingHikes = $preparedStatement->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($matchingHikes);
?>
