const changeColorButton = document.getElementById('changeColorButton');
const container = document.querySelector('.container');

changeColorButton.addEventListener('click', () => {
    const randomColor = getRandomColor();
    container.style.backgroundColor = randomColor;
});

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}