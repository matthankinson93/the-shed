<?php
// Get all input data from the form
$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$type = $_POST['type'];
$info = $_POST['info'];

// Format the data into an email message body
$message = "Name: " . $name . "\r\n"
         . "Contact Number: " . $phone . "\r\n"
         . "Email Address: " . $email . "\r\n"
         . "Number Of Guests: " . $guests . "\r\n"
         . "Function Type: " . $type . "\r\n"
         . "Booking Information: " . $booking_info;

// Add a subject line
$subject = "Functions Booking Request";

// Use the input email as the sender, and demo@email.com as the recipient
$headers = "From: " . $email . "\r\n"
         . "Reply-To: " . $email . "\r\n"
         . "CC: \r\n"
         . "BCC: \r\n"
         . "X-Mailer: PHP/" . phpversion();

// Send the email and display success or failure message
if (mail("matthankinson@live.com.au", $subject, $message, $headers)) {
    echo "Message sent successfully!";
}

// Reset the form data
if (isset($_POST['reset'])) {
    unset($_POST);
    header("Location: index.php");
    exit;
  }
?>