function redirectToInput() {
    window.location.href = "input.html";
}

window.onload = function() {
    const form = document.getElementById('plasticForm');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            // Redirect to the page showing metrics (not implemented in this basic example)
            window.location.href = "metrics.html";
        });
    }
};
