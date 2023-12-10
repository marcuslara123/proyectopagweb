function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Función para cambiar el color del elemento cada segundo
function changeColor() {
    var dynamicColor = document.getElementById('dynamicColor');
    dynamicColor.style.color = getRandomColor();
    setTimeout(changeColor, 1000); // Llama a la función cada segundo
}

// Inicia el cambio de color al cargar la página
window.onload = changeColor;