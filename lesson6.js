let input = document.getElementById("color-btn");
let figures = document.getElementById("figures");
let optionList = document.getElementById("figures-list");
let button = document.getElementById("button-click");

optionList.addEventListener('click', function() {
    if (optionList.value === 'square') {
        figures.className = "square-figure";
    } else if (optionList.value === 'rectangle') {
        figures.className = "rectangle-figure";
    } else if (optionList.value === 'circle') {
        figures.className = "circle-figure";
    } else {
        figures.style.backgroundColor = "black";
    }
});

button.addEventListener('click', function() {
    figures.style.backgroundColor = input.value;
})
