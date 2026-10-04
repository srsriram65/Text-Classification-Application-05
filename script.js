function classifyText() {

    let text = document.getElementById("textInput").value.toLowerCase();

    let technologyWords = [
        "computer", "python", "java", "software",
        "programming", "technology", "ai", "machine"
    ];

    let sportsWords = [
        "cricket", "football", "basketball",
        "match", "player", "sports", "team"
    ];

    let educationWords = [
        "school", "college", "student",
        "exam", "education", "teacher", "study"
    ];

    let technology = 0;
    let sports = 0;
    let education = 0;

    let words = text.split(/\s+/);

    for (let word of words) {

        if (technologyWords.includes(word)) {
            technology++;
        }

        if (sportsWords.includes(word)) {
            sports++;
        }

        if (educationWords.includes(word)) {
            education++;
        }
    }

    let category = "Unknown";

    if (technology > sports && technology > education) {
        category = "Technology";
    }
    else if (sports > technology && sports > education) {
        category = "Sports";
    }
    else if (education > technology && education > sports) {
        category = "Education";
    }
    else if (technology === 0 && sports === 0 && education === 0) {
        category = "Unknown";
    }
    else {
        category = "Mixed";
    }

    document.getElementById("result").innerText =
        "Category: " + category;
}
