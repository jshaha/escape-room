function determineFate() {
    var team = document.getElementById('teamSelect').value;
    if (!team) {
        alert('Please select a team.');
        return;
    }

    var fate = Math.floor(Math.random() * 2) + 1;
    var resultText = "";

    if (fate === 1) {
        resultText = "Congratulations, " + team + ", You've Escaped!";
    } else {
        resultText = "Alas, " + team + ", You Have Perished in Elsinore.";
    }

    document.getElementById('result').innerText = resultText;
}
