let tarjetasDestapadas = 0;
let numeros = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
let tarjeta1 = null;
let tarjeta2 = null;
let primerResultado = null;
let segundoResultado = null;
let movimientos = 0;
let aciertos = 0;
let temporizador = false;
let tiempo = 50;
let tiempoRegresivo = null;
let mostrarTiempo = document.getElementById('tiempo-restante');

let mostrarMovimientos = document.getElementById('movimientos');
let mostrarAciertos = document.getElementById('aciertos');

numeros = numeros.sort(()=> {return Math.random()-0.5});

console.log(numeros);

function contarTiempo(){
    tiempoRegresivo = setInterval(()=>{

   tiempo--;
   mostrarTiempo.innerHTML = `Tiempo: <br/>${tiempo} Segundos`;
    if(tiempo == 0){
        clearInterval(tiempoRegresivo);
        bloquearTarjetas();
    } }, 1000);
}

function bloquearTarjetas(){
    for(i=0; i<=15; i++){
        let tarjetaBloqueada = document.getElementById(i);
        // tarjetaBloqueada.innerHTML = numeros[i];
        tarjetaBloqueada.disabled = true;
        mostrarTiempo.innerHTML = `Se acabo el tiempo 😔😭`;

    }
}

function mostrar(id){
    if(temporizador == false){
        contarTiempo();
        temporizador = true;
    }
    tarjetasDestapadas++;
    console.log(tarjetasDestapadas);
    if(tarjetasDestapadas == 1){
        tarjeta1 = document.getElementById(id);
        primerResultado = numeros[id]
        tarjeta1.innerHTML = `<img src="img/${numeros[id]}.png" alt="">`;
        tarjeta1.disabled = true;
    }else if(tarjetasDestapadas == 2){
        tarjeta2 = document.getElementById(id);
        segundoResultado = numeros[id];
        tarjeta2.innerHTML = `<img src="img/${numeros[id]}.png" alt="">`;
        tarjeta2.disabled = true;
        movimientos++;
        mostrarMovimientos.innerHTML = `Movimientos:<br/>${movimientos}`;

        if(primerResultado == segundoResultado){
            tarjetasDestapadas = 0;
            aciertos++
            mostrarAciertos.innerHTML = `Aciertos:<br/>${aciertos}`;

            if(aciertos == 8){
                clearInterval(tiempoRegresivo);
                mostrarAciertos.innerHTML = `Aciertos: ${aciertos} 🥳`;
                mostrarMovimientos.innerHTML = `Movimientos: ${movimientos} 😎`;

            }
        }else{
            setTimeout(()=>{
                tarjeta1.innerHTML = '';
                tarjeta2.innerHTML = '';
                tarjeta1.disabled = false;
                tarjeta2.disabled = false;
                tarjetasDestapadas = 0;
            }, 800)
        }
    }
}