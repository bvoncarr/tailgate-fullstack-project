var submitButton = document.getElementById('');

submitButton.addEventListener('click', function() {
fetch('/')
    .then(response => response.json())
    .then(data => console.log(data));
});

