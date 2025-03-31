document.getElementById("moveButton").addEventListener("click", () => {
    const box = document.getElementById("box");
    const randomX = Math.floor(Math.random() * 200) - 100;
    const randomY = Math.floor(Math.random() * 200) - 100;
    box.style.transform = `translate(${randomX}px, ${randomY}px)`;
});