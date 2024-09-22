let resultDisplay = document.getElementById('result');



function toggleShift() {
    shift = !shift;
    document.querySelector('#shift-button').classList.toggle('active');
}


function appendValue(value) {
    resultDisplay.value += value;
}


function clearScreen() {
    resultDisplay.value = '';
}

function deleteLast() {
    resultDisplay.value = resultDisplay.value.slice(0, -1);
}

function calculate() {
    try {
        resultDisplay.value = eval(resultDisplay.value);
    } catch (e) {
        resultDisplay.value = 'Error';
    }
}



function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    let themeIcon = document.getElementById('theme-icon').firstElementChild;
    themeIcon.classList.toggle('fa-sun');
    themeIcon.classList.toggle('fa-moon');
}
