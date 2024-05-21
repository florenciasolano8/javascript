//Funciones
function sumar (){
    let numeroA = parseInt(prompt("Ingresa el primer numero para sumar"))
    let numeroB = parseInt(prompt("Ingresa el segundo numero para sumar"))
    let resultado = numeroA + numeroB
    alert(numeroA + "+" + numeroB + "=" + resultado)
}

function restar (){
    let numeroA = parseInt(prompt("Ingresa el primer numero para restar"))
    let numeroB = parseInt(prompt("Ingresa el segundo numero para restar"))
    let resultado = numeroA - numeroB
    alert(numeroA + "-" + numeroB + "=" + resultado)
}

function multiplicar (){
    let numeroA = parseInt(prompt("Ingresa el primer numero para multiplicar"))
    let numeroB = parseInt(prompt("Ingresa el segundo numero para multiplicar"))
    let resultado = numeroA * numeroB
    alert(numeroA + "x" + numeroB + "=" + resultado)
}

function dividir (){
    let numeroA = parseInt(prompt("Ingresa el primer numero para dividir"))
    let numeroB = parseInt(prompt("Ingresa el segundo numero para dividir"))
    let resultado = numeroA / numeroB
    alert(numeroA + "/" + numeroB + "=" + resultado)
}
function mostrarMenu(){   
return parseInt(prompt("Elija una opcion:\n 1-sumar\n 2-restar\n 3-multiplicar\n 4-dividir\n 5-salir"))
}
let opcion = mostrarMenu()

while(opcion !==5){
    switch(opcion){
        case 1:
            sumar()
            break
        case 2:
            restar()
            break
        case 3:
            multiplicar()
            break
        case 4:
            dividir()
            break
        default:
            alert("Opcion incorrecta")   
            break 
    }
    opcion = mostrarMenu()
}
alert("Graciass!!")