//let imagenUsuario = prompt("Ingrese la url de la imagen")
//let imagenDefecto = `https://th.bing.com/th/id/R.26f406c571d464e72d2ecca07898641a?rik=SerNV3teIgqguA&riu=http%3a%2f%2fmural.uv.es%2fjuanbepe%2fMachu_Picchu.jpg&ehk=Ifo42SZM2psKgsDje%2bya2Vkkz%2bxE9B0Eu7Xe5qWK1kM%3d&risl=&pid=ImgRaw&r=0`
//
//let imagen1 = document.querySelector(`#imgHtml`)
//if (imagenUsuario != "") {
//    imagen1.src = imagenUsuario
//}else{
//    alert("No ingreso la url")
//    imagen1.src = imagenDefecto
//}

//let llovio = true
//if(llovio == true){
//    console.log("Si llovio")
//}else{
//    console.error("No llovio")
//}

//se crea un oneclick en el boton html
//function verificarUsuario(){
//    debugger
//    let usuarioValido = "Pep"
//    let passCorrecto = "cont"
//
//    let inputUsuario = document.querySelector("#inputUser")
//    let inputpassword = document.getElementById("inputPass")
//
//    if(inputUsuario.value == usuarioValido){
//        if(inputpassword.value == passCorrecto){
//            alert("Bienvenido!!!")
//        }else{
//            alert("Sus credenciales son incorrectas")
//        }
//        
//    }else{
//        alert("Sus credenciales son incorrectas")
//    }
//}

//CICLOS

//FOR
/*
for (let x = 0; x <= 100; x++) {
    console.log(x)
}
*/


//WHILE
//let i = 1
//while(i<=20){
//    console.error(i)
//    i++
//}


//DO WHILE
//let t = 1
//do {
//    console.warn(t)
//    t++
//} while (t <= 30);

/*
function generarLineaCuadricula(){
    let numeroUsuario = document.querySelector("#numeroRecuadros")
    let recuadrosDiv = document.querySelector("#recuadros")
    for (let cuadro = 1; cuadro <= numeroUsuario.value; cuadro++) {
        console.log(cuadro)

        if (cuadro % 2 ==0) {
            recuadrosDiv.innerHTML += `<div class="cuadro negro">${cuadro}</div>`
        }else{
            recuadrosDiv.innerHTML += `<div class="cuadro blanco">${cuadro}</div>`
        }
    }
}*/

//Ejercicio 1

function ejercicio1(){
    
    let n = document.querySelector(`#floatingTextarea1`)
    let lugar = document.querySelector(`#lugarEjercicio1`)
    n.value = parseInt(n.value)

    let sum = 0;

    for (let i = 1; i <= n.value; i++) {
        sum += i;
    }
    console.log("La suma de los números del 1 al " + n.value + " es: " + sum);
    lugar.innerHTML = `
    <label for="text-center" style="font-size: 50px; color:#d42828 ; font-family: Juan;" id="resul">La suma de los numeros del 1 al ${n.value} es: ${sum}</label>`
    n.value = ``
}






//Ejercicio 2

function ejercicio2(){
    let num = document.querySelector(`#floatingTextarea2`)
    let lugar = document.querySelector(`#lugarEjercicio2`)
    num.value = parseInt(num.value)

if (num.value % 2 === 0) {
    console.log(num.value + " es un número par");
    lugar.innerHTML = `<label for="text-center" style="font-size: 50px; color:#d42828 ; font-family: Juan;" id="resul">${num.value} es un numero par</label>
    `
} else {
    console.log(num.value + " es un número impar");
    lugar.innerHTML = `<label for="text-center" style="font-size: 50px; color:#d42828 ; font-family: Juan;" id="resul">${num.value} es un numero impar</label>
    `
}
num.value = ``
}



