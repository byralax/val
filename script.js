function createHearts() {
    const heartsContainer = document.getElementById('heartsContainer');
    const heartCount = 20;
    
    for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.innerHTML = '❤';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDelay = Math.random() * 5 + 's';
        heartsContainer.appendChild(heart);
    }
}

function respond(answer) {
    document.getElementById('answerInput').value = answer;
    document.getElementById('responseForm').submit();
}

// Create floating hearts when page loads
window.onload = createHearts;
