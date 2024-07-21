window.onload = function() {
    let viewCount = localStorage.getItem('viewCount');
    if (viewCount) {
        viewCount = parseInt(viewCount) + 1;
    } else {
        viewCount = 1;
    }
    localStorage.setItem('viewCount', viewCount);
    document.getElementById('view-count').textContent = viewCount;
    const characters = document.querySelectorAll('.android-character');
    characters.forEach(character => {
        const x = Math.random() * (window.innerWidth - 80);
        const y = Math.random() * (window.innerHeight - 160);
        character.style.left = `${x}px`;
        character.style.top = `${y}px`;
    });
    const roamingObjects = document.querySelectorAll('.roaming-object');
    roamingObjects.forEach(obj => {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        obj.style.left = `${x}px`;
        obj.style.top = `${y}px`;
    });
};
window.onresize = function() {
    const characters = document.querySelectorAll('.android-character');
    characters.forEach(character => {
        const x = Math.random() * (window.innerWidth - 80);
        const y = Math.random() * (window.innerHeight - 160);
        character.style.left = `${x}px`;
        character.style.top = `${y}px`;
    });

    const roamingObjects = document.querySelectorAll('.roaming-object');
    roamingObjects.forEach(obj => {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        obj.style.left = `${x}px`;
        obj.style.top = `${y}px`;
    });
};