//Ejercicio 3
function ejercicio3(){
    let lugar = document.querySelector(`#lugar2`)
    let edad = document.querySelector(`#floatingTextarea3`)
    edad.value = parseInt(edad.value)
    let sexo = document.querySelector(`#Textarea`)

    if (edad.value < 10 && sexo.value === `M`) {
        console.log(`¡Felicidades! Has ganado un jugo`)
        lugar.innerHTML = `<label for="text-center" style="font-size: 50px; color:#d42828 ; font-family: Juan;" id="resul">¡Felicidades! Has ganado un jugo</label>
        <label for="text-center" style="font-size: 50px; color:#d42828 ; font-family: Juan;" id="resul">Adicionalmente, has ganado una porción de pizza Hawaiana</label>`
    }else if(edad.value >= 18 && sexo.value === `M`){
        console.log(`¡Felicidades! Has ganado una cerveza`)
        lugar.innerHTML = `<label for="text-center" style="font-size: 50px; color:#d42828 ; font-family: Juan;" id="resul">¡Felicidades! Has ganado una cerveza</label>
        <label for="text-center" style="font-size: 50px; color:#d42828 ; font-family: Juan;" id="resul">Adicionalmente, has ganado una porción de pizza Hawaiana</label>`
    }else if (sexo.value === `H` && edad.value < 10) {
        console.log(`Adicionalmente, has ganado una porción de pizza Hawaiana`)
        lugar.innerHTML = `<label for="text-center" style="font-size: 50px; color:#d42828 ; font-family: Juan;" id="resul">¡Felicidades! Has ganado un jugo</label>
        <label for="text-center" style="font-size: 50px; color:#d42828 ; font-family: Juan;" id="resul">Adicionalmente, has ganado una porción de pizza tres carnes</label>
        `
    }else if (sexo.value === `H` && edad.value >= 18) {
        console.log(`Adicionalmente, has ganado una porción de pizza Hawaiana`)
        lugar.innerHTML = `<label for="text-center" style="font-size: 50px; color:#d42828 ; font-family: Juan;" id="resul">¡Felicidades! Has ganado una cerveza</label>
        <label for="text-center" style="font-size: 50px; color:#d42828 ; font-family: Juan;" id="resul">Adicionalmente, has ganado una porción de pizza tres carnes</label>
        `
    }else{
        console.log(`Lo siento, no cumples con los requisitos para recibir un premio`)
        lugar.innerHTML = `<label for="text-center" style="font-size: 50px; color:#d42828 ; font-family: Juan;" id="resul">Lo siento, no cumples con los requisitos para recibir un premio</label>
        `
    }
    edad.value = ``
    sexo.value = ``
    
}





//Ejercicio 4
// Menú con precios

let total = 0
const menu = 
    {"H": 30000,
    "Pi": 28000,
    "PaF": 15000,
    "R": 8000}

    let lugar = document.querySelector(`#lugarEjercicio4`)

function ejercicio4(){
    let opcion = document.querySelector(`#floatingTextarea4`)

    while (opcion.value !== "Pagar") {
        
        if (opcion.value in menu) {
            total += menu[opcion.value]
            console.log("Ha agregado " + opcion.value + " a su orden. Total: $" + total)
            lugar.innerHTML = `<label for="text-center" style="font-size: 50px; color:#d42828 ; font-family: Juan;" id="resul">Ha agregado ${opcion.value} a su orden. Total: $ ${total}</label>
    `
            opcion.value = ``
        }
        else if (opcion.value !== "Pagar") {
            console.log("Lo siento, la opción seleccionada no es válida.")
            lugar.innerHTML = `<label for="text-center" style="font-size: 50px; color:#d42828 ; font-family: Juan;" id="resul">Lo siento, la opción seleccionada no es válida.</label>
    `
        }
        return
    }
    console.log("Total a pagar: $" + total)
    lugar.innerHTML = `<label for="text-center" style="font-size: 50px; color:#d42828 ; font-family: Juan;" id="resul">Total a pagar: $ ${total}</label>
    `
    opcion.value = ``

}

//Ejercicio 5

let numero = document.querySelector(`#floatingTextarea5`)
numero.value = parseInt(numero.value)
let lugar5 = document.querySelector(`#lugar`)
let lugarRe = document.querySelector(`#lugarRe`)
function ejercicio5(){
    if (isNaN(numero.value)) {
        console.log("El valor ingresado no es un número válido.");
    } else {
    let total = 0
    
    console.log("Tabla de multiplicar de " + numero.value + ":");
    lugar5.innerHTML = ""
    for (let i = 1; i <= 10; i++) {
        const multiplicacion = numero.value * i;
        total += multiplicacion;
        console.log(numero.value + " x " + i + " = " + multiplicacion);
        lugar5.innerHTML += `
        <li for="text-center" style=" color:#d42828 ; font-size: 20px; font-family: Juan;" id="resul"> ${numero.value} x ${i} = ${multiplicacion}</li>`
    }
    lugarRe.innerHTML = `
    <label for="text-center" style=" color:#d42828 ; font-size: 20px; font-family: Juan;" id="resul">El total de las multiplicaciones es: ${total}</label>`
        console.log("El total de las multiplicaciones es: " + total);
    }
    numero.value = ``
    
}


