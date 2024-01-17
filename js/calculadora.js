var screen = document.querySelector('#screen');
document.querySelector('#cleaner')
    .addEventListener('click', function () {
        screen.value = '';
    })
document.querySelector('#delete')
    .addEventListener('click', function () {
        screen.value = screen.value.substring(0, (screen.value.length - 1));
    })
function addToScreen(value) {
    const operationSigns = ['*', '+', '-', '/', '.'];
    screen.value += value;
    if (operationSigns.includes(value)) {
        var valorAnterior = screen.value.length - 2;
        if (operationSigns.includes(screen.value[valorAnterior])) {
            screen.value = screen.value.substring(0, (screen.value.length - 2));
            screen.value = screen.value + value;
        }
    }
    switch (screen.value[0]) {
        case '*':
            screen.value = '';
        case '/':
            screen.value = '';
        case '.':
            screen.value = '';
    }
}
function result() {
    screen.value = eval(screen.value);

}

$(document).ready(function () {
    // Agrega la clase "calculator-link" al enlace del navbar
    $(".nav-link[href='calculadora.html']").addClass("calculator-link");

    // Deshabilita el enlace en el modo responsive o móvil
    if (window.matchMedia("(max-width: 768px)").matches) {
        $(".calculator-link").off("click");
    }
});