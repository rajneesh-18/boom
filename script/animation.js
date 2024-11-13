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