//Ejercicio 6

let promedio = document.querySelector(`#floatingTextarea6`)
promedio.value = parseFloat(promedio.value)
let lugar6 = document.querySelector(`#lugarEjercicio6`)
let lugar62 = document.querySelector(`#lugar62`)
function ejercicio6(){
    if (isNaN(promedio.value)) {
        console.log("El valor ingresado no es válido.")
    } else {
    let valorMatricula = 1000000
    
    if (promedio.value < 3) {
        console.log("El promedio es menor a 3, no se le aplica ningún descuento.")
        lugar6.innerHTML = `
        <label for="text-center" style=" font-size: 25px; color:#d42828 ; font-family: Juan;" id="resul">El promedio es menor a 3, no se le aplica ningún descuento.</label>`
    } else if (promedio.value >= 3 && promedio.value <= 4) {
        valorMatricula = valorMatricula * 0.95
        console.log("El promedio está entre 3 y 4, se le aplica un descuento del 5%.")
        lugar6.innerHTML = `
        <label for="text-center" style=" font-size: 25px; color:#d42828 ; font-family: Juan;" id="resul">El promedio está entre 3 y 4, se le aplica un descuento del 5%.</label>`
    } else if (promedio.value > 4) {
        valorMatricula = valorMatricula / 2
        console.log("El promedio es mayor a 4, se le aplica un descuento del 50%.")
        lugar6.innerHTML = `
        <label for="text-center" style=" font-size: 25px; color:#d42828 ; font-family: Juan;" id="resul">El promedio es mayor a 4, se le aplica un descuento del 50%.</label>`
    }
    
        console.log("El valor de la matrícula es: $" + valorMatricula)
        lugar62.innerHTML = `
        <label for="text-center" style=" font-size: 25px; color:#d42828 ; font-family: Juan;" id="resul">El valor de la matrícula es: $ ${valorMatricula}</label>`
    }
    promedio.value = ``
}


//let numeroUsuario = prompt(`Cual es el numero que usted desea para la conjetura?`)
//let listaHtml = document.querySelector(`#listaDeNumeros`)
//while(numeroUsuario > 1){
//    if(numeroUsuario % 2 == 0){
//        numeroUsuario = numeroUsuario / 2
//}else{
//    numeroUsuario = (numeroUsuario * 3) + 1
//}
//listaHtml.innerHTML += `<li>${numeroUsuario}</li>`
//}


//let lista = prompt("hasta que numero desea la lista")
//let listaHtml = document.querySelector("#listaDeNumeros")
//for (let x = 0; x <= lista; x++){
//    
//}

