// Function to handle typing animation with multiple titles
function typeEffect(element, texts, speed) {
    let i = 0; // character index
    let j = 0; // text index
    let timer;

    function type() {
        if (i < texts[j].length) {
            element.innerHTML += texts[j].charAt(i);
            i++;
            timer = setTimeout(type, speed);
        } else {
            clearTimeout(timer);
            setTimeout(() => {
                i = 0;
                j = (j + 1) % texts.length; // Cycle to next text
                element.innerHTML = ''; // Clear text before next
                type(); // Start typing next text
            }, 1000); // Pause before switching
        }
    }

    type();
}

// Wait for DOM to load
window.onload = function () {
    const jobTitleElement = document.getElementById('job-title');
    const jobTitles = [
        "Software Engineer",
        "Full Stack Web Developer",
        "DevOps Engineer",
        "UX/UI Graphic Designer",
        "UI/UX Designer"
    ];
    typeEffect(jobTitleElement, jobTitles, 150);
};