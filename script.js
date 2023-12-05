function determineFate() {
    var fate = Math.floor(Math.random() * 2) + 1; // Generates 1 or 2
    var resultText = "";

    if (fate === 1) {
        resultText = "Congratulations, You've Escaped!";
    } else {
        resultText = "Alas, You Have Perished in Elsinore.";
    }

    document.getElementById('result').innerText = resultText;
}
