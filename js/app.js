let currentInput = document.querySelector('.currentInput');
let answerScreen = document.querySelector('.answerScreen');
let buttons = document.querySelectorAll('button');
let btnErase = document.querySelector('#erase');
let btnReset = document.querySelector('#reset');
let btnEvaluate = document.querySelector('#evaluate');

let realTimeScreenValue = [];

//Limpiar Display
btnReset.addEventListener('click', () => {
    realTimeScreenValue = [''];
    answerScreen.innerHTML = 0;
    currentInput.className = 'currentInput';
    answerScreen.className = 'answerScreen';
    answerScreen.style.color = "rgba(150, 150, 150, 0.87)";
});

//Obtener los valores dando click en cualquier boton
buttons.forEach((btn) => {

    btn.addEventListener("click", () => {
        // Cuando clickeamos un boton que no sea borrar

        if (!btn.id.match('erase')) {

            // Mostrar el valor que se presionó
            realTimeScreenValue.push(btn.value)
            currentInput.innerHTML = realTimeScreenValue.join('');

            // Evaluar el nuevo valor
            if (btn.classList.contains('num-btn')) {
                answerScreen.innerHTML = eval(realTimeScreenValue.join(''));
            };
        };

        // Cuando damos click en el botón borrar
        if (btn.id.match('erase')) {
            realTimeScreenValue.pop();
            currentInput.innerHTML = realTimeScreenValue.join('');
            answerScreen.innerHTML = eval(realTimeScreenValue.join(''));
        };

        // Cuando damos click en el botón =
        if (btn.id.match('evaluate')) {
            currentInput.className = 'answerScreen';
            answerScreen.className = 'currentInput';
            answerScreen.style.color = "white";
        };

        // Prevenir error Undefined en la pantalla
        if (typeof eval(realTimeScreenValue.join('')) == 'undefined') {
            answerScreen.innerHTML = 0
        };

    });
});