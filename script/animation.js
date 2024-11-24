document.addEventListener("DOMContentLoaded", function() {
    const floatingItems = document.querySelectorAll(".floating-item");

    floatingItems.forEach(item => {
        const randomDuration = Math.random() * 5 + 5; // Random duration between 5s and 10s
        const randomDelay = Math.random() * 5; // Random delay up to 5s
        item.style.animationDuration = `${randomDuration}s`;
        item.style.animationDelay = `${randomDelay}s`;
    });
});

// Modal Functions
function openAnimation(animationSrc) {
    const modal = document.getElementById('modal');
    const iframe = document.getElementById('animation-frame');
    
    iframe.src = animationSrc;
    modal.style.display = 'flex';
}

function closeModal() {
    const modal = document.getElementById('modal');
    const iframe = document.getElementById('animation-frame');
    
    iframe.src = '';
    modal.style.display = 'none';
}