//mostrarNota()
//function guardarNota(){
//    let titulo = document.querySelector(`#tituloNotaUsuario`)
//    let img = document.querySelector(`#imagenUsuario`)
//    let nota = document.querySelector(`#textoNota`)
//    if (titulo.value == `` || nota.value == `` || img.value == ``) {
//        disparaAlerta("Ingrese el contenido de la nota", "warning", "#ff2819", "#2bd5ff")
//        titulo.classList.add("border", "border-danger")
//        nota.classList.add("border", "border-danger")
//        img.classList.add("border", "border-danger")
//    }else{
//        let cantidadDeNotas = 1
//        if(localStorage.getItem("cantidad") == null){
//            localStorage.setItem("cantidad", cantidadDeNotas)
//        }else{
//            cantidadDeNotas = localStorage.getItem("cantidad")
//            cantidadDeNotas = parseInt(cantidadDeNotas)
//            cantidadDeNotas = cantidadDeNotas + 1
//            localStorage.setItem("cantidad", cantidadDeNotas)
//        }
//        disparaGuardado("Nota guardada", "success", "#3fff22", "#9500ff")
//        localStorage.setItem(`titulo${cantidadDeNotas}`, titulo.value)
//        localStorage.setItem(`img${cantidadDeNotas}`, img.value)
//        localStorage.setItem(`nota${cantidadDeNotas}`, nota.value)
//        titulo.classList.remove("border", "border-danger")
//        nota.classList.remove("border", "border-danger")
//        img.classList.remove("border", "border-danger")
//        titulo.value = ``
//        img.value = ``
//        nota.value = ``
//        mostrarNota()
//    }
//}
//
//function mostrarNota(){
//    let cantidadDeNotas = localStorage.getItem("cantidad")
//    let lugarNotas = document.querySelector(`#notasGuardadas`)
//    if (cantidadDeNotas == null){
//        lugarNotas.innerHTML = `<h1 class="display-1 text-danger">No hay ninguna nota</h1>`
//    }else{
//        lugarNotas.innerHTML = ``
//        for(let x = 1; x <= cantidadDeNotas; x++){
//            let tittle = localStorage.getItem(`titulo${x}`)
//            let imgUsu = localStorage.getItem(`img${x}`)
//            let textoNota = localStorage.getItem(`nota${x}`)
//            lugarNotas.innerHTML += `
//            <div class="card" style="width: 18rem;">
//                <img src="${imgUsu}" class="card-img-top" alt="...">
//                <div class="card-body">
//                    <h5 class="card-title">${tittle}</h5>
//                    <p class="card-text">${textoNota}</p>
//                    
//                    <button onclick="editarNota(${x})" class="btn btn-warning mx-2">Editar</button>
//                    <button onclick="eliminar(${x})" class="btn btn-danger mx-2">Borrar</button>
//                    
//                </div>
//            </div>`
//        }
//    }
//}
//function eliminar(idNota){
//    localStorage.removeItem(`img${idNota}`)
//    localStorage.removeItem(`titulo${idNota}`)
//    localStorage.removeItem(`nota${idNota}`)
//    mostrarNota()
//}
//function editarNota(idNota){
//    let titulo = document.querySelector(`#tituloNotaUsuario`)
//    let img = document.querySelector(`#imagenUsuario`)
//    let nota = document.querySelector(`#textoNota`)
//    titulo.value = localStorage.getItem(`titulo${idNota}`)
//    img.value = localStorage.getItem(`img${idNota}`)
//    nota.value = localStorage.getItem(`nota${idNota}`)
//    document.querySelector(`#btn-formulario`).removeAttribute("onclick")
//    document.querySelector(`#btn-formulario`).innerHTML = "Editar Nota"
//    document.querySelector(`#btn-formulario`).setAttribute("onclick", `guardarCambios(${idNota})`)
//    console.log(idNota)
//}
//function guardarCambios(idNotaAEditar){
//    let titulo = document.querySelector(`#tituloNotaUsuario`)
//    let img = document.querySelector(`#imagenUsuario`)
//    let nota = document.querySelector(`#textoNota`)
//    if (titulo.value != `` || img.value != `` || nota.value != ``) {
//        localStorage.setItem(`titulo${idNotaAEditar}`, titulo.value)
//        localStorage.setItem(`img${idNotaAEditar}`, img.value)
//        localStorage.setItem(`nota${idNotaAEditar}`, nota.value)
//        mostrarNota()
//        document.querySelector(`#btn-formulario`).removeAttribute("onclick")
//        document.querySelector(`#btn-formulario`).innerHTML = "Guardar Nota"
//        document.querySelector(`#btn-formulario`).setAttribute("onclick", "guardarNota()")
//        titulo.value = ``
//        img.value = ``
//        nota.value = ``
//    }else{
//        disparaAlerta("Ingrese el contenido de la nota", "warning", "#ff2819", "#2bd5ff")
//        titulo.classList.add("border", "border-danger")
//        nota.classList.add("border", "border-danger")
//    }
//}
//
//
//
//function disparaAlerta(mensajeDelAlerta, icono, colorIcono, colorTexto) {
//    Swal.fire({
//        icon: icono,
//        title: mensajeDelAlerta,
//        iconColor: colorIcono,
//        color: colorTexto,
//    })
//    console.error(mensajeDelAlerta)
//}
//function disparaGuardado(textnote, icono, colorI, colorTex) {
//    Swal.fire({
//        icon: icono,
//        title: textnote,
//        iconColor: colorI,
//        color: colorTex,
//    })
//}
//push para poner algo al final del arrive    let mercado = ["leche", "huevos", "harina"]; let agregarProducto = mercado.push("leche")
//unshift para poner algo al inicio del arrive
//pop para eliminar la ultima cosa del arrive
//shift para eliminar la primera cosa del arrive
//length me muestra cuantas cosas tengo en ese arrive
//arrive = []
//mercado.indexOf("queso") para indicarnos la posicion
//splice para agregar cosas en posiciones intermedias   mercado.splice(1,0,"") el cero de la mitad es para que no me elimine nada si no que solamente inserte algo