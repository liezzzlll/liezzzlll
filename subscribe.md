---
layout: page
title: Subscribe Form
permalink: /subscribe/
---
If you'd like get updates on any new posts or artwork added, subscribe here!  I appreciate ya!

<form id="subscribe-form" action="https://script.google.com/macros/s/AKfycby7esYT8TNyfW8ovsAMFeFfL9yvjrIvbXO-LCPJxX-MiBpsaj48oNqCAWqXtbqwVOPXuA/exec" method="post">
  <input type="email" name="email" required placeholder="Enter your email">
  <button type="submit">Subscribe</button>
</form>
<div id="message"></div>

<script>
  document.getElementById('subscribe-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Stop the form from submitting the traditional way

    // Prepare the data from the form for submission
    var formData = new FormData(e.target);
    var object = {};
    formData.forEach(function(value, key){
      object[key] = value;
    });
    var json = JSON.stringify(object);

    // Use the Fetch API to send the form data to your Google Apps Script web app
    fetch(e.target.action, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: json
    })
    .then(response => response.json()) // Parse the JSON response
    .then(data => {
      // Handle the response data
      // For example, show a thank you message
      document.getElementById('message').innerText = 'Thank you for subscribing!';
    })
    .catch(error => {
      // Handle any errors
      console.error('Error:', error);
      document.getElementById('message').innerText = 'Subscription failed. Please try again.';
    });
  });
</script>
