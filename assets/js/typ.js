// Function to handle the typing animation
function typeEffect(element, text1, text2, speed) {
    let i = 0;
    let currentText = text1;
    let isTyping = true;
    let timer;

    // Start the typing effect
    function type() {
        if (i < currentText.length) {
            element.innerHTML += currentText.charAt(i);
            i++;
            timer = setTimeout(type, speed);
        } else {
            clearTimeout(timer);
            setTimeout(() => {
                // Switch between text1 and text2 after typing finishes
                currentText = currentText === text1 ? text2 : text1;
                i = 0;
                element.innerHTML = ''; // Clear the text
                type(); // Start typing the next text
            }, 1000); // Pause for 1 second before switching
        }
    }

    type();
}

// Wait until the DOM is fully loaded before running the typing effect
window.onload = function () {
    const jobTitleElement = document.getElementById('job-title');
    typeEffect(jobTitleElement, "Fullstack Web Developer", "UX/UI Graphic Designer", 150);
};
