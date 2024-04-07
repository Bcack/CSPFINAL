function startProcess() {
    // Simulate loading screen
    showLoadingScreen();

    // Simulate detecting metrics
    setTimeout(showMetrics, 2000);
}

function showLoadingScreen() {
    // Display loading screen
    document.body.innerHTML = `
        <div class="loading">
            <h2>Loading...</h2>
        </div>
    `;
}

function showMetrics() {
    // Simulate generating random metrics
    const mass = Math.floor(Math.random() * 100) + 1;
    const volume = Math.floor(Math.random() * 100) + 1;

    // Display metrics
    document.body.innerHTML = `
        <div class="container">
            <h1>Plastic Waste Metrics</h1>
            <p>Mass: ${mass} g</p>
            <p>Volume: ${volume} cm<sup>3</sup></p>
            <a href="plasticType.html">Enter Plastic Type</a>
        </div>
    `;
}

