var teamMembers = {
    "Team1": ["Riley", "Sophia", "Alexis" , "Kevin" , "Marshall" , "Brianna" , "Kelechi" "Mala"],
    "Team2": ["Kamille", "Calvin", "Brooke" , "Amanda" , "Ana" , "Logan" , "Neda" , "Rushidi,]
};

function determineFate() {
    var team = document.getElementById('teamSelect').value;
    if (!team) {
        alert('Please select a team.');
        return;
    }

    var fate = Math.floor(Math.random() * 2) + 1;
    var members = teamMembers[team].join(", ");
    var resultText = "";

    if (fate === 1) {
        resultText = "Congratulations to " + members + " of " + team + "! Through wit, wisdom, and unity, you've navigated the treacherous twists of Elsinore. Your astute unraveling of deceit, keen insight into human nature, and courage in the face of uncertainty have won the day. As dawn breaks, you step out of the dungeon's shadows into the light of freedom, leaving the echoes of Elsinore's intrigues behind. Remember, 'To thine own self be true.'"
    } else {
        resultText = "Alas for " + members + " of " + team + ". The labyrinth of Elsinore has claimed another tale. Ensnared in webs of deceit and trapped in corridors of power and madness, you fought valiantly against the encroaching shadows. As the dungeon's gates close, remember that in every ending, there lies a new beginning. In the annals of Elsinore, your story, though tragic, will be a beacon for those who dare to challenge the status quo."
    }

    document.getElementById('result').innerText = resultText;
}
